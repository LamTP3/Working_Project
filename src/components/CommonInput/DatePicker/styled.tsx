import styled from "styled-components";
type Props = {
  $width?: string;
  $disabled?: boolean;
};
export const DatePickerWarraper = styled.div<Props>`
  .ant-picker {
    border-radius: 5px;
    border: none;
    height: 40px;

    width: ${(props) => (props.$width ? props.$width : "80%")};

    opacity: ${(props) => (props.$disabled ? "0.3" : "1")};
    .ant-picker-clear {
      left: calc(100% - 45px);
      width: 14px;
      opacity: 1;
    }
    &:hover {
      .ant-picker-suffix {
        opacity: 1;
      }
    }
  }
  .ant-picker-outlined {
    background-color: var(--primary-input-bg) !important;
  }

  .ant-picker-input input {
    color: var(--text-color) !important;
  }
  .ant-picker-input input::placeholder {
    color: var(--gray-color) !important;
  }
  span.anticon {
    svg {
      path {
        fill: white;
      }
    }
  }
`;
