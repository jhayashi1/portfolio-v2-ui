import React, {createContext, useContext} from 'react';

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

    console.log(`context initialized with value: ${JSON.stringify(init, null, 4)}`);

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
