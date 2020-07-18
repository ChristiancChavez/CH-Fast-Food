import React, { Fragment } from "react";
import ImageSubCategory from '../Components/ImageSubCategory/ImageSubCategory';

const OptionsMenu = ({ category }) => {
  console.log(category, 'im here on OptionsMenu');
  return (
    <Fragment>
        <h2>Our wonderful {category}</h2>
        <ImageSubCategory  optionCategory={category}/>
        <button type="button">I want to eat it</button>
    </Fragment>
  );
};

export default OptionsMenu;
