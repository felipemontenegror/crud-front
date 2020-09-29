import React, { useState } from 'react'
import './login.css'
import { useHistory } from 'react-router-dom';
import { authentication } from '../../Services/auth';
import { clientHttp } from '../../config/config';
import { saveToken } from '../../config/auth';
import Alert from '../alert'

const Login = (props) => {
    const [auth, setAuth] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory()

    const handleChange = (event) => {
        setAuth({
            ...auth,
            [event.target.name]: event.target.value
        })
        return;
    }

    const isValidSubmit = () => auth.email && auth.senha

    const pressEnter = (event) => event.key === 'Enter' ? submitLogin() : null

    const submitLogin = async () => {

        if (isValidSubmit()) {
            setLoading(true)
            try {
                const { data: { token } } = await authentication(auth)
                clientHttp.defaults.headers['x-auth-token'] = token;
                saveToken(token)
                history.push('/')
            } catch (error) {
                setLoading(false)
                const erroCurrent = error.response.data.errors
                if (erroCurrent) {
                    const allItens = erroCurrent.map(item => item.msg)
                    const allItensToString = allItens.join('-')
                    setError(allItensToString)
                }
            }
        }
        return;
    }

    return (
        <section>
            <div id="login">
                <div className="form_login">
                    <div>
                        <label htmlFor="auth_login">Login</label>
                        <input disabled={loading} type="email" id="email" name="email" onChange={handleChange} value={auth.email || ""} placeholder="Insira seu e-mail" onKeyPress={pressEnter} />
                    </div>
                    <div>
                        <label htmlFor="auth_password">Senha</label>
                        <input disabled={loading} type="password" id="senha" name="senha" onChange={handleChange} value={auth.senha || ""} placeholder="Insira sua senha" onKeyPress={pressEnter} />
                    </div>
                    <button disabled={!isValidSubmit()} onClick={submitLogin} >
                        {loading ? (<i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>) : "Entrar"}
                    </button>
                    <div className="alertLogin">
                        <Alert show={error ? true : false} type="error" message={error} />
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Login;
