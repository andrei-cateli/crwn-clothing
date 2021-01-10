import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Shop from "./pages/shop/shop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
