import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`custom-button  ${isGoogleSignIn ? "google-sign-in" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
