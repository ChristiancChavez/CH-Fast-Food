import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
const ImageCategoryMenu = ({ img, category}) => {
    return (
        <div>
            <img src={require(`../../Assets/Images/${img}.jpg`)} alt={category} />
            <h2>{category}</h2>
        </div>
    )
}

ImageCategoryMenu.protoTypes = {
    img: PropTypes.string,
    category: PropTypes.string,
}

export default ImageCategoryMenu;
