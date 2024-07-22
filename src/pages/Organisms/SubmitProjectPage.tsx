import CollapseComponent from "./Collapse/CollapseComponent";
import BasicInformation from "./BasicInformation/BasicInformation";
import Capital from "./Capital/Capital";
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
    </>
  );
}

export default SubmitProjectPage;
