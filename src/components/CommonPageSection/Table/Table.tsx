import { Button, Dropdown } from "antd";
import { MoreIcon, ChainIcon } from "../../../Icon";
import { MenuProps } from "antd";
import { Project } from "../../../type/type";
import { formatPrice } from "../../../helper/util";
import PaginationComponent from "../Pagination/Pagination";
import "./Table.scss";
import { ModalName } from "../Modal/ModalType";
import LogoComp from "../Logo/LogoComp";

interface TableProps {
  data: Project[];
  onOpenModal: (modal_name: ModalName) => void;
  onSelectProject: (item: Project) => void;
  onPageChange: (page: number, size?: number) => void;
  currentPage: number;
  pageSize: number;
  dropdownItems: MenuProps["items"];
}

function Table({
  data,
  onSelectProject,
  onPageChange,
  currentPage,
  pageSize,
  dropdownItems,
}: TableProps) {
  const handleSelectProject = (item: Project) => {
    console.log("Selected Project: ", item)
    onSelectProject(item);
  };

  return (
    <>
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
                    <div style={{ width: "40px", height: "40px" }}>
                      {item?.basic_information.project_logo ? (
                        <img
                          src={item.basic_information.project_logo}
                          width={"100%"}
                          height={"100%"}
                        />
                      ) : (
                        <LogoComp size="small" />
                      )}
                    </div>
                    <div>
                      <div>{item.basic_information.project_name}</div>
                      <div className="table-text">
                        {item.token_information.token_symbol}
                      </div>
                    </div>
                  </div>
                </td>
                <td>--</td>
                <td>{formatPrice(item.public_token_sale.total_amount)}</td>
                <td>--</td>
                <td>--</td>
                <td>
                  <div>March 14th 2022</div>
                  <div className="table-text">8:28 AM - UTC</div>
                </td>
                <td>
                  <ChainIcon />
                </td>
                <td>
                  <Dropdown
                    menu={{ items: dropdownItems }}
                    placement="bottomRight"
                    trigger={["click"]}
                  >
                    <Button onClick={() => handleSelectProject(item)}>
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
          onChange={onPageChange}
        />
      </div>
    </>
  );
}

export default Table;
