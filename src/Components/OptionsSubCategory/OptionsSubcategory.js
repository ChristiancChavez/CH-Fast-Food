import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Styles
import './OptionsSubcategory.scss';

const OptionsSubcategory = ({ option, handleReduceProductCounter, handleAddProductCounter }) => {
    return (
        <div className="options-subcategory" key={option.flavor}>
            <img className="options-subcategory__image" src={require(`../../Assets/Images/${option.img}.png`)} alt={option.flavor} />
            <h4 className="options-subcategory__title">{option.flavor}</h4>
            <div className="options-subcategory__counter">
                <button className="options-subcategory__counter__button options-subcategory__counter__button--left" onClick={handleReduceProductCounter}>-</button>
                <span className="options-subcategory__counter__amount">0</span>
                <button className="options-subcategory__counter__button options-subcategory__counter__button--right" onClick={handleAddProductCounter}>+</button>
            </div>
        </div>
    )
}

OptionsSubcategory.propTypes = {
    option: PropTypes.object
}

export default OptionsSubcategory;