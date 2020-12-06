import React from "react";
//Components
import HeaderPage from '../Components/HeaderPages/HeaderPages';

const AboutUs = () => {
  const aboutUs = `CH's Food is the leading chain of quick service food restaurants around the world, with more than 30,000 
  locations serving 52 million people daily in more than 100 countries.
  CH's Food is the largest restaurant operator in Latin America and the largest franchisee in Latin
  America, operating more than 2,062 restaurants, 2,259 dessert centers and 348 cafes in 19 countries 
  (Argentina, Aruba, Brazil, Chile, Colombia, Costa Rica, Curaçao, Ecuador, Guadalupe, Guyana French, Martinique, 
  Mexico, Panama, Peru, Puerto Rico, Saint Thomas, Saint Croix, Uruguay and Venezuela) and provides advisory 
  services in ten other markets in the region. It has more than 100,000 employees who serve 3.5 million customers 
  a day. In addition to being one of the top employers in the region, CH's Food is recognized as one of the 25 
  best companies to work for and one of the top employers of youth on their first job.`
  return (
    <HeaderPage title="Welcome to AboutUs!" paragraph={aboutUs} />
  );
};

export default AboutUs;
