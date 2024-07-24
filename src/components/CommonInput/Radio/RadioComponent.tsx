import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import "./RadioComponent.scss";

interface RadioComponentProps {
  options: { label: string; value: number }[];
}

const RadioComponent: React.FC<RadioComponentProps> = ({ options }) => {
  const [value, setValue] = useState<number>(options[0]?.value || 1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioComponent;
