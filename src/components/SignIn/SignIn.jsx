import React, { Component } from "react";
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";

import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const { email, password } = this.state;

    const handelSubmit = (e) => {
      e.preventDefault();
      this.setState({ email: "", password: "" });
    };

    const handelChange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
    };

    return (
      <div className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span> Sign in with your email and password.</span>

        <form onSubmit={handelSubmit}>
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
          <Button type="submit">Sign In </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
