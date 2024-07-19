import React from "react";
import { Checkbox } from "antd";
import type { GetProp } from "antd";
import { CheckBoxProps } from "./ChecboxType";
import { CheckboxWarraper } from "./styled";

const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
  checkedValues
) => {
  console.log("checked = ", checkedValues);
};

const CheckboxComponent: React.FC<CheckBoxProps> = ({
  optionsData,
  useCricle,
}) => {
  return (
    <>
      <CheckboxWarraper $circle={useCricle}>
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
