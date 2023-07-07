import { Radio } from "antd";
import React from "react";

const RadioButton = ({ value, id, name, title, onChange, onBlur }) => {
  return (
    <div>
      <Radio.Group name="radiogroup">
        <div>
          <Radio
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
          >
            {title}
          </Radio>
        </div>
      </Radio.Group>
    </div>
  );
};

export default RadioButton;
