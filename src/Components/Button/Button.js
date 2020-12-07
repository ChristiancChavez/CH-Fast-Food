import React from 'react';
//Styles
import './Button.scss';

const Button = ({ text }) => {
    return (
        <button className="button" type="button">{text}</button> 
    )   
}

export default Button;