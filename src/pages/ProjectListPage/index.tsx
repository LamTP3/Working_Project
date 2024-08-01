import { useState, useEffect } from "react";
import SearchComp from "../../components/CommonInput/Search/SearchComp";
import TabsComp from "../../components/CommonPageSection/Tabs/TabsComp";
import Table from "../../components/CommonPageSection/Table/Table";
import BreadCrumbComp from "../../components/CommonPageSection/BreadCrumb/BreadCrumbComp";
import { Project, Project_Status } from "../../type/type";
import { getAllProject, getAllProjectStatus } from "../../service/service";
import { ModalName } from "../../components/CommonPageSection/Modal/ModalType";
import ModalComponents from "../../components/CommonPageSection/Modal/ModalComponent";
import { toast } from "react-toastify";
import axios from "axios";
import { MenuProps } from "antd/lib";

const ProjectListPage = () => {
  const [data, setData] = useState<Project[]>([]);
  const [status, setStatus] = useState<Project_Status[]>([]);
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName>("Confirm");
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("1");

  const fetchData = async () => {
    try {
      const dataProject = await getAllProject();
      setData(dataProject);
      const dataStatus = await getAllProjectStatus();
      setStatus(dataStatus);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (modal_name: ModalName) => {
    setOpen(true);
    setModalName(modal_name);
  };

  const handleOk = async (rounds?: any[], rejectReason?: string) => {
    if (selectedProject) {
      let updatedProject = { ...selectedProject };

      if (modalName === "Confirm" && rounds) {
        updatedProject = {
          ...updatedProject,
          capital: { ...updatedProject.capital, rounds },
        };
      } else if (modalName === "Reject" && rejectReason) {
        updatedProject = {
          ...updatedProject,
          statusId: 2,
          reject_reason: rejectReason,
        };
      } else if (modalName === "Delete") {
        try {
          await axios.delete(
            `http://localhost:9999/Project/${selectedProject.id}`
          );
          toast.success("Delete Project Success");
          setOpen(false);
          return;
        } catch (error) {
          console.error("Error deleting project:", error);
          return;
        }
      }

      try {
        await axios.put(
          `http://localhost:9999/Project/${selectedProject.id}`,
          updatedProject
        );
        toast.success(`${modalName} Success`);
      } catch (error) {
        console.error(`Error updating project:`, error);
      }
    }
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

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const getFilteredData = (statusKey: string) => {
    return data.filter((project) => {
      const statusItem = status.find(
        (item) => item.id === project.statusId.toString()
      );
      return statusItem ? statusItem.value === statusKey : false;
    });
  };

  const getMenuItems = (): MenuProps["items"] => {
    const baseItems: MenuProps["items"] = [
      {
        key: "1",
        label: <div className="text-[#fff]">View detail</div>,
      },
      {
        key: "2",
        label: (
          <div
            className="text-right text-[#53FF50]"
            onClick={() => handleOpenModal("Confirm")}
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
            onClick={() => handleOpenModal("Reject")}
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
            onClick={() => handleOpenModal("Delete")}
          >
            Delete
          </div>
        ),
      },
    ];

    // Remove items based on the active tab
    if (activeTab === "2") { // Approved
      return baseItems.filter(item => item?.key !== "2");
    } else if (activeTab === "3") { // Rejected
      return baseItems.filter(item => item?.key !== "3");
    }

    return baseItems;
  };

  const tabs = [
    {
      key: "1",
      label: "Pending Approval",
      children: (
        <Table
          data={getFilteredData("Pending")}
          onOpenModal={handleOpenModal}
          onSelectProject={setSelectedProject}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          dropdownItems={getMenuItems()}
        />
      ),
    },
    {
      key: "2",
      label: "Approved",
      children: (
        <Table
          data={getFilteredData("Approve")}
          onOpenModal={handleOpenModal}
          onSelectProject={setSelectedProject}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          dropdownItems={getMenuItems()}
        />
      ),
    },
    {
      key: "3",
      label: "Rejected",
      children: (
        <Table
          data={getFilteredData("Reject")}
          onOpenModal={handleOpenModal}
          onSelectProject={setSelectedProject}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          dropdownItems={getMenuItems()}
        />
      ),
    },
  ];

  return (
    <div className="mr-auto ml-auto max-w-[1196px]">
      <div>
        <BreadCrumbComp
          className="mt-[30px]"
          items={[{ title: "Admin CP" }, { title: "Projects" }]}
        />
      </div>
      <div className="flex justify-between mt-[30px]">
        <h1 className="text-2xl font-bold text-white">Project List</h1>
        <div className="max-w-[250px]">
          <SearchComp placeholder="Search project" />
        </div>
      </div>
      <div className="mt-[20px]">
        <TabsComp defaultActiveKey="1" items={tabs} onChange={handleTabChange} />
      </div>
      <ModalComponents
        open={open}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modal_name={modalName}
        data={selectedProject}
      />
    </div>
  );
};

export default ProjectListPage;
