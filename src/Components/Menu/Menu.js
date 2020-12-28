import React from 'react';
//Components
import ImageCategoryMenu from '../ImageCategoryMenu/ImageCategoryMenu';
//Data
import categoriesMenu from '../../Assets/Data/categoriesMenu';
//Styles
import './Menu.scss';

const Menu = () => {
    const ShowCategoriesMenu = categoriesMenu.map(categoryMenu => {
        return <ImageCategoryMenu img={categoryMenu.img} category={categoryMenu.category} page={categoryMenu.page} key={categoryMenu.id} />
    })
    return (
        <div className="menu">
            <h4 className="menu__title">Taste our delicious flavors</h4>
            <div className="menu__categories">
                {ShowCategoriesMenu}
            </div>
        </div>
    )

}

export default Menu;
