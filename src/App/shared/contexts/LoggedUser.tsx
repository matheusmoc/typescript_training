import { createContext, useCallback } from "react";

interface IUserLoggedContextData {
    userName?: String,
    logout: ()=>void;
}

export const UserLoggedContext = createContext<IUserLoggedContextData>({
    //empty
} as IUserLoggedContextData );



interface IUserLoggedProviderProps {
    children?: React.ReactNode,
}

export const UserLoggedProvider: React.FC<IUserLoggedProviderProps> = ({ children }) => {
    const handleLogout = useCallback(()=>{
        console.log('Bye');
    }, [])

    return (
        <UserLoggedContext.Provider value={{userName: 'Matheus', logout: handleLogout}}>
            {children}
        </UserLoggedContext.Provider>
    );
}