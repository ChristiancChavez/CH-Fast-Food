import React from 'react';
//Components
import ImageCategoryMenu from '../ImageCategoryMenu/ImageCategoryMenu';
import HeaderPage from '../HeaderPages/HeaderPages';
//Data
import categoriesMenu from '../../Assets/Data/categoriesMenu';
//Styles
import './Menu.scss';

const Menu = () => {
    const ShowCategoriesMenu = categoriesMenu.map(categoryMenu => {
        return <ImageCategoryMenu img={categoryMenu.img} category={categoryMenu.category} page={categoryMenu.page} />
    })
    return (
        <div className="menu">
            <HeaderPage title="Taste Our Awesome Flavors" />
            <div className="menu__categories">
                {ShowCategoriesMenu}
            </div>
        </div>
    )

}

export default Menu;
