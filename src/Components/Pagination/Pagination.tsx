import React from "react";
import { Pagination } from "antd";
import "./Pagination.scss";
import NextAnPrevIcon from "../../Icon/NextAndPrevIcon/NextAnPrevIcon";

const PaginationComponent: React.FC = () => {
  const itemRender = (
    _: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return (
        <>
          <NextAnPrevIcon name="prev" />
        </>
      );
    }
    if (type === "next") {
      return (
        <>
          <NextAnPrevIcon name="next" />
        </>
      );
    }
    return originalElement;
  };

  return (
    <Pagination
      defaultCurrent={1}
      total={500}
      showSizeChanger={false}
      itemRender={itemRender}
    />
  );
};

export default PaginationComponent;
