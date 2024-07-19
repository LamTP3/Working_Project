import styled from "styled-components";

export const MultipleSelectWarraper = styled.div`
  .ant-select-selector {
    border: 1px solid #d9d9d9 !important;
    background-color: #14163b !important;
    .ant-select-selection-item {
      background-color: #24265b !important;
      .ant-select-selection-item-content {
        color: #fff;
      }
      span.anticon {
        svg {
          path {
            fill: white;
          }
        }
      }
    }
  }
  .ant-select-arrow {
    display: none !important;
  }
`;
