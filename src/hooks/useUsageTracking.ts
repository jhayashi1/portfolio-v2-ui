import {useCallback, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

import {useUserContext} from '../context';

const STORAGE_KEY = 'usageTrackingBuffer';
const SEND_INTERVAL = 10 * 1000;

export const useUsageTracking = (): void => {
    const location = useLocation();
    const enterTimeRef = useRef<number>(0);
    const prevPathRef = useRef(location.pathname);
    const metadata = useUserContext();

    const getBuffer = (): UsageData[] => {
        const raw = localStorage.getItem(STORAGE_KEY) ?? '[]';
        return JSON.parse(raw);
    };

    const setBuffer = (buffer: UsageData[]): void => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(buffer));
    };

    const clearBuffer = (): void => {
        localStorage.removeItem(STORAGE_KEY);
    };

    const sendBuffer = useCallback(async (): Promise<void> => {
        const buffer = getBuffer();
        if (buffer.length > 0) {
            try {
                await fetch('https://usage.jaredhayashi.com/usage', {
                    body   : JSON.stringify({buffer, metadata}),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                });
            } catch (e) {
                console.error(`Failed to send usage data ${e}`);
                return;
            }

            clearBuffer();
        }
    }, [metadata]);

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            return;
        }

        const now = Date.now();
        const prevPath = prevPathRef.current;
        const timeSpent = now - enterTimeRef.current;

        if (prevPath !== location.pathname) {
            const buffer = getBuffer();
            buffer.push({
                path: prevPath,
                timeSpent,
                to  : location.pathname,
                ts  : now,
                type: 'CHANGE_PAGE',
            });
            setBuffer(buffer);
        }

        prevPathRef.current = location.pathname;
        enterTimeRef.current = now;
    }, [location]);

    useEffect(() => {
        // Skip usage tracking in development to avoid CORS issues
        if (process.env.NODE_ENV === 'development') {
            return;
        }

        let hasSent = false;
        const handleUnloadOrHide = (): void => {
            if (hasSent) {
                return;
            }

            hasSent = true;
            const now = Date.now();
            const prevPath = prevPathRef.current;
            const timeSpent = now - enterTimeRef.current;
            const buffer = getBuffer();

            buffer.push({
                path: prevPath,
                timeSpent,
                ts  : now,
                type: 'UNLOAD',
            });
            setBuffer(buffer);
        };

        const handleVisibilityChange = (): void => {
            if (document.visibilityState === 'hidden') {
                handleUnloadOrHide();
            }
        };

        window.addEventListener('beforeunload', handleUnloadOrHide);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        const interval = setInterval(sendBuffer, SEND_INTERVAL);

        return (): void => {
            window.removeEventListener('beforeunload', handleUnloadOrHide);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            clearInterval(interval);
        };
    }, [sendBuffer]);
};

export interface UsageData {
    path: string;
    timeSpent: number;
    to? : string;
    ts: number;
    type: 'CHANGE_PAGE' | 'UNLOAD';
}

export interface UsageMetadata {
    currentTime: string;
    language: string;
    platform: string;
    sessionId: string;
    timezone: string;
}
