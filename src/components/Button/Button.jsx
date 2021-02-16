import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`custom-button ${inverted ? "inverted" : ""}  ${
      isGoogleSignIn ? "google-sign-in" : ""
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
