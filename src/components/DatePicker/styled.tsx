import styled from "styled-components";

export const DatePickerWarraper = styled.div`
  .ant-picker {
    border-radius: 5px;
    border: none;
  }
  .ant-picker-outlined {
    background-color: #14163b !important;
  }
  .ant-picker-input input::placeholder {
    color: #c2c2c2 !important;
  }
  .ant-picker-input input {
    color: #c2c2c2 !important;
  }
  span.anticon {
    svg {
      path {
        fill: white;
      }
    }
  }
`;
