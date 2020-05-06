import React from "react";
//Dependencies
import { Switch, Route } from "react-router-dom";
//Components
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
//Styles
import './Main.scss';
const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
};

export default Main;