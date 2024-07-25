import React from "react";
import { Select } from "antd";
import { MultipleSelectWarraper } from "./styled";

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    label: "China",
    value: "china",
  },
  {
    label: "USA",
    value: "usa",
  },
  {
    label: "Japan",
    value: "japan",
  },
  {
    label: "Korea",
    value: "korea",
  },
];

const MultipleSelect: React.FC = () => (
  <MultipleSelectWarraper>
    <Select
      mode="multiple"
      style={{ width: "100%", height: "40px" }}
      placeholder="select one country"
      defaultValue={["china"]}
      onChange={handleChange}
      options={options}
    />
  </MultipleSelectWarraper>
);

export default MultipleSelect;
