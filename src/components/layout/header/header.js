import React from 'react'
import './header.css'
import { useHistory } from 'react-router-dom'
import { removeToken, isAuthenticated } from '../../../config/auth'
import { Button } from 'reactstrap';

const Header = (props) => {
    const history = useHistory()

    const logout = () => {
        removeToken()
        history.push('/login')
    }

    const hasUser = () => {
        if (props.info && props.info.nome) {
            return (
                <>
                    <i className="fa fa-user" /> {props.info.nome} |
                </>
            )
        }
    }

    return (
        <header className="d-flex">
            <div className="title">{props.title}</div>
            <div className="profile">
                {hasUser()}
                {isAuthenticated() ? (
                    <Button size="sm"  color="danger" className="logout" onClick={logout}> <i className="fa fa-sign-out"></i> Sair</Button>
                ) : ""}
            </div>
        </header >
    )
}


export default Header


