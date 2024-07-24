import React from "react";
import { Select, Space } from "antd";
import { MultipleSelectWarraper } from "./styled";

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    label: "China",
    value: "china",
    emoji: "🇨🇳",
    desc: "China (中国)",
  },
  {
    label: "USA",
    value: "usa",
    emoji: "🇺🇸",
    desc: "USA (美国)",
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "Korea",
    value: "korea",
    emoji: "🇰🇷",
    desc: "Korea (韩国)",
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
      optionRender={(option) => (
        <Space>
          <span role="img" aria-label={option.data.label}>
            {option.data.emoji}
          </span>
          {option.data.desc}
        </Space>
      )}
    />
  </MultipleSelectWarraper>
);

export default MultipleSelect;
