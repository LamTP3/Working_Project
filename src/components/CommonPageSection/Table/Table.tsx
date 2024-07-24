import "./Table.scss";
import { MoreIcon, ChainIcon } from "../../../Icon";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { useState } from "react";
import { ModalName } from "../Modal/ModalType";
import ModalComponents from "../Modal/ModalComponent";
import LogoComp from "../Logo/LogoComp";
import PaginationComponent from "../Pagination/Pagination";

const generateFakeData = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    project: `Project ${index + 1}`,
    content_project: `Symbol ${index + 1}`,
    participants: null,
    totalRaised: "$6,000,000",
    currentPrice: null,
    athSinceIdo: null,
    day: "March 14th 2022",
    datetime: "8:28 AM - UTC",
  }));
};

function Table() {
  const data = generateFakeData();
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName>("Confirm");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleOpen = (modal_name: ModalName) => {
    setOpen(true);
    setModalName(modal_name);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size) {
      setPageSize(size);
    }
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div className="text-[#fff]"> View detail</div>,
    },
    {
      key: "2",
      label: (
        <div
          className="text-right text-[#53FF50]"
          onClick={() => handleOpen("Confirm")}
        >
          Approve
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="text-right text-[#FF5E5E]"
          onClick={() => handleOpen("Reject")}
        >
          Reject
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          className="text-right text-[#F4C349]"
          onClick={() => handleOpen("Delete")}
        >
          Delete
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        <ModalComponents
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
          modal_name={modalName}
        />
      </div>
      <div>
        <table className="table-content">
          <thead>
            <tr>
              <th>Project</th>
              <th>Participants</th>
              <th>Total Raised</th>
              <th>Current Price</th>
              <th>Ath Since Ido</th>
              <th>Ended In</th>
              <th>Chain</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="project-table-style">
                    <div>
                      <LogoComp size="small" />
                    </div>
                    <div>
                      <div>{item.project}</div>
                      <div className="table-text">{item.content_project}</div>
                    </div>
                  </div>
                </td>
                <td>{item.participants ? item.participants : "--"}</td>
                <td>{item.totalRaised}</td>
                <td>{item.currentPrice ? item.currentPrice : "--"}</td>
                <td>{item.athSinceIdo ? item.athSinceIdo : "--"}</td>
                <td>
                  <div>{item.day}</div>
                  <div className="table-text">{item.datetime}</div>
                </td>
                <td>
                  <ChainIcon />
                </td>
                <td>
                  <Dropdown menu={{ items }} placement="bottomRight">
                    <Button>
                      <MoreIcon />
                    </Button>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <PaginationComponent
          total={data.length}
          current={currentPage}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Table;
