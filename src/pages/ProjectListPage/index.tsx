import { useState, useEffect } from "react";
import SearchComp from "../../components/CommonInput/Search/SearchComp";
import TabsComp from "../../components/CommonPageSection/Tabs/TabsComp";
import Table from "../../components/CommonPageSection/Table/Table";
import BreadCrumbComp from "../../components/CommonPageSection/BreadCrumb/BreadCrumbComp";
import { Project, Project_Status } from "../../type/type";
import { getAllProject, getAllProjectStatus } from "../../service/service";

const ProjectListPage = () => {
  const [data, setData] = useState<Project[]>([]);
  const [status, setStatus] = useState<Project_Status[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy dữ liệu dự án
        const dataProject = await getAllProject();
        setData(dataProject);

        // Lấy dữ liệu trạng thái dự án nếu cần
        const dataStatus = await getAllProjectStatus(); // Cần phải định nghĩa hàm này trong `service/service`
        setStatus(dataStatus);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const getFilteredData = (statusKey: string) => {
    return data.filter((project) => {
      // Tìm trạng thái dự án tương ứng với statusId
      const statusItem = status.find(
        (item) => item.id === project.statusId.toString()
      );

      // Kiểm tra xem trạng thái dự án có giá trị tương ứng với statusKey
      return statusItem ? statusItem.value === statusKey : false;
    });
  };

  const tabs = [
    {
      key: "1",
      label: "Pending Approval",
      children: <Table data={getFilteredData("Pending")} />,
    },
    {
      key: "2",
      label: "Approved",
      children: <Table data={getFilteredData("Approve")} />,
    },
    {
      key: "3",
      label: "Rejected",
      children: <Table data={getFilteredData("Reject")} />,
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
        <TabsComp defaultActiveKey="1" items={tabs} />
      </div>
    </div>
  );
};

export default ProjectListPage;
