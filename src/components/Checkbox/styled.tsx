import styled from "styled-components";

type Props = {
  $circle: boolean;
};
export const CheckboxWarraper = styled.div<Props>`
  .ant-checkbox-inner {
    border: 1.5px solid #c2c2c2 !important;
    background-color: #24265b !important;
    width: 20px !important;
    height: 20px !important;
    border-radius: ${(props) => (props.$circle === true ? "50px" : "4px")};
  }
  .ant-checkbox-inner::after {
    inset-inline-start: 29% !important;
  }
  .ant-checkbox + span {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 19.26px;
    color: #c2c2c2;
  }
`;
