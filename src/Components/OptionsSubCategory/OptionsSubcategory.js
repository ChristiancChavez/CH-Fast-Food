import React, { Component } from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Styles
import './OptionsSubcategory.scss';

class OptionsSubcategory extends Component {
    state = {
        totalProduct: 0
    };

    handleAddProductCounter = (category, flavor, amount) => {
        this.setState({
            totalProduct: this.state.totalProduct + 1
        });
        this.props.handleUpdateProduct(category, flavor, amount);
    };

    handleReduceProductCounter = (category, flavor, amount) => {
        if(this.state.totalProduct > 0){
            this.setState({
                totalProduct: this.state.totalProduct -1
            });
            this.props.handleUpdateProduct(category, flavor, amount);
        }
    };
    render(){
        const { option, category } = this.props;
        const { totalProduct } = this.state;
        return (
            <div className="options-subcategory">
                <img className="options-subcategory__image" src={require(`../../assets/images/${option.img}.png`)} alt={option.flavor} />
                <h4 className="options-subcategory__title">{option.flavor}</h4>
                <div className="options-subcategory__counter">
                    <button className="options-subcategory__counter__button options-subcategory__counter__button--left" onClick={() => this.handleReduceProductCounter(category, option.flavor, totalProduct)}>-</button>
                    <span className="options-subcategory__counter__amount">{totalProduct}</span>
                    <button className="options-subcategory__counter__button options-subcategory__counter__button--right" onClick={() => this.handleAddProductCounter(category, option.flavor, totalProduct)}>+</button>
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