import { Col, Row } from "antd";
import LabelComponent from "../../../components/Label/LabelComponent";
import InputComp from "../../../components/InputComp/Input/InputComp";
import CheckboxComponent from "../../../components/Checkbox/CheckboxComponent";
import TextAreaComp from "../../../components/InputComp/TextArea/TextAreaComp";
function PublicTokenSale() {
  const options = [
    { label: "Yes", value: "1" },
    { label: "No", value: "2" },
  ];
  return (
    <div>
      <Row>
        <Col span={12} className="pr-9">
          <div>
            <LabelComponent label="Total amount to be raised from public token sales? *" />
          </div>
          <div>
            <InputComp placeholder="$1,000,000" />
          </div>
        </Col>
        <Col span={12} className="pr-9">
          <div>
            <LabelComponent label="Preferred amount to be raised through GalaxyPad? *" />
          </div>
          <div>
            <InputComp placeholder="$500,000" />
          </div>
        </Col>
        <Col span={12} className="pr-9 mt-5">
          <div>
            <LabelComponent label="Are you flexible with the amounts? *" />
          </div>
          <div>
            <CheckboxComponent optionsData={options} useCricle={false} />
          </div>
        </Col>
        <Col span={12} className="pr-9 mt-5">
          <div>
            <LabelComponent label="Planned FDV of tokens at launch? *" />
          </div>
          <div>
            <InputComp placeholder="$30,000,000" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24} className=" pr-9">
          <div>
            <LabelComponent label="Other information" />
          </div>
          <div>
            <TextAreaComp placeholder="Provide any information that helps us understand any expectations that you have." />
          </div>
        </Col>
        <Col span={24} className="mt-5 pr-9">
          <div>
            <LabelComponent label="When do you want to conduct the sale?" />
          </div>
          <div>
            <InputComp placeholder="Provide any information that helps us understand any expectations that you have." />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PublicTokenSale;
