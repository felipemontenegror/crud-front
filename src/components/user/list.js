import React, { useEffect, useState } from 'react'
import { ListUser } from '../../Services/user'
import Loading from '../loading/loading'
import Nav from '../../components/layout/nav/nav'
import Confirmation from '../alert/confirmation'
import { Table } from 'reactstrap';


const UserList = (props) => {

    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(false)
    const [confirmation, setConfirmation] = useState({
        isShow: false,
        params: {}
    })
    const getList = async () => {
        try {
            setloading(true)
            const usersAll = await ListUser()
            if (usersAll) {
                setUsers(usersAll.data)
            }
            setloading(false)
        } catch (error) {
            setloading(false)
        }
    }

    const editUser = (user) => props.history.push(`/edit/${user._id}`)

    const deleteUser = (user) => setConfirmation({
        isShow: true,
        params: user
    })
    const verifyIsEmpty = users.length === 0

    const sortList = (users) => {
        return users.sort((a, b) => {
            if (a.is_active < b.is_active) {
                return 1;
            }
            if (a.is_active > b.is_active) {
                return -1;
            }
            return 0;
        })
    }

    const montarTabela = () => {
        const listSorted = sortList(users)

        const linhas = listSorted.map((user, index) => (
            <tr key={index} className={user.is_active ? "" : "table-danger"} >
                <td>{user.is_active ? "SIM" : "NÃO"}</td>
                <td>{user.is_admin ? "SIM" : "NÃO"}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.time}</td>
                <td>{user.jogador}</td>
                <td>
                    <span onClick={() => editUser(user)} className="text-primary" >Editar</span> |
                    <span onClick={() => deleteUser(user)} className="text-danger">Excluir </span>
                </td>
            </tr >
        ))

        return !verifyIsEmpty ? (
            <Table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ATIVO</th>
                        <th>ADMIN</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>TIME</th>
                        <th>JOGADOR</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </Table>
        ) : ""
    }



    useEffect(function () {
        getList()
    }, [])

    useEffect(function () {
        getList()
    }, [confirmation])
    //render
    return (
        <div>
            <Nav name="Novo" to="/create" />
            {confirmation.isShow ? (
                <Confirmation data={confirmation} fnc={setConfirmation} />
            ) : (
                    <section>
                        <div className="list_user">
                            <Loading show={loading} />
                            {montarTabela()}
                        </div>
                    </section>
                )}
        </div>

    )
}

export default UserList

