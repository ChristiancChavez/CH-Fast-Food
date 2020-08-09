import React from 'react';
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
            </div>
        )
    });
    return (
        <div className="subcategory">
            {OptionsMenu}
        </div>
    )
}

export default ImageSubCategory;
