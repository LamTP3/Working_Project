import React from "react";
import { Modal } from "antd";
import { Col, Row } from "antd";

import "./Modal.scss";
import ButtonComponent from "../../CommonInput/Button/ButtonComponent";
import { ModalProps } from "./ModalType";
import LabelComponent from "../../CommonInput/Label/LabelComponent";
import LogoComp from "../Logo/LogoComp";
import DatePickerComponent from "../../CommonInput/DatePicker/DatePicker";
import TextAreaComp from "../../CommonInput/InputComp/TextArea/TextAreaComp";
const ModalComponents: React.FC<ModalProps> = ({
  open,
  handleOk,
  handleCancel,
  modal_name,
}) => {
  const getTitle = () => {
    switch (modal_name) {
      case "Confirm":
        return "Confirm Approve";
      case "Reject":
        return "Confirm Reject";
      default:
        return "";
    }
  };
  const getFooter = () => {
    switch (modal_name) {
      case "Confirm":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient"
                button_content="Approve"
                arrow_icon={false}
                onClick={handleOk}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      case "Reject":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient_Danger"
                button_content="Reject"
                arrow_icon={false}
                onClick={handleOk}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const getContent = () => {
    switch (modal_name) {
      case "Confirm":
        return (
          <div className="modal-content">
            <Row gutter={[0, 30]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <LogoComp size="small" />
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      Arrow Markets
                    </div>
                    <div className="modal-project-value-style">$ARROW</div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <Row gutter={[20, 0]}>
                  <Col span={24}>
                    <LabelComponent label="Investment Round 1 *" />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent
                      disabled={false}
                      width="100%"
                      placeholder="03/36/2024 08:00"
                    />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent
                      disabled={false}
                      width="100%"
                      placeholder="03/27/2024 08:25"
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[20, 0]}>
                  <Col span={24}>
                    <LabelComponent label="Investment Round 2 *" />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent
                      disabled={false}
                      width="100%"
                      placeholder="03/36/2024 08:00"
                    />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent
                      disabled={false}
                      width="100%"
                      placeholder="03/27/2024 08:25"
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[20, 0]}>
                  <Col span={24}>
                    <LabelComponent label="Investment Round 3 *" />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent
                      disabled={false}
                      width="100%"
                      placeholder="03/36/2024 08:00"
                    />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent
                      disabled={false}
                      width="100%"
                      placeholder="03/27/2024 08:25"
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[20, 0]}>
                  <Col span={24}>
                    <LabelComponent
                      label="Investment Round 4 *"
                      disabled={true}
                    />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent disabled={true} width="100%" />
                  </Col>
                  <Col span={12} className="mt-3">
                    <DatePickerComponent disabled={true} width="100%" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        );

      case "Reject":
        return (
          <div className="modal-content">
            <Row gutter={[0, 30]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <LogoComp size="small" />
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      Arrow Markets
                    </div>
                    <div className="modal-project-value-style">$ARROW</div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <LabelComponent label="Reason *" />
              </Col>
              <Col span={24}>
                <TextAreaComp placeholder="Lorem.." />
              </Col>
            </Row>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Modal
        open={open}
        title={getTitle()}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={getFooter()}
      >
        {getContent()}
      </Modal>
    </>
  );
};

export default ModalComponents;
