import React, { Component } from "react";
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utiles";

import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;

    const handelChange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
    };

    return (
      <div className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span> Sign in with your email and password.</span>

        <form onSubmit={this.handelSubmit}>
          <InputForm
            type="email"
            name="email"
            value={email}
            handelChange={handelChange}
            label="Email"
            required
          />
          <InputForm
            type="password"
            name="password"
            value={password}
            handelChange={handelChange}
            label="Password"
            required
          />
          <div className="buttons-group">
            <Button type="submit">Sign In </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
