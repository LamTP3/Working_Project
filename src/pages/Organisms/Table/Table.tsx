import "./Table.scss";
import LogoComp from "../../../components/Logo/LogoComp";
import { MoreIcon, ChainIcon } from "../../../Icon";
// import { useState } from "react";

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
  // const [isOpenModal, setIsOpenModal] = useState(false);

  return (
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
              <th>
                <div>
                  <MoreIcon />
                </div>
                {/* <div>Modal</div> */}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
