import React from "react";
import "./index.css";

const Switch = ({value}) => {
  const handlePreference = () => {
    console.log("Switch");
  };

  return (
    <label class="switch">
      <input
        onChange={handlePreference}
        type="checkbox"
        id="togBtn"
        defaultChecked={value}
      />
      <div class="slider round"></div>
    </label>
  );
};

export default Switch;
