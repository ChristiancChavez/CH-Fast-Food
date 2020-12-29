import React from "react";
//Components
import CategoryMenu from '../../Components/CategoryMenu';
import HeaderPage from '../../Components/HeaderPages';
//Data
import categoriesMenu from '../../utils/categoriesMenu';
//Styles
import './home.scss';

const Home = () => (
  <div className="home">
    <HeaderPage title="Taste Our Awesome Flavors" />
    <div className="home__categories">
      {categoriesMenu.map(categoryMenu => (
          <CategoryMenu
            img={categoryMenu.img}
            category={categoryMenu.category}
            page={categoryMenu.page}
            key={categoryMenu.category} 
          />
        )
      )}
    </div>
  </div>
);

export default Home;
