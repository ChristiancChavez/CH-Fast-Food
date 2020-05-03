import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

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