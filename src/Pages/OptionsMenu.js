import React, { Fragment } from "react";
//Components
import ImageSubCategory from '../Components/ImageSubCategory/ImageSubCategory';
import Button from '../Components/Button/Button';
import HeaderPage from '../Components/HeaderPages/HeaderPages';

const OptionsMenu = ({ category }) => {
  console.log(category, 'im here on OptionsMenu');
  return (
    <Fragment>
        <HeaderPage title={`Our wonderful *${category.toUpperCase()}*`} />
        <ImageSubCategory  optionCategory={category}/>
        <Button text="I wanna eat it" />
    </Fragment>
  );
};

export default OptionsMenu;
