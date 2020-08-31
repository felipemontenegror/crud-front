import { clientHttp } from '../../src/config/config'

const createUser = (data) => clientHttp.post(`/usuario`, data) //ou '/api/usuario  ?'

const ListUser = () => clientHttp.get(`/usuario`)

export {
    createUser,
    ListUser
}

//import {clientHTTP} from "../../src/config/config"

//const createUser = (data) => clientHTTP.post(`/user`, data)

//export {
//    createUser
//}