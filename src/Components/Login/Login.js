import React, { useContext, useState } from 'react';
//Style
import './login.scss'
import { AuthContext } from './../../context/AuthContext';


const Login = ({ setShowLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const { setLogin } = useContext(AuthContext);
    const handleInfo = (e) => {
        e.preventDefault();
        setLogin(false);
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
        setShowLogin(false);
    }
    return (
        <div className="login" onSubmit={handleInfo}>
            <button className="login-close" onClick={() => {setShowLogin(false)}}>X</button>
            <div className="login-content">
                <form className="login-content__form">
                    <input placeholder="Type your Name" value={name} type="email" onChange={(e) => {setName(e.target.value)}} />
                    <input placeholder="Type your Phone number" value={phone} type="email" onChange={(e) => {setPhone(e.target.value)}} />
                    <input placeholder="Type your Email" value={email} type="email" onChange={(e) => {setEmail(e.target.value)}} />
                    <input placeholder="Type your Password" value={password} type="password" onChange={(e) => {setPassword(e.target.value)}} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
};
export default Login;