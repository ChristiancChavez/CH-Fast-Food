import React from 'react';
//Components
import ImageCategoryMenu from '../ImageCategoryMenu/ImageCategoryMenu';
//Styles
import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <ImageCategoryMenu img={'chicken-category'} category={'Broasted Chicken'} />
            <ImageCategoryMenu img={'hamburger-category'} category={'Hamburger'} />
            <ImageCategoryMenu img={'pizza-category'} category={'Pizza'} />
        </div>
    )

}

export default Menu;
