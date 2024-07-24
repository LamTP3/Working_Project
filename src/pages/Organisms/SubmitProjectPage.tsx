import CollapseComponent from "./Collapse/CollapseComponent";
import BasicInformation from "./BasicInformation/BasicInformation";
import Capital from "./Capital/Capital";
import PublicTokenSale from "./PublicTokenSale/PublicTokenSale";
import Action from "./Action/Action";
import Header from "../../components/Header/Header"
import ProjectDetails from "../Organisms-Tung/ProjectDetail/ProjectDetails";
import Links from "../Organisms-Tung/Links/Links";
import TokenInformation from "../Organisms-Tung/TokenInformation/TokenInformation";
import StatusOfPartnerships from "../Organisms-Tung/Status of Partnerships/StatusOfPartnerships";

function SubmitProjectPage() {
  return (
    <>
      <Header />
      <div className="mt-5">
        <CollapseComponent
          title="Project Details"
          child={<ProjectDetails />}
        />
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
        <CollapseComponent
          title="Links"
          child={<Links />}
        />
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
