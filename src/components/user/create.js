import React, { useState } from 'react'
import { createUser } from '../../Services/user'
// import Loading from '../loading/loading'
import './user.css'

const UserCreate = (props) => {

    const [isSubmit, setIsSubmit] = useState(false)

    const [form, setForm] = useState({
        is_active: true,
        is_admin: false
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        return;
    }

    const formIsValid = () => {
        return form.nome && form.email && form.senha && form.time && form.jogador
    }

    const submitForm = async () => {
        try {
            setIsSubmit(true)
            await createUser(form)
            alert('Seu formulário foi enviado com sucesso')
            setForm({
                is_active: true,
                is_admin: false
            })
            setIsSubmit(false)
            props.mudaPagina('List')
        } catch (error) {
            console.log('deu ruim')
        }
    }



    return (
        <section >

            <div className="create_user">
                <div className="form_login">
                    <div>
                        <label htmlFor="auth_nome">Nome:</label>
                        <input disabled={isSubmit} type="text" id="auth_nome" name="nome" onChange={handleChange} value={form.nome || ""} placeholder="Insira o seu nome" />
                    </div>
                    <div>
                        <label htmlFor="auth_email">Email:</label>
                        <input disabled={isSubmit} type="email" id="auth_email" name="email" onChange={handleChange} value={form.email || ""} placeholder="Insira sua senha" />
                    </div>
                    <div>
                        <label htmlFor="auth_password">Senha:</label>
                        <input disabled={isSubmit} type="password" id="auth_password" name="senha" onChange={handleChange} value={form.senha || ""} placeholder="Insira sua senha" />
                    </div>

                    <div>
                        <label htmlFor="auth_time">Time:</label>
                        <input disabled={isSubmit} type="text" id="auth_time" name="time" onChange={handleChange} value={form.time || ""} placeholder="Insira seu time" />
                    </div>

                    <div>
                        <label htmlFor="auth_jogador">Jogador:</label>
                        <input disabled={isSubmit} type="text" id="auth_jogador" name="jogador" onChange={handleChange} value={form.jogador || ""} placeholder="Insira o jogador" />
                    </div>

                    <button disabled={!formIsValid()} onClick={submitForm}>Cadastrar</button>
                </div>
                <br />
                {/* <Loading show={isSubmit}/> */}
                {isSubmit ? <div>Carregando....</div> : ""}

            </div>
        </section >
    )
}

export default UserCreate
