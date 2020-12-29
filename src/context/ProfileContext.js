import React, { useState, createContext } from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <profileContext.Provider value={{email, setEmail, password, setPassword, name, setName, phone, setPhone}}>
            {props.children}
        </profileContext.Provider>
    )
}

export default ProfileContextProvider;
