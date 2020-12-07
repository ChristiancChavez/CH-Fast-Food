import React from "react";
//Components
import SubCategory from '../../components/SubCategory';
import Button from '../../components/Button';
import HeaderPage from '../../components/HeaderPages';

const OptionsMenu = ({ category }) => (
  <>
    <HeaderPage title={`Our wonderful *${category.toUpperCase()}*`} />
    <SubCategory  optionCategory={category}/>
    <Button text="I wanna eat it" />
  </>
);

export default OptionsMenu;
