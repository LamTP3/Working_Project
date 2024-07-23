import styled from "styled-components";
type Props = {
  $width: string;
  $disabled: boolean;
};
export const DatePickerWarraper = styled.div<Props>`
  .ant-picker {
    border-radius: 5px;
    border: none;
    //width: ${(props) => props.$width};
    width: 80%;
    opacity: ${(props) => (props.$disabled ? "0.3" : "1")};
  }
  .ant-picker-outlined {
    background-color: #14163b !important;
  }
  .ant-picker-input input::placeholder {
    color: var(--text-color) !important;
  }
  .ant-picker-input input {
    color: var(--text-color) !important;
  }
  span.anticon {
    svg {
      path {
        fill: white;
      }
    }
  }
`;
