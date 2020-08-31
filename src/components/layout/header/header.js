import React from 'react'
import './header.css'
const Header = (props) => {

    return (
        <header>
            <div className="title">{props.tituloDoSite}</div>
            <div className="profile">
                Felipe | Sair
            </div>
        </header>
    )
}


export default Header
