import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
//data
import ImagesSubCategoriesData from '../../Assets/Data/ImagesSubcategories';
//styles
import './ImageSubCategory.scss';

const ImageSubCategory = ({ optionCategory }) => {
    console.log(optionCategory, 'im imageSubcategoory');
    const OptionsMenu = ImagesSubCategoriesData[optionCategory].map(option => {
        return (
            <div className="subcategory-card" key={option.flavor}>
                <img className="subcategory-card__image" src={require(`../../Assets/Images/${option.img}.png`)} alt={option.flavor} />
                <h4 className="subcategory-card__title">{option.flavor}</h4>
                <div className="subcategory-card__counter">
                    <buton className="subcategory-card__counter__button subcategory-card__counter__button--left">-</buton>
                    <span className="subcategory-card__counter__amount">0</span>
                    <buton className="subcategory-card__counter__button subcategory-card__counter__button--right">+</buton>
                </div>
            </div>
        )
    });
    return (
        <div className="subcategory">
            {OptionsMenu}
        </div>
    )
}

ImageSubCategory.propTypes = {
    optionCategory: PropTypes.string
}

export default ImageSubCategory;
