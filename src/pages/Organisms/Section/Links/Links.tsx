import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import TextAreaComp from "../../../../components/CommonInput/InputComp/TextArea/TextAreaComp";

const Links = () => {
  return (
    <div>
      <Row>
        <Col className="gutter-row" span={24}>
          <Row>
            <Col className="gutter-row pr-5" span={12}>
              <div className="mb-[30px]">
                <div>
                  <LabelComponent label="Project start date *" />
                </div>
                <div>
                  <InputComp placeholder="e.g. https://abc.io" />
                </div>
              </div>
              <div>
                <div>
                  <LabelComponent label="Project Twitter *" />
                </div>
                <div>
                  <InputComp placeholder="e.g. https://twitter.com/abc" />
                </div>
              </div>
            </Col>
            <Col className="gutter-row pl-5" span={12}>
              <div className="mb-[30px]">
                <div>
                  <LabelComponent label="Project Telegram *" />
                </div>
                <div>
                  <InputComp placeholder="e.g. https://t.me/abc" />
                </div>
              </div>
              <div>
                <div>
                  <LabelComponent label="Project Medium" />
                </div>
                <div>
                  <InputComp placeholder="e.g. https://medium.com/@abc" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row mt-[30px]" span={24}>
          <Row>
            <Col className="gutter-row" span={24}>
              <div>
                <div>
                  <LabelComponent label="Project other links" />
                </div>
                <div>
                  <TextAreaComp placeholder="e.g. https://drive.google.com/abc..." />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Links;
