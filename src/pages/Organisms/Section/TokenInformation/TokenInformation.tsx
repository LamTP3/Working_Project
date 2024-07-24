import { Col, Row } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import LabelComponent from "../../../../components/CommonInput/Label/LabelComponent";
import InputComp from "../../../../components/CommonInput/InputComp/Input/InputComp";
import InputNumberComp from "../../../../components/CommonInput/InputComp/InputNumber/InputNumberComp";
import IconButtonComp from "../../../../components/CommonInput/IconButton/IconButtonComp";

const TokenInformation = () => {
    const tokennomics = [
        {
            label: "Seed",
            percent: 5.00,
            btn: "disable"
        },
        {
            label: "Partners & Advisors",
            percent: 5.00,
            btn: "disable"
        },
        {
            label: "Team & Development",
            percent: 10.00,
            btn: "disable"
        },
        {
            label: "Community & Ecosystem Growth",
            percent: 25.00,
            btn: "disable"
        },
        {
            label: "Reserve",
            percent: 1.85,
            btn: "disable"
        },
        {
            label: "Liquidity",
            percent: 15.00,
            btn: "disable"
        },
        {
            label: "Public Round",
            percent: 3.15,
            btn: "disable"
        },
        {
            label: "Staking Rewards",
            percent: 25.0,
            btn: "disable"
        },
        {
            label: "Private Round",
            percent: 5.00,
            btn: "disable"
        },
    ]
    return (
        <div>
            <Row>
                <Col className='gutter-row mb-[30px]' span={24}>
                    <Row>
                        <Col className='gutter-row pr-5' span={12}>
                            <div className='flex gap-2'>
                                <div className='w-full'>
                                    <div className='mb-2'>
                                        <LabelComponent label='Token name *' />
                                    </div>
                                    <div>
                                        <InputComp placeholder='e.g. Bitcoin' />
                                    </div>
                                </div>
                                <div>
                                    <div className='mb-2'>
                                        <LabelComponent label='Token Symbol *' />
                                    </div>
                                    <div className='max-w-[170px]'>
                                        <InputComp placeholder='e.g. BTC' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='gutter-row pl-5' span={12}>
                            <div>
                                <div className='mb-2'>
                                    <LabelComponent label='Token contract address *' />
                                </div>
                                <div>
                                    <InputComp placeholder='e.g. https://twitter.com/abc' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <LabelComponent label='Tokenomics *' />
                {tokennomics.map((item, index) => (
                    <Col key={index} className='gutter-row mb-[15px] mt-2' span={24}>
                        <Row>
                            <Col className='gutter-row flex gap-5' span={24}>
                                <div className='w-full'>
                                    <InputComp defaultValue={item.label} />
                                </div>
                                <div className='max-w-[130px]'>
                                    <InputNumberComp defaultValue={item.percent} step={0.01} unit='%' />
                                </div>
                                <div>
                                    <IconButtonComp icon={<MinusOutlined />} size="large" disabled />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                ))}
                <Col className='gutter-row mb-[15px]' span={24}>
                    <Row>
                        <Col className='gutter-row flex gap-5' span={24}>
                            <div className='w-full'>
                                <InputComp placeholder='Title' />
                            </div>
                            <div className='max-w-[130px]'>
                                <InputNumberComp defaultValue={0.00} step={0.01} unit='%' />
                            </div>
                            <div>
                                <IconButtonComp icon={<PlusOutlined />} size="large" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <div className='w-full mt-4 font-normal flex justify-end'>
                    <LabelComponent label='Total tokenomics must be 100%' />
                </div>
            </Row>
        </div>
    )
}

export default TokenInformation;
