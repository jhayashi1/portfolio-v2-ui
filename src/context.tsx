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
    sessionId: '',
    platform : '',
    timezone : '',
    language : '',
});

export const UserContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const init: UserContextProps = {
        sessionId: generateSessionId(),
        platform : navigator.userAgent,
        timezone : Intl.DateTimeFormat().resolvedOptions().timeZone,
        language : navigator.language,
    };

    useEffect(() => {
        const sendUsageSession = async (body: UsageMetadata): Promise<void> => {
            try {
                await fetch('https://usage.jaredhayashi.com/usage/session', {
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...body}),
                });
            } catch (e) {
                console.error(`Failed to send usage session data ${e}`);
            }
        };

        const metadata = {
            sessionId: init.sessionId,
            platform : init.platform,
            timezone : init.timezone,
            language : init.language,
        };

        sendUsageSession(metadata);
    }, []);

    return (
        <UserContext.Provider value={init}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): UserContextProps => useContext(UserContext);

interface UserContextProps {
    sessionId: string;
    platform: string;
    timezone: string;
    language: string;
}
