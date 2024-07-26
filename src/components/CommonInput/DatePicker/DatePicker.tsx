import React from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { DatePickerWarraper } from "./styled";
import { Props } from "./DatePickerType";
import { DateIcon } from "../../../Icon";
import dayjs, { Dayjs } from "dayjs";

// Định dạng ngày giờ
const dateFormat = "MM/DD/YYYY HH:mm";

const DatePickerComponent: React.FC<Props> = ({
  disabled,
  width,
  placeholder,
  value,
}) => {
  const onChange: DatePickerProps["onChange"] = (date, dateStr) => {
    if (date) {
      console.log("Begin date: ", date);
      console.log("Formatted to exact date we need", date.format(dateFormat));
    } else {
      console.log("onChange:", dateStr);
    }
  };

  const dayjsValue = value ? dayjs(value, dateFormat) : undefined;

  // Hàm để vô hiệu hóa các ngày trước ngày hôm nay
  const disabledDate = (current: Dayjs) => {
    // Lấy ngày hôm nay và đặt thời gian là 00:00:00
    const today = dayjs().startOf("day");
    // Không cho phép chọn ngày trước hôm nay
    return current && current.isBefore(today);
  };

  return (
    <>
      <DatePickerWarraper $width={width} $disabled={disabled}>
        <DatePicker
          showTime
          onChange={onChange}
          placeholder={placeholder ? placeholder : "MM/dd/yyyy HH:mm"}
          suffixIcon={<DateIcon />}
          format={dateFormat}
          disabledDate={disabledDate}
          disabled={disabled}
          value={dayjsValue}
          allowClear={false}
        />
      </DatePickerWarraper>
    </>
  );
};

export default DatePickerComponent;
