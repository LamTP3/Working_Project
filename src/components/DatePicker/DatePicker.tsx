import React from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { DateIcon } from "../../Icon";
import { DatePickerWarraper } from "./styled";
import { Props } from "./DatePickerType";

// Định dạng ngày giờ
const dateFormat = "MM/DD/YYYY HH:mm";

const DatePickerComponents: React.FC<Props> = ({ disabled, width }) => {
  const onChange: DatePickerProps["onChange"] = (date, dateStr) => {
    if (date) {
      console.log("Begin date: ", date);
      console.log("Formatted to exact date we need", date.format(dateFormat));
    } else {
      console.log("onChange:", dateStr);
    }
  };

  // Hàm để vô hiệu hóa các ngày trước ngày hôm nay
  const disabledDate = (current: Date) => {
    // Lấy ngày hôm nay và đặt thời gian là 00:00:00
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Không cho phép chọn ngày trước hôm nay
    return current && current < today;
  };

  return (
    <>
      <DatePickerWarraper $width={width} $disabled={disabled}>
        <DatePicker
          showTime
          onChange={onChange}
          placeholder="MM/dd/yyyy HH:mm"
          suffixIcon={<DateIcon />}
          format={dateFormat}
          disabledDate={(currentDate) => disabledDate(currentDate.toDate())}
          // Chuyển đổi moment object thành Date object
          disabled={disabled}
        />
      </DatePickerWarraper>
    </>
  );
};

export default DatePickerComponents;
