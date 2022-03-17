import { createStore } from 'vuex';
import * as theme from './modules/theme.js'
import * as Crypto from './modules/crypto.js'

const store = createStore({
    modules: {
        theme,
        Crypto
    },
})

export default store;