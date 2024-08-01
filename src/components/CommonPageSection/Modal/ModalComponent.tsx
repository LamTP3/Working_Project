import React, { useState, useEffect } from "react";
import { Modal, Row, Col } from "antd";
import ButtonComponent from "../../CommonInput/Button/ButtonComponent";
import { ModalProps } from "./ModalType";
import LabelComponent from "../../CommonInput/Label/LabelComponent";
import LogoComp from "../Logo/LogoComp";
import DatePickerComponent from "../../CommonInput/DatePicker/DatePicker";
import TextAreaComp from "../../CommonInput/InputComp/TextArea/TextAreaComp";
import "./Modal.scss";
import dayjs from "dayjs";
import { dateFormat } from "../../../helper/util";

const ModalComponents: React.FC<ModalProps> = ({
  open,
  handleOk,
  handleCancel,
  modal_name,
  data,
}) => {
  const [rejectReason, setRejectReason] = useState("");
  const [rounds, setRounds] = useState(data?.capital.rounds || []);

  useEffect(() => {
    if (data?.capital.rounds) {
      setRounds(data.capital.rounds);
    }
  }, [data]);

  const handleDateChange = (
    index: number,
    field: "startDate" | "endDate",
    value: any
  ) => {
    const updatedRounds = [...rounds];

    // Kiểm tra giá trị của value và chuyển đổi nếu cần
    const formattedValue = value ? dayjs(value).format(dateFormat) : null;
    updatedRounds[index] = {
      ...updatedRounds[index],
      [field]: formattedValue,
    };

    setRounds(updatedRounds);
  };

  const getTitle = () => {
    switch (modal_name) {
      case "Confirm":
        return "Confirm Approve";
      case "Reject":
        return "Confirm Reject";
      case "Delete":
        return "Do you want to delete Project 1 ?";
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
                onClick={() => handleOk(rounds)}
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
                onClick={() => handleOk(rejectReason)}
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
      case "Delete":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient_Danger"
                button_content="Delete Project"
                arrow_icon={false}
                onClick={() => handleOk()}
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
            <Row gutter={[0, 10]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <div style={{ width: "45px", height: "45px" }}>
                      {data?.basic_information.project_logo ? (
                        <img
                          src={data?.basic_information.project_logo}
                          width={"100%"}
                          height={"100%"}
                        />
                      ) : (
                        <LogoComp size="small" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      {data?.basic_information.project_name}
                    </div>
                    <div className="modal-project-value-style">
                      {data?.token_information.token_symbol}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                {rounds.map((item, index) => (
                  <Row gutter={[20, 0]} key={index}>
                    <Col span={24} className="mt-4">
                      <LabelComponent label={item.roundName} />
                    </Col>
                    <Col span={12} className="mt-3">
                      <DatePickerComponent
                        disabled={false}
                        width="100%"
                        value={
                          dayjs(item.startDate).isValid()
                            ? dayjs(item.startDate)
                            : null
                        }
                        onChange={(date) =>
                          handleDateChange(index, "startDate", date)
                        }
                        maxDate={dayjs(item.endDate)}
                      />
                    </Col>
                    <Col span={12} className="mt-3">
                      <DatePickerComponent
                        disabled={false}
                        width="100%"
                        value={
                          dayjs(item.endDate).isValid()
                            ? dayjs(item.endDate)
                            : null
                        }
                        onChange={(date) =>
                          handleDateChange(index, "endDate", date)
                        }
                        minDate={dayjs(item.startDate).add(1, "days")}
                      />
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </div>
        );

      case "Reject":
        return (
          <div className="modal-content">
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <div style={{ width: "45px", height: "45px" }}>
                      {data?.basic_information.project_logo ? (
                        <img
                          src={data?.basic_information.project_logo}
                          width={"100%"}
                          height={"100%"}
                        />
                      ) : (
                        <LogoComp size="small" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      {data?.basic_information.project_name}
                    </div>
                    <div className="modal-project-value-style">
                      {data?.token_information.token_symbol}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <LabelComponent label="Reason *" />
              </Col>
              <Col span={24}>
                <TextAreaComp
                  placeholder="Enter reason here..."
                  onChange={(e) => setRejectReason(e.target.value)}
                />
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
        onCancel={handleCancel}
        footer={getFooter()}
      >
        {getContent()}
      </Modal>
    </>
  );
};

export default ModalComponents;
