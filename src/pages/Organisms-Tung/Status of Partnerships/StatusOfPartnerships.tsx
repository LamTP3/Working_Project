import { Col, Row } from "antd"
import CheckboxComponent from "../../../components/Checkbox/CheckboxComponent"
import { useState } from "react"

const StatusOfPartnerships = () => {
    const options = [
        { label: "Have you engaged with Marketing Agencies?", value: '1' },
        { label: "Have you engaged with Centralised Exchanges?", value: '2' },
        { label: "Have you engaged with Market Makers?", value: '3' }
    ]

    const [checkedOptions, setCheckedOptions] = useState([options[0].value])

    const handleCheckboxChange = (checkedValues: any) => {
        setCheckedOptions(checkedValues);
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
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default StatusOfPartnerships
