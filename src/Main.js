import React from "react";
//Dependencies
import { Switch, Route } from "react-router-dom";
//Components
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import MenuPage from "./Pages/MenuPage";
import OptionsMenu from "./Pages/OptionsMenu";
//Styles
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={MenuPage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/chicken" component={() => <OptionsMenu category='chickens'/>} />
        <Route path="/hamburger" component={() => <OptionsMenu category='hamburgers'/>} />
        <Route path="/pizza" component={() => <OptionsMenu category='pizzas'/>} />
      </Switch>
    </main>
  );
};

export default Main;