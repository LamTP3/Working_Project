import React from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { DatePickerWarraper } from "./styled";
import { Props } from "./DatePickerType";
import { DateIcon } from "../../../Icon";
import dayjs, { Dayjs } from "dayjs";
import { CloseOutlined } from "@ant-design/icons";

// Định dạng ngày giờ
const dateFormat = "MM/DD/YYYY HH:mm";

const DatePickerComponent: React.FC<Props> = ({
  disabled,
  width,
  placeholder,
  value,
  minDate,
  onChange,
}) => {
  const onChangeProp: DatePickerProps["onChange"] = (date, dateStr) => {
    if (onChange) {
      onChange(date, dateStr);
    }
    console.log("Date String:", dateStr);
    console.log("Begin date:", date);
    console.log(
      "Formatted to exact date we need:",
      date ? date.format(dateFormat) : "No date"
    );
  };

  const dayjsValue = value ? dayjs(value, dateFormat) : undefined;

  const disabledDate = (current: Dayjs) => {
    if (minDate) {
      const today = dayjs().startOf("day");
      return current && current.isBefore(today);
    }
    return false;
  };

  return (
    <DatePickerWarraper $width={width} $disabled={disabled}>
      <DatePicker
        showTime
        onChange={onChangeProp}
        placeholder={placeholder || "MM/dd/yyyy HH:mm"}
        suffixIcon={<DateIcon />}
        format={dateFormat}
        disabledDate={disabledDate}
        disabled={disabled}
        value={dayjsValue}
        allowClear={{ clearIcon: <CloseOutlined /> }}
      />
    </DatePickerWarraper>
  );
};

export default DatePickerComponent;
