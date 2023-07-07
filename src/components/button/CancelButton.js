import React from "react";

const CancelButton = ({ onClick, type, className,title }) => {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
      {title}
      </button>
    </>
  );
};

export default CancelButton;

CancelButton.defaultProps = {
  className:
    "bg-white text-primary px-6 py-1.5 border border-primary  rounded-[4px]",
};
