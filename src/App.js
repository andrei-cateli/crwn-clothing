import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import SignInUp from "./pages/sign-in-up/sign-in-up";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
