import { createStore } from 'vuex';
import * as theme from './modules/theme.js'
import * as login from './modules/Login.js'
import * as SignUp from './modules/SignUp.js'
import * as User from './modules/user.js'

const store = createStore({
    modules: {
        theme,
        login,
        SignUp,
        User
    }
})

export default store;