import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import RadioComponent from "../../../../components/CommonInput/Radio/RadioComponent";
import TextAreaComp from "../../../../components/CommonInput/InputComp/TextArea/TextAreaComp";

function PublicTokenSale() {
  const radioOptions = [
    { label: "Yes", value: 1 },
    { label: "No", value: 2 },
  ];
  return (
    <div>
      <Row>
        <Col span={12} className="pr-9">
          <div>
            <LabelComponent
              label="Total amount to be raised from public token sales?"
              required
            />
          </div>
          <div>
            <InputComp placeholder="$1,000,000" />
          </div>
        </Col>
        <Col span={12} className="pr-9">
          <div>
            <LabelComponent
              label="Preferred amount to be raised through GalaxyPad?"
              required
            />
          </div>
          <div>
            <InputComp placeholder="$500,000" />
          </div>
        </Col>
        <Col span={12} className="pr-9 mt-5">
          <div>
            <LabelComponent
              label="Are you flexible with the amounts? "
              required
            />
          </div>
          <div>
            <RadioComponent options={radioOptions} />
          </div>
        </Col>
        <Col span={12} className="pr-9 mt-5">
          <div>
            <LabelComponent
              label="Planned FDV of tokens at launch? "
              required
            />
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
