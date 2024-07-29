import { Tabs } from 'antd';
import React, { useState } from 'react';
import type { ConfigProviderProps } from 'antd';
import type { TabsProps } from 'antd';
import './TabsComp.scss'
type SizeType = ConfigProviderProps['componentSize'];

interface TabsCompProp extends TabsProps {

}

const TabsComp: React.FC<TabsCompProp> = (props) => {
    // const [size, setSize] = useState<SizeType>('small');
    return (
        <Tabs {...props} className='tabs-custom' />
    )
}

export default TabsComp
