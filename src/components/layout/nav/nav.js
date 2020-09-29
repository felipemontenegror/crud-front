import React from 'react'
import './nav.css'
import history from '../../../config/history'
import { Button } from 'reactstrap';

const Nav = ({ name, to }) => {

    const changePage = () => history.push(to)

    return (
        <nav className="d-flex">
            <div className="title"> Lista de Cadastro</div>
            <div className="action">
                <Button color="primary" onClick={changePage}>
                    {name}
                </Button>
            </div>
        </nav>
    )
}
export default Nav;


