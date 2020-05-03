import React from 'react';
//Components
import ImageCategoryMenu from '../ImageCategoryMenu/ImageCategoryMenu';
//Styles
import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <h4 className="menu__title">Taste our delicious flavors</h4>
            <div className="menu__categories">
                <ImageCategoryMenu img={'chicken-category'} category={'Broasted Chicken'} />
                <ImageCategoryMenu img={'hamburger-category'} category={'Hamburger'} />
                <ImageCategoryMenu img={'pizza-category'} category={'Pizza'} />
            </div>
        </div>
    )

}

export default Menu;
