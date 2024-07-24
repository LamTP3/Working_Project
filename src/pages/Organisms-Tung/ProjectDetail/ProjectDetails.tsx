import { Col, Row } from 'antd'
import LabelComponent from '../../../components/Label/LabelComponent'
import DatePickerComponents from '../../../components/DatePicker/DatePicker'
import MultipleSelect from '../../../components/MultipleSelect/MultipleSelect'
import TextAreaComp from '../../../components/InputComp/TextArea/TextAreaComp'

const ProjectDetails = () => {
    return (
        <div>
            <Row>
                <Col className='gutter-row mb-[30px]' span={24}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className='gutter-row' span={12}>
                            <div>
                                <LabelComponent label='Project start date *' />
                            </div>
                            <div className='mt-[8px]'>
                                <DatePickerComponents placeholder='estimate' disabled={false} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className='gutter-row' span={24}>
                    <div className='mb-[30px]'>
                        <div>
                            <LabelComponent label='Project tags' />
                        </div>
                        <div className='mt-[8px]'>
                            <MultipleSelect />
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        <div>
                            <LabelComponent label='Project Description *' />
                        </div>
                        <div className='mt-[8px]'>
                            <TextAreaComp placeholder='Describe the project, including the scope of the project and an explanation of how mature the project is.'/>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        <div>
                            <LabelComponent label='Ecosystem *' />
                        </div>
                        <div className='mt-[8px]'>
                            <TextAreaComp placeholder='Describe the project ecosystem. Explain where the project is hosted, the token to be issued and the grants received.'/>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        <div>
                            <LabelComponent label='Describe Current Community *' />
                        </div>
                        <div className='mt-[8px]'>
                            <TextAreaComp placeholder='e.g. Provide details of what the current community consist of. e.g. 30,000 Twitter followers and 20,000 telegram members.'/>
                        </div>
                    </div>
                    <div className='mb-[30px]'>
                        <div>
                            <LabelComponent label='Size of Existing Users *' />
                        </div>
                        <div className='mt-[8px]'>
                            <TextAreaComp placeholder='Provide details of what the current community and user base consist of. e.g. Project currently has 4000 testnet users or project live with $100k TVL from 1000 wallets.'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectDetails
