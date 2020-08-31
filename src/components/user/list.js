import React, { useEffect, useState } from 'react'
import { ListUser } from '../../Services/user'
import Loading from '../loading/loading'

const UserList = () => {
    const [users, setUsers] = useState([])

    const getList = async () => {
        try {

            const users = await ListUser()
            setUsers(users.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    const editUser = (user) => console.log('edit', user)

    const deleteUser = (user) => console.log('delete', user)

    const verifyIsEmpty = users.length === 0


    const montarTabela = () => {

        const linhas = users.map((user, index) => (
            <tr key={index}>
                <td>{user.is_active ? "SIM" : "NÃO"}</td>
                <td>{user.is_admin ? "SIM" : "NÃO"}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.time}</td>
                <td>{user.jogador}</td>
                <td>
                    <span onClick={() => editUser(user)} >Editar</span> |
                <span onClick={() => deleteUser(user)}>Excluir </span>
                </td>
            </tr>
        ))

        return !verifyIsEmpty ? (
            <table >
                <thead>
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
            </table>
        ) : ""
    }



    useEffect(() => {
        getList()
    }, [])


    //render
    return (
        <section>
            <div className="list_user">
                <Loading show={verifyIsEmpty} />
                {montarTabela()}
            </div>
        </section>
    )
}

export default UserList

