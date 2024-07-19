import React, { useState } from "react";
import { Button, Modal, Space } from "antd";
import "./Modal.scss";
import ButtonComponent from "../Button/ButtonComponent";
const ModalComponents: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </Space>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient"
                button_content="Button Text"
                arrow_icon={false}
                onClick={handleOk}
              />
              <ButtonComponent
                background_color="Gradient_Danger"
                button_content="Button Text"
                arrow_icon={false}
                onClick={handleCancel}
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Button Text"
                arrow_icon={false}
                onClick={handleCancel}
              />
            </div>
          </div>
        }
      >
        <div className="modal-content"></div>
      </Modal>
    </>
  );
};

export default ModalComponents;
