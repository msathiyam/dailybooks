import React from "react";

const Button = ({ className, onClick, type, title }) => {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
