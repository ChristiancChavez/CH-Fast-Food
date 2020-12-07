import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Components
import OptionsSubcategory from '../OptionsSubCategory';
//data
import subCategoriesData from '../../utils/subcategories';
//styles
import './subCategory.scss';

const SubCategory = ({ optionCategory, products }) => (
    <div className="subcategory">
        {subCategoriesData[optionCategory].map((option, index) => (
            <OptionsSubcategory option={option} products={products} key={index}/>
            )
        )}
    </div>
)

SubCategory.propTypes = {
    optionCategory: PropTypes.string,
    products: PropTypes.object
}

export default SubCategory;
