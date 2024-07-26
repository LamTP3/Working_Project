import HeaderPage from "../HeaderPage";
import * as Yup from 'yup';
import Header from "../../components/CommonPageSection/Header/Header";
import CollapseComponent from "../../components/CommonPageSection/Collapse/CollapseComponent";
import BasicInformation from "../Organisms/Section/BasicInformation/BasicInformation";
import ProjectDetails from "../Organisms/Section/ProjectDetail/ProjectDetails";
import Links from "../Organisms/Section/Links/Links";
import TokenInformation from "../Organisms/Section/TokenInformation/TokenInformation";
import Capital from "../Organisms/Section/Capital/Capital";
import PublicTokenSale from "../Organisms/Section/PublicTokenSale/PublicTokenSale";
import StatusOfPartnerships from "../Organisms/Section/Status of Partnerships/StatusOfPartnerships";
import Action from "../Organisms/Section/Action/Action";
import { useFormik, FormikProps } from "formik";
import { Project } from "../../type/type";

const initialValues: Project = {
  id: '',
  basic_information: {
    project_name: '',
    contact_name: '',
    contact_telegram_handle: '',
    email: '',
    project_logo: '',
    project_cover: ''
  },
  project_detail: {
    start_date: '',
    tags: [],
    project_description: '',
    ecosystem: '',
    current_community: '',
    size_existing_user: '',
  },
  links: {
    project_website: '',
    project_telegram: '',
    project_twitter: '',
    project_medium: '',
    project_other_link: '',
  },
  token_information: {
    token_name: '',
    token_symbol: '',
    token_contract_address: '',
    tokennomics: {},
  },
  capital: {
    rounds: [],
  },
  public_token_sale: {
    total_amount: 0,
    amount_through_Galaxy: 0,
    flexible_amount: false,
    planned_FDV: 0,
    other_information: '',
    sale: '',
  },
  status_of_partnerships: [],
  statusId: 0,
  reject_reason: '',
}

const validationSchema =  Yup.object({
  basic_information: Yup.object({
    project_name: Yup.string().required('Required!'),
    contact_name: Yup.string().required('Required!'),
    contact_telegram_handle: Yup.string().required('Required!'),
    email: Yup.string().required('Required!'),
    project_logo: Yup.string().required('Required!'),
    project_cover: Yup.string().required('Required!')
  })
})

const SubmitProjectPage = () => {
  const formik: FormikProps<Project> = useFormik<Project>({
    initialValues,
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Header />
      <div className="max-w-[976px] mt-[50px] mr-auto ml-auto">
        <div>
          <HeaderPage />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mt-5">
            <CollapseComponent
            title="Basic Information"
            child={<BasicInformation formik={formik}/>}
          />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Project Details"
              child={<ProjectDetails />}
            />
          </div>

          <div className="mt-5">
            <CollapseComponent title="Links" child={<Links />} />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Token Information"
              child={<TokenInformation />}
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
            <CollapseComponent
              title="Status of Partnerships"
              child={<StatusOfPartnerships />}
            />
          </div>
          <div className="mt-5">
            <Action />
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitProjectPage;
