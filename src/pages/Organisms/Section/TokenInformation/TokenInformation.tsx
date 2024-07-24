import { Col, Row } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import InputNumberComp from "../../../../components/CommonInput/InputComp/InputNumber/InputNumberComp";
import IconButtonComp from "../../../../components/CommonInput/IconButton/IconButtonComp";

const TokenInformation = () => {
  return (
    <div>
      <Row>
        <Col className="gutter-row mb-[30px]" span={24}>
          <Row>
            <Col className="gutter-row pr-5" span={12}>
              <div className="flex gap-2">
                <div className="w-full">
                  <div className="mb-2">
                    <LabelComponent label="Token name *" />
                  </div>
                  <div>
                    <InputComp placeholder="e.g. Bitcoin" />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <LabelComponent label="Token Symbol *" />
                  </div>
                  <div className="max-w-[130px]">
                    <InputComp placeholder="e.g. BTC" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="gutter-row pl-5" span={12}>
              <div>
                <div className="mb-2">
                  <LabelComponent label="Token contract address *" />
                </div>
                <div>
                  <InputComp placeholder="e.g. https://twitter.com/abc" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <LabelComponent label="Tokenomics *" />
        <Col className="gutter-row mb-[15px] mt-2" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Seed" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="5.00" step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Partners & Advisors" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="5.00" step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Team & Development" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="10.00" step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Community & Ecosystem Growth" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="25.00" step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Reserve" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="1.85" step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Liquidity" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="15.00" step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Public Round" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue={3.15} step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Staking Rewards" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="25.00" step={0.01} unit="%" />
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
        <Col className="gutter-row mb-[15px]" span={24}>
          <Row>
            <Col className="gutter-row flex gap-5" span={24}>
              <div className="w-full">
                <InputComp defaultValue="Private Round" />
              </div>
              <div className="max-w-[130px]">
                <InputNumberComp defaultValue="5.00" step={0.01} unit="%" />
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
        <div className="flex" style={{ justifyContent: "end" }}>
          <LabelComponent label="Total tokenomics must be 100%" />
        </div>
      </Row>
    </div>
  );
};

export default TokenInformation;
