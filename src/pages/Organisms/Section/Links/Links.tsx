import { Col, Row } from "antd";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import TextAreaComp from "../../../../components/CommonInput/InputComp/TextArea/TextAreaComp";
import { FormikProps } from "formik";
import { Project } from "../../../../type/type";
import React from "react";

interface LinkProps {
  formik: FormikProps<Project>
}

const Links: React.FC<LinkProps> = ({ formik }) => {
  return (
    <div>
      <Row>
        <Col className="gutter-row" span={24}>
          <Row>
            <Col className="gutter-row pr-5" span={12}>
              <div className="mb-[30px]">
                <div>
                  <LabelComponent label="Project Website" required />
                </div>
                <div>
                  <InputComp
                    name="links.project_website"
                    placeholder="e.g. https://abc.io"
                    value={formik.values.links.project_website}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.links?.project_website && formik.errors.links?.project_website ? (
                    <div className="text-red-600">{formik.errors.links.project_website}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <div>
                  <LabelComponent label="Project Twitter" required />
                </div>
                <div>
                  <InputComp
                    name="links.project_twitter"
                    placeholder="e.g. https://twitter.com/abc"
                    value={formik.values.links.project_twitter}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.links?.project_twitter && formik.errors.links?.project_twitter ? (
                    <div className="text-red-600">{formik.errors.links.project_twitter}</div>
                  ) : null}
                </div>
              </div>
            </Col>
            <Col className="gutter-row pl-5" span={12}>
              <div className="mb-[30px]">
                <div>
                  <LabelComponent label="Project Telegram" required />
                </div>
                <div>
                  <InputComp
                    name="links.project_telegram"
                    placeholder="e.g. https://t.me/abc"
                    value={formik.values.links.project_telegram}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.links?.project_telegram && formik.errors.links?.project_telegram ? (
                    <div className="text-red-600">{formik.errors.links.project_telegram}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <div>
                  <LabelComponent label="Project Medium" />
                </div>
                <div>
                  <InputComp
                    name="links.project_medium"
                    placeholder="e.g. https://medium.com/@abc"
                    value={formik.values.links.project_medium}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.links?.project_medium && formik.errors.links?.project_medium ? (
                    <div className="text-red-600">{formik.errors.links.project_medium}</div>
                  ) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row mt-[30px]" span={24}>
          <Row>
            <Col className="gutter-row" span={24}>
              <div>
                <div>
                  <LabelComponent label="Project other links" />
                </div>
                <div>
                  <TextAreaComp
                    name="links.project_other_link"
                    placeholder="e.g. https://drive.google.com/abc..."
                    value={formik.values.links.project_other_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.links?.project_other_link && formik.errors.links?.project_other_link ? (
                    <div className="text-red-600">{formik.errors.links.project_other_link}</div>
                  ) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Links;
