import styled from "styled-components";

type Props = {
  $width?: string;
  $height?: string;
};
export const UploadFileWarraper = styled.div<Props>`
  .ant-upload-list-item-container {
    height: 137px !important;
    width: 137px !important;
    .ant-upload-list-item-thumbnail {
      font-size: 20px;
      font-weight: 600;
      color: #c2c2c2 !important;
    }
    .ant-upload-list-item-error {
      border-color: #c2c2c2 !important;
    }
    .ant-tooltip {
      display: none;
    }
  }
  .ant-upload-select {
    height: ${(props) => (props?.$height ? props?.$height : "137px")}!important;
    width: ${(props) => (props?.$width ? props?.$width : "137px")}!important;
    border: 2px dashed #24265b !important;
    .ant-upload {
      button {
        svg {
          display: unset;
        }
      }
    }
    .text-style {
      font-size: 10px;
      font-weight: 400;
      color: #c2c2c2 !important;
    }
  }
`;
