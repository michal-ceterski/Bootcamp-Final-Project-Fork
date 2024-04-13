import { ReactElement, createContext } from 'react';
import { useState } from 'react';

interface UserContextState {
    ID:string,
    setID:(ID:string) => void
};

interface UserContextState {
    ID:string,
    setID:(ID:string) => void
};

interface UserContextProps {
    children:ReactElement
};

const defaultUserContextValue={} as UserContextState;

export const UserContext = createContext(defaultUserContextValue);

export const UserContextProvider:React.FC<UserContextProps> = ({children}) => {
    const [ID, setID] = useState("")
    return (
        <UserContext.Provider value={{ID, setID}}>
            {children}
        </UserContext.Provider>
    )
};
