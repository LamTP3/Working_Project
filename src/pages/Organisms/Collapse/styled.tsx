import styled from "styled-components";

export const Warraper = styled.div`
  .ant-collapse {
    background-color: #24265b !important;
    border: none;
    .ant-collapse-header-text {
      color: white;
      font-size: 24px;
      font-weight: 700;
      line-height: 29.05px;
      font-family: Inter;
    }
  }
  .ant-collapse-content {
    border: none !important;
    background-color: #24265b !important;
    .ant-collapse-content-box {
      min-height: 200px;
    }
  }
  .header-style {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    .title-style {
      white-space: nowrap;
    }
    .line-between {
      height: 1px;
      width: 100%;
      background: #24265b;
    }
  }
`;