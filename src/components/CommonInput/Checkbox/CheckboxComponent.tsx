import React from "react";
import { Checkbox } from "antd";
import { CheckBoxProps } from "./ChecboxType";
import { CheckboxWarraper } from "./styled";

const CheckboxComponent: React.FC<CheckBoxProps> = ({
  optionsData,
  useCricle,
  onChange,
  value,
  height,
  disabled,
  ...props
}) => {

  return (
    <>
      <CheckboxWarraper $circle={useCricle} $heightElement={height} $disabled={disabled}>
        <Checkbox.Group
          options={optionsData}
          defaultValue={[optionsData[0]?.value]}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      </CheckboxWarraper>
    </>
  );
};

export default CheckboxComponent;
