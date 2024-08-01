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
import dayjs from "dayjs";
import { dateFormat } from "../../helper/util";
import ButtonComponent from "../../components/CommonInput/Button/ButtonComponent";
import { Col, Row } from "antd";
import LabelComponent from "../../components/CommonInput/Label/LabelComponent";
import LogoComp from "../../components/CommonPageSection/Logo/LogoComp";
import DatePickerComponent from "../../components/CommonInput/DatePicker/DatePicker";
import TextAreaComp from "../../components/CommonInput/InputComp/TextArea/TextAreaComp";
import * as Yup from "yup"
import { useFormik } from "formik";
const ProjectListPage = () => {
  const [data, setData] = useState<Project[]>([]);
  const [status, setStatus] = useState<Project_Status[]>([]);
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName>("Confirm");
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("1");
  const [rejectReason, setRejectReason] = useState("");
  const [rounds, setRounds] = useState(selectedProject?.capital.rounds || []);
  const initialValues = {
    rounds: rounds.map((round) => ({
      startDate: dayjs(round.startDate).isValid() ? dayjs(round.startDate) : null,
      endDate: dayjs(round.endDate).isValid() ? dayjs(round.endDate) : null,
    })),
  };
  const validationSchema = Yup.object({
    rounds: Yup.array().of(
      Yup.object({
        startDate: Yup.string().required("Start date is required"),
        endDate: Yup.string().required("End date is required"),
      })
    ),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (value) => {
      console.log("Submit value: ", value)
    }
  })

  useEffect(() => {
    if (selectedProject) {
      setRounds(selectedProject.capital.rounds || []);
    }
  }, [selectedProject]);

  const fetchDataProject = async () => {
    try {
      const dataProject = await getAllProject();
      setData(dataProject);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchDataProjectStatus = async () => {
    try {
      const dataProjectStatus = await getAllProjectStatus();
      setStatus(dataProjectStatus);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchDataProject();
    fetchDataProjectStatus();
  }, []);


  const handleOk = async (rounds?: any[], rejectReason?: string) => {
    if (selectedProject) {
      let updatedProject = { ...selectedProject };

      if (modalName === "Confirm" && rounds) {
        updatedProject = {
          ...updatedProject,
          statusId: 1,
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
          fetchDataProject();
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
        fetchDataProject();
        toast.success(`${modalName} Success`);
      } catch (error) {
        console.error(`Error updating project:`, error);
      }
    }
    setOpen(false);
  };

  const getTitle = () => {
    switch (modalName) {
      case "Confirm":
        return "Confirm Approve";
      case "Reject":
        return "Confirm Reject";
      case "Delete":
        return "Do you want to delete Project 1 ?";
      default:
        return "";
    }
  };

  const getFooter = () => {
    switch (modalName) {
      case "Confirm":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient"
                button_content="Approve"
                arrow_icon={false}
                onClick={() => handleOk(rounds)}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      case "Reject":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient_Danger"
                button_content="Reject"
                arrow_icon={false}
                onClick={() => handleOk([], rejectReason)}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      case "Delete":
        return (
          <div className="footer-style">
            <div className="footer-btn-style">
              <ButtonComponent
                background_color="Gradient_Danger"
                button_content="Delete Project"
                arrow_icon={false}
                onClick={() => handleOk()}
                width="208px"
              />
              <ButtonComponent
                background_color="Gradient_Default"
                button_content="Cancel"
                arrow_icon={false}
                onClick={handleCancel}
                width="208px"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getContent = () => {
    switch (modalName) {
      case "Confirm":
        return (
          <div className="modal-content">
            <Row gutter={[0, 10]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <div style={{ width: "45px", height: "45px" }}>
                      {selectedProject?.basic_information.project_logo ? (
                        <img
                          src={selectedProject?.basic_information.project_logo}
                          width={"100%"}
                          height={"100%"}
                        />
                      ) : (
                        <LogoComp size="small" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      {selectedProject?.basic_information.project_name}
                    </div>
                    <div className="modal-project-value-style">
                      {selectedProject?.token_information.token_symbol}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                {rounds.map((item, index) => (
                  <Row gutter={[20, 0]} key={index}>
                    <Col span={24} className="mt-4">
                      <LabelComponent label={item.roundName} />
                    </Col>
                    <Col span={12} className="mt-3">
                      <DatePickerComponent
                        disabled={false}
                        width="100%"
                        value={
                          dayjs(item.startDate).isValid()
                            ? dayjs(item.startDate)
                            : null
                        }
                        onChange={(date) =>
                          handleDateChange(index, "startDate", date)
                        }
                        maxDate={dayjs(item.endDate).subtract(1, 'day')}
                      />
                    </Col>
                    <Col span={12} className="mt-3">
                      <DatePickerComponent
                        disabled={false}
                        width="100%"
                        value={
                          dayjs(item.endDate).isValid()
                            ? dayjs(item.endDate)
                            : null
                        }
                        onChange={(date) =>
                          handleDateChange(index, "endDate", date)
                        }
                        minDate={dayjs(item.startDate).add(1, "days")}
                      />
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </div>
        );

      case "Reject":
        return (
          <div className="modal-content">
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <div className="mt-3">
                  <LabelComponent label="Project" />
                </div>
                <div className="project-style">
                  <div className="logo-style">
                    <div style={{ width: "45px", height: "45px" }}>
                      {selectedProject?.basic_information.project_logo ? (
                        <img
                          src={selectedProject?.basic_information.project_logo}
                          width={"100%"}
                          height={"100%"}
                        />
                      ) : (
                        <LogoComp size="small" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="modal-project-name-style">
                      {selectedProject?.basic_information.project_name}
                    </div>
                    <div className="modal-project-value-style">
                      {selectedProject?.token_information.token_symbol}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <LabelComponent label="Reason *" />
              </Col>
              <Col span={24}>
                <TextAreaComp
                  placeholder="Enter reason here..."
                  onChange={(e) => setRejectReason(e.target.value)}
                />
              </Col>
            </Row>
          </div>
        );
      default:
        return null;
    }
  };

  const handleDateChange = (
    index: number,
    field: "startDate" | "endDate",
    value: any
  ) => {
    const updatedRounds = [...rounds];

    const formattedValue = value ? dayjs(value).format(dateFormat) : null;
    updatedRounds[index] = {
      ...updatedRounds[index],
      [field]: formattedValue,
    };

    setRounds(updatedRounds);
  };


  const handleOpenModal = (modal_name: ModalName) => {
    setOpen(true);
    setModalName(modal_name);
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
        handleCancel={handleCancel}
        getTitle={getTitle}
        getContent={getContent}
        getFooter={getFooter}
        data={selectedProject}
      />
    </div>
  );
};

export default ProjectListPage;
