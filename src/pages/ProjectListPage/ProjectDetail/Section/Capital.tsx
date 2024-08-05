import { Col, Row } from "antd";
import CheckboxComponent from "../../../../components/CommonInput/Checkbox/CheckboxComponent";
import DatePickerComponent from "../../../../components/CommonInput/DatePicker/DatePicker";
import dayjs from "dayjs";

interface Props {
    data: any;
}

interface Option {
    label: string;
    value: string;
}

const Capital = ({ data }: Props) => {
    const options: Option[] = data?.rounds?.map((round: any, index: number) => ({
        label: round?.roundName,
        value: (index + 1).toString()
    })) || [];
    const allValues = options.map((option: Option) => option.value);

    return (

        <div>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Row>
                        <Col span={12}>
                            <CheckboxComponent
                                optionsData={options}
                                useCricle={false}
                                height={true}
                                value={allValues}
                                disabled
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={16}>
                    {data?.rounds?.map((item: any, index: any) => (
                        <Row key={index} className="mt-5" align="middle" gutter={[40, 0]}>
                            <Col span={12}>
                                <DatePickerComponent
                                    disabled
                                    value={dayjs(item.startDate)}
                                />
                            </Col>
                            <Col span={12}>
                                <DatePickerComponent
                                    disabled
                                    value={dayjs(item.endDate)}
                                />
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </div>
    );
}

export default Capital;
