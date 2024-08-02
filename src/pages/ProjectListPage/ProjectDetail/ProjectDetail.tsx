import { useLocation } from "react-router-dom";
import CollapseComponent from "../../../components/CommonPageSection/Collapse/CollapseComponent";
import BasicInformation from "./Section/BasicInformation";
import ProjectDetails from "./Section/ProjectDetail";
import Link from "./Section/Link";
import TokenInformation from "./Section/TokenInformation";
import Capital from "./Section/Capital";
import PublicTokenSale from "./Section/PublicTokenSale";
import StatusOfPartnership from "./Section/StatusOfPartnership";
function ProjectDetail() {
    const location = useLocation();
    const { project } = location.state || {};
    return (
        <div className="lg:mx-[200px] my-[50px] mx-[50px]">
            <div className="mt-5">
                <CollapseComponent
                    title="Basic Information"
                    child={<BasicInformation data={project} />}
                    active={true}
                />
            </div>
            <div className="mt-5">
                <CollapseComponent
                    title="Project Details"
                    child={<ProjectDetails data={project} />}
                    active={true}
                />
            </div>
            <div className="mt-5">
                <CollapseComponent
                    title="Links"
                    child={<Link data={project} />}
                    active={true}
                />
            </div>
            <div className="mt-5">
                <CollapseComponent
                    title="Token Information"
                    child={<TokenInformation data={project} />}
                    active={true}
                />
            </div>
            <div className="mt-5">
                <CollapseComponent
                    title="Capital"
                    child={<Capital data={project} />}
                    active={true}
                />
            </div>
            <div className="mt-5">
                <CollapseComponent
                    title="Public Token Sale"
                    child={<PublicTokenSale data={project} />}
                    active={true}
                />
            </div>
            <div className="mt-5">
                <CollapseComponent
                    title="Status of Partnerships"
                    child={<StatusOfPartnership />}
                    active={true}
                />
            </div>
        </div>
    )
}

export default ProjectDetail
