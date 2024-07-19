import React from "react";
import { ConfigProvider, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { DateIcon } from "../../Icon";
import "./DatePicker.scss";
dayjs.extend(buddhistEra);

// Định dạng ngày giờ
const dateFormat = "MM/DD/YYYY HH:mm";

// Component level locale
const buddhistLocale: typeof en = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: dateFormat,
    fieldDateTimeFormat: dateFormat,
    yearFormat: "YYYY",
    cellYearFormat: "YYYY",
  },
};

// ConfigProvider level locale
const globalBuddhistLocale: typeof enUS = {
  ...enUS,
  DatePicker: {
    ...enUS.DatePicker!,
    lang: buddhistLocale.lang,
  },
};

const DatePickerComponents: React.FC = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateStr) => {
    if (date) {
      console.log("Begin date: ", date);
      console.log("Fomate to exact date we need", date.format(dateFormat));
    } else {
      console.log("onChange:", dateStr);
    }
  };

  return (
    <>
      <ConfigProvider locale={globalBuddhistLocale}>
        <DatePicker
          showTime
          onChange={onChange}
          placeholder="MM/dd/yyyy HH:mm"
          suffixIcon={<DateIcon />}
        />
      </ConfigProvider>
    </>
  );
};

export default DatePickerComponents;
