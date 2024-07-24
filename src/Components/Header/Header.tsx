import React from 'react'
import "./Header.scss"
import LogoComp from '../Logo/LogoComp'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-inner">
                <div className="header-left">
                    <LogoComp size='medium' />
                    <h2 className="header-logo-text">Galaxy Pad</h2>
                </div>
                <div className="header-mid">
                    projects
                </div>
                <div className="header-right">
                    <div className="header-welcome">
                        <p className='header-text-welcome'>Welcome</p>
                        <p className='header-text-name'> Admin!</p>
                    </div>
                    <button className='header-logout-btn'>
                        logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
