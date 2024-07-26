import styled from "styled-components";

export const MultipleSelectWarraper = styled.div`
  .ant-select-selector {
    border: none !important;
    background-color: var(--primary-input-bg) !important;
    .ant-select-selection-overflow {
      right: -20px !important;
      .ant-select-selection-item {
        background-color: #24265b !important;
        height: 23px;

        .ant-select-selection-item-content {
          color: #fff;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 16.94px;
          padding-top: 1px;
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
  }
  .ant-select-arrow {
    display: none !important;
  }
`;
