import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import { MultipleSelectWarraper } from "./styled";
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
// Định nghĩa kiểu dữ liệu
type OptionType = {
  label: string;
  value: string;
};

// Hàm lấy dữ liệu
const fetchData = async (): Promise<OptionType[]> => {
  try {
    const response = await axios.get("http://localhost:9999/Project_Tag");
    // Sử dụng type OptionType cho kiểu dữ liệu của response.data
    return response.data.map((item: OptionType) => ({
      label: item.label,
      value: item.value,
    }));
  } catch (error) {
    console.error("Error fetching options:", error);
    return [];
  }
};

const MultipleSelect: React.FC = () => {
  const [options, setOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const getOptions = async () => {
      const fetchedOptions = await fetchData();
      setOptions(fetchedOptions);
    };

    getOptions();
  }, []);

  return (
    <MultipleSelectWarraper>
      <Select
        mode="multiple"
        style={{ width: "100%", height: "40px" }}
        placeholder="Select one or more tags"
        onChange={handleChange}
        options={options}
      />
    </MultipleSelectWarraper>
  );
};

export default MultipleSelect;
