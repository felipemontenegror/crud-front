import axios from 'axios'

const clientHttp = axios.create({
    baseURL: `http://localhost:3001`,
})
//     baseURL: `https://infnet-bootcamp-api.herokuapp.com`,
clientHttp.defaults.headers['Content-Type'] = 'application/json';

export {
    clientHttp
}
