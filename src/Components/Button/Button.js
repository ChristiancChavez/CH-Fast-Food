import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Styles
import './Button.scss';

const Button = ({ text, handleMethod }) => {
    return (
        <button className="button" type="button" onClick={handleMethod}>{text}</button> 
    )   
}

Button.propTypes = {
    text: PropTypes.string,
    handleRenderOrder: PropTypes.func
}

export default Button;