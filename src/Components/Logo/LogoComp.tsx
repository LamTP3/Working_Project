import React from 'react'
import "./LogoComp.scss"

type Prop = {
    size: 'small' | 'medium' | 'large';
}

const LogoComp: React.FC<Prop> = ({size}) => {
    return (
        <div className={`logo-custom ${size}`}></div>
    )
}

export default LogoComp
