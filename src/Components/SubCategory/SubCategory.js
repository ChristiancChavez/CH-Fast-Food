import React, { Component } from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Components
import OptionsSubcategory from '../OptionsSubCategory';
//data
import SubCategoriesData from '../../utils/subcategories';
//styles
import './SubCategory.scss';

class SubCategory extends Component {
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


    render() {
        const { optionCategory } = this.props;
        const { product } = this.state;
        const OptionsMenu = SubCategoriesData[optionCategory].map((option, index) => {
            return (
                <OptionsSubcategory option={option} product={product} handleReduceProductCounter={this.handleReduceProductCounter} handleAddProductCounter={this.handleAddProductCounter} key={index}/>
            )
        });
        return (
            <div className="subcategory">
                {OptionsMenu}
            </div>
        )
    }
} 

SubCategory.propTypes = {
    optionCategory: PropTypes.string
}

export default SubCategory;
