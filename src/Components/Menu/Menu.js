import React from 'react';
//Components
import CategoryMenu from '../CategoryMenu';
import HeaderPage from '../HeaderPages';
//Data
import categoriesMenu from '../../utils/categoriesMenu';
//Styles
import './Menu.scss';

const Menu = () => {
    const ShowCategoriesMenu = categoriesMenu.map(categoryMenu => {
        return <CategoryMenu img={categoryMenu.img} category={categoryMenu.category} page={categoryMenu.page} key={categoryMenu.category} />
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
