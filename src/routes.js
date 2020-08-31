import UserList from './components/user/list'
import UserCreate from './components/user/create'
import Login from './components/login/login'


const routes = {
    'List': {
        component: UserList,
        showMenu: true,
        actions: {
            name: 'Novo',
            to: "Create"
        }
    },
    'Create': {
        component: UserCreate,
        showMenu: true,
        actions: {
            name: 'Lista',
            to: "List"
        }
    },
    'Login': {
        component: Login,
        showMenu: false,
    },
}

export default routes;
