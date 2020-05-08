import React, { Fragment } from 'react';
import { ImagesSubCategoriesData } from '../../Assets/Data/ImagesSubcategories';

const ImageSubCategory = () => {
    const OptionsMenu = ImagesSubCategoriesData.Chickens.map(chicken => {
        return (
            <Fragment>
                <img className="subcategory__image" src={require(`../../Assets/Images/${chicken.img}.png`)} alt={chicken.flavor} />
                <h2 className="subcategory__title">{chicken.flavor}</h2>
            </Fragment>
        )
    });
    return (
        <div className="subcategory">
            <OptionsMenu />
        </div>
    )
}

export default ImageSubCategory;
