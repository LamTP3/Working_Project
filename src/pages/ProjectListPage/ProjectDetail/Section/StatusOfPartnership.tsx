import { Col, Row } from "antd";
import { useState } from "react";
import CheckboxComponent from "../../../../components/CommonInput/Checkbox/CheckboxComponent";

const StatusOfPartnership = () => {
    const options = [
        { label: "Have you engaged with Marketing Agencies?", value: "1" },
        { label: "Have you engaged with Centralised Exchanges?", value: "2" },
        { label: "Have you engaged with Market Makers?", value: "3" },
    ];

    const [checkedOptions, setCheckedOptions] = useState([options[0].value]);

    const handleCheckboxChange = (checkedValues: any) => {
        setCheckedOptions(checkedValues);
        console.log("Check Option Partener Ship: ", checkedOptions);
    };

    return (
        <div>
            <Row>
                <Col className="gutter-row" span={24}>
                    <Row>
                        <Col className="gutter-row" span={12}>
                            <CheckboxComponent
                                optionsData={options}
                                useCricle={false}
                                onChange={handleCheckboxChange}
                                height={true}
                                disabled
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default StatusOfPartnership;