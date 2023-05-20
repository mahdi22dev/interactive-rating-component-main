import React, { useState } from "react";

const FomrInput = (props) => {
  const { label, errorMessage, onChange, id, width, ...inputprops } = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="forminput">
      <label className="label">{label}</label>
      <br />
      <input
        style={{ width: width }}
        onChange={onChange}
        {...inputprops}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <br />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FomrInput;
