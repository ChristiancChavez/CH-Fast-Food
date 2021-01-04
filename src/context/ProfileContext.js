import React, { useState, createContext } from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

    const [profile, setProfile] = useState({user:'', email:'', phone:'', password:'' })

    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;
