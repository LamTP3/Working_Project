import CollapseComponent from "../../components/CommonPageSection/Collapse/CollapseComponent";
import Header from "../../components/CommonPageSection/Header/Header";
import HeaderPage from "../HeaderPage";
import Action from "./Section/Action/Action";
import BasicInformation from "./Section/BasicInformation/BasicInformation";
import Capital from "./Section/Capital/Capital";
import Links from "./Section/Links/Links";
import ProjectDetails from "./Section/ProjectDetail/ProjectDetails";
import PublicTokenSale from "./Section/PublicTokenSale/PublicTokenSale";
import StatusOfPartnerships from "./Section/Status of Partnerships/StatusOfPartnerships";
import TokenInformation from "./Section/TokenInformation/TokenInformation";

function SubmitProjectPage() {
  return (
    <>
      <Header />
      <div>
        <HeaderPage />
      </div>
      <div className="mt-5">
        <CollapseComponent title="Project Details" child={<ProjectDetails />} />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Status of Partnerships"
          child={<StatusOfPartnerships />}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Token Information"
          child={<TokenInformation />}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent title="Links" child={<Links />} />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Basic Information"
          child={<BasicInformation />}
        />
      </div>
      <div className="mt-5">
        <CollapseComponent title="Capital" child={<Capital />} />
      </div>
      <div className="mt-5">
        <CollapseComponent
          title="Public Token Sale"
          child={<PublicTokenSale />}
        />
      </div>
      <div className="mt-5">
        <Action />
      </div>
    </>
  );
}

export default SubmitProjectPage;
