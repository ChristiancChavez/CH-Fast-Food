import React from "react";
//Dependencies
import { Switch, Route } from "react-router-dom";
//Pages
import AboutUs from "../../pages/AboutUs";
import Services from "../../pages/Services";
import Home from "../../pages/Home";
import Calories from '../../pages/Calories'
//Components
import OptionsMenu from "../OptionsMenu";
//Styles
import './Main.scss';

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/services" component={Services} />
      <Route path="/calories" component={Calories} />
      <Route path="/chicken" component={() => <OptionsMenu category='chickens'/>} />
      <Route path="/hamburger" component={() => <OptionsMenu category='hamburgers'/>} />
      <Route path="/pizza" component={() => <OptionsMenu category='pizzas'/>} />
    </Switch>
  </main>
);

export default Main;