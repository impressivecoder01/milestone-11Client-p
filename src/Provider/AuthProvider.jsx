import React, { createContext } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const s = 'name'
    return (
        <AuthContext.Provider value={s}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;