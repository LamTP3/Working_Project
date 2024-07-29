import { Col, Row } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import InputNumberComp from "../../../../components/CommonInput/InputComp/InputNumber/InputNumberComp";
import IconButtonComp from "../../../../components/CommonInput/IconButton/IconButtonComp";
import { FormikProps } from "formik";
import { Project } from "../../../../type/type";
import React from "react";

interface TokenInformationProps {
  formik: FormikProps<Project>
}

const TokenInformation: React.FC<TokenInformationProps> = ({ formik }) => {
  const tokennomics = [
    {
      label: "Seed",
      percent: 5.0,
      btn: "disable",
    },
    {
      label: "Partners & Advisors",
      percent: 5.0,
      btn: "disable",
    },
    {
      label: "Team & Development",
      percent: 10.0,
      btn: "disable",
    },
    {
      label: "Community & Ecosystem Growth",
      percent: 25.0,
      btn: "disable",
    },
    {
      label: "Reserve",
      percent: 1.85,
      btn: "disable",
    },
    {
      label: "Liquidity",
      percent: 15.0,
      btn: "disable",
    },
    {
      label: "Public Round",
      percent: 3.15,
      btn: "disable",
    },
    {
      label: "Staking Rewards",
      percent: 25.0,
      btn: "disable",
    },
    {
      label: "Private Round",
      percent: 5.0,
      btn: "disable",
    },
  ];
  return (
    <div>
      <Row>
        <Col className="gutter-row mb-[30px]" span={24}>
          <Row>
            <Col className="gutter-row pr-5" span={12}>
              <div className="flex gap-2">
                <div className="w-full">
                  <div className="mb-2">
                    <LabelComponent label="Token name " required />
                  </div>
                  <div>
                    <InputComp
                      name="token_information.token_name"
                      placeholder="e.g. Bitcoin"
                      value={formik.values.token_information.token_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.token_information?.token_name && formik.errors.token_information?.token_name ? (
                      <div className="text-red-600">{formik.errors.token_information.token_name}</div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <LabelComponent label="Token Symbol " required />
                  </div>
                  <div className="max-w-[180px]">
                    <InputComp
                      name="token_information.token_symbol"
                      placeholder="e.g. BTC"
                      value={formik.values.token_information.token_symbol}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.token_information?.token_symbol && formik.errors.token_information?.token_symbol ? (
                      <div className="text-red-600">{formik.errors.token_information.token_symbol}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row pl-5" span={12}>
              <div>
                <div className="mb-2">
                  <LabelComponent label="Token contract address" required />
                </div>
                <div>
                  <InputComp
                    name="token_information.token_contract_address"
                    placeholder="e.g. 0xc0f2...84d215"
                    value={formik.values.token_information.token_contract_address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.token_information?.token_contract_address && formik.errors.token_information?.token_contract_address ? (
                    <div className="text-red-600">{formik.errors.token_information.token_contract_address}</div>
                  ) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <LabelComponent label="Tokenomics *" />
        {tokennomics.map((item, index) => (
          <Col key={index} className="gutter-row mb-[15px] mt-2" span={24}>
            <Row>
              <Col className="gutter-row flex gap-5" span={24}>
                <div className="w-full">
                  <InputComp
                    name="token_information.tokennomics[0].tokennomics_Title"
                    defaultValue={item.label}
                    // value={formik.values.token_information.tokennomics[0].tokennomics_Title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {/* {formik.touched.token_information?.token_contract_address && formik.errors.token_information?.token_contract_address ? (
                    <div className="text-red-600">{formik.errors.token_information.token_contract_address}</div>
                  ) : null} */}
                </div>
                <div className="max-w-[130px]">
                  <InputNumberComp
                    defaultValue={item.percent}
                    step={0.01}
                    unit="%"
                  />
                </div>
                <div>
                  <IconButtonComp
                    icon={<MinusOutlined />}
                    size="large"
                    disabled
                  />
                </div>
              </Col>
            </Row>
          </Col>
        ))}
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp placeholder="Title" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue={0.0} step={0.01} unit="%" />
              </div>
              <div>
                <IconButtonComp icon={<PlusOutlined />} size="large" />
              </div>
            </Col>
          </Row>
        </Col>
        <div className="w-full mt-4 font-normal flex justify-end">
          <LabelComponent label="Total tokenomics must be 100%" />
        </div>
      </Row>
    </div>
  );
};

export default TokenInformation;
