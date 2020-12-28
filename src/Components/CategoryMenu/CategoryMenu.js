import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './categoryMenu.scss';
const CategoryMenu = ({ img, category, page}) => {
    return (
        <div className="category">
            <img className="category__img" src={require(`../../assets/images/${img}.jpg`)} alt={category} />
            <Link to={`/${page}`} className="category__link">
                <h2 className="category__title">{category}</h2>
            </Link>
        </div>
    )
}

CategoryMenu.protoTypes = {
    img: PropTypes.string,
    category: PropTypes.string,
    page: PropTypes.string,
}

export default CategoryMenu;
