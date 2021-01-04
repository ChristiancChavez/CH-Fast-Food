import React, { useContext, useState } from 'react';
//Style
import './login.scss'
import { AuthContext } from './../../context/AuthContext';
import { ProfileContext } from './../../context/ProfileContext';


const Login = ({ setShowLogin }) => { 

    const  [ items, setItems ]  = useState({});
    const { setLogin } = useContext(AuthContext);
    const { setProfile } = useContext(ProfileContext);

    const handleSetItems = (e) => {
        setItems({
            ...items,
            [e.target.name]: e.target.value
        })

        console.log(items);
    };

    const handleInfo = (e) => {
        e.preventDefault();
        setLogin(false);
        setShowLogin(false);
        setProfile({
            user: items.user, 
            email: items.email, 
            phone: items.phone, 
            password: items.password
        })
    }
    return (
        <div className="login" onSubmit={handleInfo}>
            <button className="login-close" onClick={() => {setShowLogin(false)}}>X</button>
            <div className="login-content">
                <form className="login-content__form">
                    <input required placeholder="Type your Name" name="user" value={items.user} type="text" onChange={(e) => handleSetItems(e) } />
                    <input required placeholder="Type your Email" name="email" value={items.email} type="email" onChange={(e) => handleSetItems(e)} />
                    <input required placeholder="Type your Phone number" name="phone"  value={items.phone} type="number" onChange={(e) => handleSetItems(e)} />
                    <input required placeholder="Type your Password" name="password" value={items.password} type="password" onChange={(e) => handleSetItems(e)} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
};
export default Login;