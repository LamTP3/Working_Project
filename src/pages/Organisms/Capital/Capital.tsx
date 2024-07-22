import { useState } from "react";
import { Col, Row } from "antd";
import CheckboxComponent from "../../../components/Checkbox/CheckboxComponent";
import DatePickerComponents from "../../../components/DatePicker/DatePicker";

function Capital() {
  const options = [
    { label: "Invesment Round 1", value: "1" },
    { label: "Invesment Round 2", value: "2" },
    { label: "Invesment Round 3", value: "3" },
    { label: "Invesment Round 4", value: "4" },
  ];

  const [checkedOptions, setCheckedOptions] = useState([options[0].value]);

  const handleCheckboxChange = (checkedValues: any) => {
    setCheckedOptions(checkedValues);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Row>
            <Col span={12}>
              <CheckboxComponent
                optionsData={options}
                useCricle={false}
                onChange={handleCheckboxChange}
                height={true}
              />
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          {options.map((option, index) => (
            <Row key={index} className="mt-5" align="middle">
              <Col span={12}>
                <DatePickerComponents
                  disabled={!checkedOptions.includes(option.value)}
                />
              </Col>
              <Col span={12}>
                <DatePickerComponents
                  disabled={!checkedOptions.includes(option.value)}
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Capital;
