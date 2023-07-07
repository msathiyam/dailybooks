import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const SaveButton = ({ onClick, title, className, type }) => {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default SaveButton;

SaveButton.defaultProps = {
  className:
    "bg-primary text-white px-6 py-1.5 border border-primary mr-2 rounded-[4px]",
};
