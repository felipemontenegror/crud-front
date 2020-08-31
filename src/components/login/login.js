import React, { useState } from 'react'
import './login.css'

const Login = (props) => {
    const [auth, setAuth] = useState({})

    const handleChange = (event) => {
        setAuth({
            ...auth,
            [event.target.name]: event.target.value
        })
        return;
    }

    const isValidSubmit = () => auth.email && auth.senha

    const submitLogin = () => {
        if (isValidSubmit()) {
            props.mudaPagina('List')
        }
        return;
    }

    return (
        <section>
            <div id="login">
                <div className="form_login">
                    <div>
                        <label htmlFor="auth_login">Login</label>
                        <input type="email" id="email" name="email" onChange={handleChange} value={auth.email || ""} placeholder="Insira seu e-mail" />
                    </div>
                    <div>
                        <label htmlFor="auth_password">Senha</label>
                        <input type="password" id="senha" name="senha" onChange={handleChange} value={auth.senha || ""} placeholder="Insira sua senha" />
                    </div>
                    <button disabled={!isValidSubmit()} onClick={submitLogin}>Entrar</button>
                </div>
            </div>
        </section>
    )
}


export default Login;

