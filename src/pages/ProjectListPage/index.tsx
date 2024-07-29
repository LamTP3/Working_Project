import React from 'react'
import SearchComp from '../../components/CommonInput/Search/SearchComp'
import TabsComp from '../../components/CommonPageSection/Tabs/TabsComp'
import Table from '../../components/CommonPageSection/Table/Table';
import { Breadcrumb } from 'antd';
import BreadCrumbComp from '../../components/CommonPageSection/BreadCrumb/BreadCrumbComp';

const items = [
    {
        key: '1',
        label: 'Pending Approval',
        children: <Table />,
    },
    {
        key: '2',
        label: 'Approved',
        children: <Table />,
    },
    {
        key: '3',
        label: 'Rejected',
        children: <Table />,
    },
];

const ProjectListPage = () => {
    return (
        <div className='mr-auto ml-auto max-w-[1196px]'>
            <div>
                <BreadCrumbComp className='mt-[30px]'
                    items={[
                        {
                            title: 'Admin CP',
                        },
                        {
                            title: 'Projects',
                        },
                    ]}
                />
            </div>
            <div className='flex justify-between mt-[30px]'>
                <div>
                    <h1 className='text-2xl font-bold text-white'>
                        Project List
                    </h1>
                </div>
                <div className='max-w-[250px]'>
                    <SearchComp placeholder='Search project' />
                </div>
            </div>
            <div className='mt-[20px]'>
                <TabsComp defaultActiveKey='1' items={items} />
            </div>
        </div>
    )
}

export default ProjectListPage
