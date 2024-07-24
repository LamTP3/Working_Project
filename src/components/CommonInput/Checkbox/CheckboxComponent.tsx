import React from "react";
import { Checkbox } from "antd";
import { CheckBoxProps } from "./ChecboxType";
import { CheckboxWarraper } from "./styled";

const CheckboxComponent: React.FC<CheckBoxProps> = ({
  optionsData,
  useCricle,
  onChange,
  height,
}) => {
  return (
    <>
      <CheckboxWarraper $circle={useCricle} $heightElement={height}>
        <Checkbox.Group
          options={optionsData}
          defaultValue={[optionsData[0]?.value]}
          onChange={onChange}
        />
      </CheckboxWarraper>
    </>
  );
};

export default CheckboxComponent;
