import React, {createContext, useContext, useEffect} from 'react';

import type {UsageMetadata} from './hooks/useUsageTracking';

const generateSessionId = (): string => {
    let sessionId = sessionStorage.getItem('usageTrackingSessionId');
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        sessionStorage.setItem('usageTrackingSessionId', sessionId);
    }
    return sessionId;
};

const UserContext = createContext<UserContextProps>({
    currentTime: '',
    language   : '',
    platform   : '',
    sessionId  : '',
    timezone   : '',
});

export const UserContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const init: UserContextProps = {
        currentTime: new Date().toISOString(),
        language   : navigator.language,
        platform   : navigator.userAgent,
        sessionId  : generateSessionId(),
        timezone   : Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            return;
        }

        const sendUsageSession = async (body: UsageMetadata): Promise<void> => {
            try {
                await fetch('https://usage.jaredhayashi.com/usage/session', {
                    body   : JSON.stringify({...body}),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                });
            } catch (e) {
                console.error(`Failed to send usage session data ${e}`);
            }
        };

        const metadata = {
            currentTime: init.currentTime,
            language   : init.language,
            platform   : init.platform,
            sessionId  : init.sessionId,
            timezone   : init.timezone,
        };

        sendUsageSession(metadata);
    }, [init.language, init.platform, init.sessionId, init.timezone]);

    return (
        <UserContext.Provider value={init}>
            {children}
        </UserContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = (): UserContextProps => useContext(UserContext);

interface UserContextProps {
    currentTime: string;
    language: string;
    platform: string;
    sessionId: string;
    timezone: string;
}
