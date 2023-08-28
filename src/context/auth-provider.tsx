import { createContext, useState, FC } from 'react';

export const AuthContext = createContext({});

export const AuthProvider: FC<{ children: any }> = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
