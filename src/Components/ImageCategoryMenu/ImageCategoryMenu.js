import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
import './ImageCategoryMenu.scss';
const ImageCategoryMenu = ({ img, category}) => {
    return (
        <div className="category">
            <img className="category__img" src={require(`../../Assets/Images/${img}.jpg`)} alt={category} />
            <h2 className="category__title">{category}</h2>
        </div>
    )
}

ImageCategoryMenu.protoTypes = {
    img: PropTypes.string,
    category: PropTypes.string,
}

export default ImageCategoryMenu;
