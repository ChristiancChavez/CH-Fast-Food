import React from 'react';
import  { ImagesSubCategoriesData } from '../../Assets/Data/ImagesSubcategories';

const ImageSubCategory = () => {
    console.log(ImagesSubCategoriesData.Chickens, 'heloooooooooooooooooooooooooooooo');
    const OptionsMenu = ImagesSubCategoriesData.Chickens.map(chicken => (
        <div className="subcategory-card">
            <img className="subcategory-card__image" src={require(`../../Assets/Images/${chicken.img}.png`)} alt={chicken.flavor} />
            <h4 className="subcategory-card__title">{chicken.flavor}</h4>
        </div>
    ));
    return (
        <div className="subcategory">
            <OptionsMenu />
        </div>
    )
}

export default ImageSubCategory;
