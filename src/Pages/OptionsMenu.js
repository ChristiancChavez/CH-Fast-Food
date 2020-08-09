import React, { Fragment } from "react";
import ImageSubCategory from '../Components/ImageSubCategory/ImageSubCategory';
import Button from '../Components/Button/Button';

const OptionsMenu = ({ category }) => {
  console.log(category, 'im here on OptionsMenu');
  return (
    <Fragment>
        <h2>Our wonderful {category}</h2>
        <ImageSubCategory  optionCategory={category}/>
        <Button />
    </Fragment>
  );
};

export default OptionsMenu;
