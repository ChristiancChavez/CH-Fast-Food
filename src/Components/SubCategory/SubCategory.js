import React, { Component } from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Components
import OptionsSubcategory from '../OptionsSubCategory/OptionsSubcategory';
//data
import SubCategoriesData from '../../Assets/Data/Subcategories';
//styles
import './SubCategory.scss';

class SubCategory extends Component {
    state = {
        counter: 0
    };

    handleAddProductCounter = () => {
        console.log('handleAdd');
    };

    handleReduceProductCounter = () => {
        console.log('handleReduce');
    };


    render() {
        const { optionCategory } = this.props;
        const OptionsMenu = SubCategoriesData[optionCategory].map((option, index) => {
            return (
                <OptionsSubcategory option={option} handleReduceProductCounter={this.handleReduceProductCounter} handleAddProductCounter={this.handleAddProductCounter} key={index}/>
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
