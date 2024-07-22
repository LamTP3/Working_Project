import styled from "styled-components";

export const ModalWarraper = styled.div`
  .modal-content {
    height: 150px;
  }
  .footer-style {
    height: 70px;
    border-top: 1.5px dashed #c2c2c2;
    position: relative;
    .footer-btn-style {
      display: flex;
      grid-gap: 15px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .ant-modal-content {
    background-color: #24265b !important;

    span.anticon {
      svg {
        path {
          fill: white;
        }
      }
    }
    .ant-modal-header {
      background-color: #24265b !important;
      border-bottom: 1.5px dashed #c2c2c2;
      .ant-modal-title {
        font-size: 24px;
        color: #ffffff;
        font-family: Inter;
        font-weight: 600;
        line-height: 29.05px;
      }
    }
  }
`;
