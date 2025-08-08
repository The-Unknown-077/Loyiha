import React from 'react'
import logo from './images/logo.svg'

const SiteLoading = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader-content">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="site-name">Furniro</h1>
            </div>
        </div>
    )
}

export default SiteLoading
