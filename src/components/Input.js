import React from "react";

const Input = ({ value, onChange, error, ...others }) => {
  return (
    <div className="input-div">
      <input
        className={`input-field ${error ? "error" : ""}`}
        value={value}
        onChange={onChange}
        {...others}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
