import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import UploadFile from "../../../../components/CommonInput/UploadFile/UploadFile";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";

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
                      <LabelComponent label="Project name" required />
                    </div>
                    <div>
                      <InputComp placeholder="e.g.Bitcoin" />
                    </div>
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Contact name" required />
                    </div>

                    <div>
                      <InputComp placeholder="Name & Surname" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row" span={12}>
                <div>
                  <LabelComponent label="Project Logo" required />
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
                      <LabelComponent
                        label="Contact Telegram Handle"
                        required
                      />
                    </div>
                    <div>
                      <InputComp placeholder="e.g.@johndoe" />
                    </div>
                  </Col>
                  <Col className="gutter-row mt-8" span={24}>
                    <div>
                      <LabelComponent label="Email" required />
                    </div>

                    <div>
                      <InputComp placeholder="e.g.abc@abc.xyz" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row" span={12}>
                <div>
                  <LabelComponent label="Project Cover" />
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
