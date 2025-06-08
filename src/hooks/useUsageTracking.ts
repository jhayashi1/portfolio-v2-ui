import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

const STORAGE_KEY = 'usageTrackingBuffer';
const SEND_INTERVAL = 60 * 1000;

export const useUsageTracking = (): void => {
    const location = useLocation();
    const enterTimeRef = useRef(Date.now());
    const prevPathRef = useRef(location.pathname);

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

    const sendBuffer = (): void => {
        const buffer = getBuffer();
        if (buffer.length > 0) {
            console.log('Sending usage data:', JSON.stringify(buffer, null, 4));
            clearBuffer();
        }
    };

    useEffect(() => {
        const now = Date.now();
        const prevPath = prevPathRef.current;
        const timeSpent = now - enterTimeRef.current;

        if (prevPath !== location.pathname) {
            const buffer = getBuffer();
            buffer.push({
                path: prevPath,
                timeSpent,
                ts  : now,
                type: 'CHANGE_PAGE',
            });
            setBuffer(buffer);
        }

        prevPathRef.current = location.pathname;
        enterTimeRef.current = now;
    }, [location]);

    useEffect(() => {
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
            sendBuffer();
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
    }, []);
};

interface UsageData {
    path: string;
    timeSpent: number;
    ts: number;
    type: 'CHANGE_PAGE' | 'UNLOAD';
}

interface UsageMetadata {
    sessionId: string;
    platform: string;
    timezone: string;
    language: string;
}

interface UsagePayload {
    metadata: UsageMetadata;
    buffer: UsageData[];
}
