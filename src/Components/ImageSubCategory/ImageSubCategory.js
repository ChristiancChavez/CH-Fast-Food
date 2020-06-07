import React from 'react';
//data
import ImagesSubCategoriesData from '../../Assets/Data/ImagesSubcategories';
//styles
import './ImageSubCategory.scss';

const ImageSubCategory = () => {
    console.log(ImagesSubCategoriesData.chickens );
    const OptionsMenu = ImagesSubCategoriesData.chickens.map(chicken => {
        return (
            <div className="subcategory-card" key={chicken.flavor}>
                <img className="subcategory-card__image" src={require(`../../Assets/Images/${chicken.img}.png`)} alt={chicken.flavor} />
                <h4 className="subcategory-card__title">{chicken.flavor}</h4>
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
