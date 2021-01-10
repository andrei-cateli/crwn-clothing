import React from "react";

import "./InputForm.scss";

const InputForm = ({ handelChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handelChange} {...otherProps} />
    {label ? (
      <label
        className={`form-input-label ${
          otherProps.value.length ? "shrink" : ""
        }`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default InputForm;
