import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
//Components
import OptionsSubcategory from '../OptionsSubCategory';
//data
import subCategoriesData from '../../utils/subcategories';
//styles
import './SubCategory.scss';

const SubCategory = ({ optionCategory, products, handleUpdateProduct }) => (
    <div className="subcategory">
        {subCategoriesData[optionCategory].map((option, index) => (
            <OptionsSubcategory 
                handleUpdateProduct={handleUpdateProduct} 
                option={option} 
                products={products} 
                key={index}
                category={optionCategory}
            />
            )
        )}
    </div>
)

SubCategory.propTypes = {
    optionCategory: PropTypes.string,
    products: PropTypes.object
}

export default SubCategory;
