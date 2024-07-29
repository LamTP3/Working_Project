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
    tokennomics: [],
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

const validationSchema = Yup.object({
  basic_information: Yup.object({
    project_name: Yup.string().required('Required!'),
    contact_name: Yup.string().required('Required!'),
    contact_telegram_handle: Yup.string().required('Required!').matches(/^(?:@)?[a-zA-Z0-9_]{5,32}$/, "Please enter a valid telegram account!"),
    email: Yup.string().required('Required!').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email!"),
    project_logo: Yup.string().required('Required!')
  }),

  project_detail: Yup.object({
    start_date: Yup.string().required('Required!'),
    project_description: Yup.string().required('Required!'),
    ecosystem: Yup.string().required('Required!'),
    current_community: Yup.string().required('Required!'),
    size_existing_user: Yup.string().required('Required!')
  }),

  links: Yup.object({
    project_website: Yup.string().required('Required!').matches(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, "Please enter a valid website!"),
    project_telegram: Yup.string().required('Required!').matches(/^(?:@|(?:https?:\/\/)?t(?:elegram)?\.me\/)([\w\d_]{5,})$/, "Please enter a valid telegram link!"),
    project_twitter: Yup.string().required('Required!').matches(/(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/, "Please enter a valid twitter link!"),
    project_medium: Yup.string().required('Required!').matches(/https:\/\/medium\.com\/@[\w-]+/, "Please enter a valid medium link!"),
    project_other_link: Yup.string().required('Required!').matches(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, "Please enter a valid Link!")
  }),

  token_information: Yup.object({
    token_name: Yup.string().required('Required'),
    token_symbol: Yup.string().required('Required').max(3, "Please enter a valid token symbol eg. ETH, BTC, APR ...!"),
    token_contract_address: Yup.string().required('Required').matches(/^0x[a-fA-F0-9]{40}$/, "Please enter a valid token contract address!")
  }),

  public_token_sale: Yup.object({
    total_amount: Yup.number().required('Required'),
    amount_through_Galaxy: Yup.number().required('Required'),
    planned_FDV: Yup.number().required('Required')
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
              child={<BasicInformation formik={formik} />}
            />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Project Details"
              child={<ProjectDetails formik={formik} />}
            />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Links"
              child={<Links formik={formik} />} />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Token Information"
              child={<TokenInformation formik={formik}/>}
            />
          </div>
          <div className="mt-5">
            <CollapseComponent
              title="Capital"
              child={<Capital />}
            />
          </div>
          <div className="mt-5">
            <CollapseComponent
              title="Public Token Sale"
              child={<PublicTokenSale formik={formik}/>}
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
