import "./Table.scss";
import LogoComp from "../../../components/Logo/LogoComp";
import { MoreIcon, ChainIcon } from "../../../Icon";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import ModalComponents from "../../../components/Modal/ModalComponent";
import { useState } from "react";
import { ModalName } from "../../../components/Modal/ModalType";
const generateFakeData = () => {
  return Array.from({ length: 7 }, (_, index) => ({
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
  const [modaName, setModalName] = useState<ModalName>("Confirm");
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
  ];
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
  return (
    <>
      <div>
        <ModalComponents
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
          modal_name={modaName}
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
            {data.map((item, index) => (
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
    </>
  );
}

export default Table;
