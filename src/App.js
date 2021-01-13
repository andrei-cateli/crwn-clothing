import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import SignInUp from "./pages/sign-in-up/sign-in-up";

import "./App.css";
import { auth } from "./firebase/firebase.utiles";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeeFromAuth = null;

  componentDidMount() {
    this.unsubscribeeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
