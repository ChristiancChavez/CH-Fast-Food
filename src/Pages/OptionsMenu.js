import React, { Fragment } from "react";
//Components
import SubCategory from '../Components/SubCategory/SubCategory';
import Button from '../Components/Button/Button';
import HeaderPage from '../Components/HeaderPages/HeaderPages';

const OptionsMenu = ({ category }) => {
  console.log(category, 'im here on OptionsMenu');
  return (
    <Fragment>
        <HeaderPage title={`Our wonderful *${category.toUpperCase()}*`} />
        <SubCategory  optionCategory={category}/>
        <Button text="I wanna eat it" />
    </Fragment>
  );
};

export default OptionsMenu;
