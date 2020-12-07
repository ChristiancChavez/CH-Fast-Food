import React, { Component } from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Styles
import './OptionsSubcategory.scss';

class OptionsSubcategory extends Component {
    state = {
        product: 0
    };

    handleAddProductCounter = () => {
        this.setState({
            product: this.state.product + 1
        });
    };

    handleReduceProductCounter = () => {
        this.setState({
            product: this.state.product -1
        });
    };
    render(){
        const { option } = this.props;
        const { product } = this.state;
        return (
            <div className="options-subcategory">
                <img className="options-subcategory__image" src={require(`../../assets/images/${option.img}.png`)} alt={option.flavor} />
                <h4 className="options-subcategory__title">{option.flavor}</h4>
                <div className="options-subcategory__counter">
                    <button className="options-subcategory__counter__button options-subcategory__counter__button--left" onClick={this.handleReduceProductCounter}>-</button>
                    <span className="options-subcategory__counter__amount">{product}</span>
                    <button className="options-subcategory__counter__button options-subcategory__counter__button--right" onClick={this.handleAddProductCounter}>+</button>
                </div>
            </div>
        )
    }
}

OptionsSubcategory.propTypes = {
    option: PropTypes.object,
    product: PropTypes.number,
    handleReduceProductCounter: PropTypes.func,
    handleAddProductCounter: PropTypes.func
}

export default OptionsSubcategory;