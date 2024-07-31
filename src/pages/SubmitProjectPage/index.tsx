import { useState } from "react";
import HeaderPage from "../HeaderPage";
import * as Yup from "yup";
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
import ButtonComponent from "../../components/CommonInput/Button/ButtonComponent";

// Giá trị khởi tạo cho toàn bộ form
const initialValues: Project = {
  id: "",
  basic_information: {
    project_name: "",
    contact_name: "",
    contact_telegram_handle: "",
    email: "",
    project_logo: "",
    project_cover: "",
  },
  project_detail: {
    start_date: "",
    tags: [],
    project_description: "",
    ecosystem: "",
    current_community: "",
    size_existing_user: "",
  },
  links: {
    project_website: "",
    project_telegram: "",
    project_twitter: "",
    project_medium: "",
    project_other_link: "",
  },
  token_information: {
    token_name: "",
    token_symbol: "",
    token_contract_address: "",
    tokennomics: [
      { tokennomics_Title: "Seed", tokennomics_value: 5.0 },
      { tokennomics_Title: "Partners & Advisors", tokennomics_value: 5.0 },
      { tokennomics_Title: "Team & Development", tokennomics_value: 10.0 },
      {
        tokennomics_Title: "Community & Ecosystem Growth",
        tokennomics_value: 25.0,
      },
      { tokennomics_Title: "Reserve", tokennomics_value: 1.85 },
      { tokennomics_Title: "Liquidity", tokennomics_value: 15.0 },
      { tokennomics_Title: "Public Round", tokennomics_value: 3.15 },
      { tokennomics_Title: "Staking Rewards", tokennomics_value: 25.0 },
      { tokennomics_Title: "Mining Rewards", tokennomics_value: 10.0 },
    ],
  },
  capital: {
    rounds: [],
  },
  public_token_sale: {
    total_amount: undefined,
    amount_through_Galaxy: undefined,
    flexible_amount: false,
    planned_FDV: undefined,
    other_information: "",
    sale: "",
  },
  status_of_partnerships: [],
  statusId: 0,
  reject_reason: "",
};

// Schema xác thực cho form
const validationSchema = Yup.object({
  basic_information: Yup.object({
    project_name: Yup.string().required("Required!"),
    contact_name: Yup.string().required("Required!"),
    contact_telegram_handle: Yup.string()
      .required("Required!")
      .matches(
        /^(?:@)?[a-zA-Z0-9_]{5,32}$/,
        "Please enter a valid telegram account!"
      ),
    email: Yup.string()
      .required("Required!")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email!"
      ),
    // project_logo: Yup.string().required("Required!"),
  }),

  project_detail: Yup.object({
    start_date: Yup.string().required("Required!"),
    project_description: Yup.string().required("Required!"),
    ecosystem: Yup.string().required("Required!"),
    current_community: Yup.string().required("Required!"),
    size_existing_user: Yup.string().required("Required!"),
  }),

  links: Yup.object({
    project_website: Yup.string()
      .required("Required!")
      .matches(
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        "Please enter a valid website!"
      ),
    project_telegram: Yup.string()
      .required("Required!")
      .matches(
        /^(?:@|(?:https?:\/\/)?t(?:elegram)?\.me\/)([\w\d_]{5,})$/,
        "Please enter a valid telegram link!"
      ),
    project_twitter: Yup.string()
      .required("Required!")
      .matches(
        /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/,
        "Please enter a valid twitter link!"
      ),
    project_medium: Yup.string()
      .required("Required!")
      .matches(
        /https:\/\/medium\.com\/@[\w-]+/,
        "Please enter a valid medium link!"
      ),
    // project_other_link: Yup.string().matches(
    //   /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    //   "Please enter a valid Link!"
    // ),
  }),

  token_information: Yup.object({
    token_name: Yup.string().required("Required"),
    token_symbol: Yup.string()
      .required("Required")
      .max(3, "Please enter a valid token symbol eg. ETH, BTC, APR ...!"),
    token_contract_address: Yup.string()
      .required("Required")
      .matches(
        /^0x[a-fA-F0-9]{40}$/,
        "Please enter a valid token contract address!"
      ),
  }),

  public_token_sale: Yup.object({
    total_amount: Yup.number().required("Required"),
    amount_through_Galaxy: Yup.number().required("Required"),
    planned_FDV: Yup.number().required("Required"),
  }),
});

const SubmitProjectPage = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  // Sử dụng Formik để quản lý form
  const formik: FormikProps<Project> = useFormik<Project>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Submit function called");
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  // Hàm xử lý submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.validateForm().then(() => {
      if (formik.isValid && captchaValue) {
        formik.handleSubmit();
      } else {
        if (!captchaValue) {
          alert("Please complete the CAPTCHA");
        } else {
          alert("Please fill in all required fields");
          // Đánh dấu tất cả các trường là đã chạm vào
          const createTouchedObject = (values: any) => {
            return Object.keys(values).reduce((acc: any, key: string) => {
              acc[key] =
                typeof values[key] === "object" && !Array.isArray(values[key])
                  ? createTouchedObject(values[key])
                  : true;
              return acc;
            }, {});
          };

          formik.setTouched(createTouchedObject(formik.values));
        }
      }
    });
  };

  return (
    <>
      <div className="lg:mx-[200px] my-[50px] mx-[50px]">
        <div className="mb-12">
          <HeaderPage />
        </div>

        <form onSubmit={handleSubmit}>
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
              child={<Links formik={formik} />}
            />
          </div>

          <div className="mt-5">
            <CollapseComponent
              title="Token Information"
              child={<TokenInformation formik={formik} />}
            />
          </div>
          <div className="mt-5">
            <CollapseComponent title="Capital" child={<Capital />} />
          </div>
          <div className="mt-5">
            <CollapseComponent
              title="Public Token Sale"
              child={<PublicTokenSale formik={formik} />}
            />
          </div>
          <div className="mt-5">
            <CollapseComponent
              title="Status of Partnerships"
              child={<StatusOfPartnerships />}
            />
          </div>
          <div className="mt-5">
            <Action onCaptchaChange={setCaptchaValue} />
          </div>
          <div className="mt-5">
            <ButtonComponent
              htmlType="submit"
              button_content="Submit Information"
              arrow_icon={true}
              background_color="Gradient"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitProjectPage;
