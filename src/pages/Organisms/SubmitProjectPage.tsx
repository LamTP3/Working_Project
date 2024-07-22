import CollapseComponent from "./Collapse/CollapseComponent";
import BasicInformation from "./BasicInformation/BasicInformation";
import Capital from "./Capital/Capital";
import PublicTokenSale from "./PublicTokenSale/PublicTokenSale";
import Action from "./Action/Action";
function SubmitProjectPage() {
  return (
    <>
      <div>
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
