import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './ImageCategoryMenu.scss';
const ImageCategoryMenu = ({ img, category, page}) => {
    return (
        <div className="category">
            <img className="category__img" src={require(`../../Assets/Images/${img}.jpg`)} alt={category} />
            <Link to={`/${page}`} className="category__link">
                <h2 className="category__title">{category}</h2>
            </Link>
        </div>
    )
}

ImageCategoryMenu.protoTypes = {
    img: PropTypes.string,
    category: PropTypes.string,
    page: PropTypes.string,
}

export default ImageCategoryMenu;
