import { Col, Row } from "antd";
import LabelComponent from "../../../components/Label/LabelComponent";
import UploadFile from "../../../components/UploadFile/UploadFile";
import InputComponent from "../../../components/InputComp/Input/InputComp";

function BasicInformation() {
  return (
    <div>
      <div>
        <Row>
          <Col className="gutter-row mt-5" span={24}>
            <Row>
              <Col className="gutter-row pr-10" span={12}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row " span={24}>
                    <div>
                      <LabelComponent label="Project name" required={true} />
                    </div>
                    <div>
                      <InputComponent placeholder="e.g.Bitcoin" />
                    </div>
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Contact name" required={true} />
                    </div>

                    <div>
                      <InputComponent placeholder="Name & Surname" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row" span={12}>
                <div>
                  <LabelComponent label="Project Logo" required={true} />
                </div>
                <div>
                  <UploadFile
                    width="137px"
                    height="137px"
                    label="Drag and drop an image file here or click"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row mt-5" span={24}>
            <Row>
              <Col className="gutter-row pr-10" span={12}>
                <Row>
                  <Col className="gutter-row " span={24}>
                    <div>
                      <LabelComponent label="Project name" required={true} />
                    </div>
                    <div>
                      <InputComponent placeholder="e.g.@johndoe" />
                    </div>
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Contact name" required={true} />
                    </div>

                    <div>
                      <InputComponent placeholder="e.g.abc@abc.xyz" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row" span={12}>
                <div>
                  <LabelComponent label="Project Cover" required={false} />
                </div>
                <div>
                  <UploadFile
                    width="468px"
                    height="137px"
                    label="Drag and drop an image/video file here or click"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BasicInformation;
