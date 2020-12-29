import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [login, setLogin] = useState(true);
    return (
        <AuthContext.Provider value={{login , setLogin}}>
            {props.children}
        </AuthContext.Provider>)
};

export default AuthContextProvider;