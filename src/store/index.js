import { createStore } from 'vuex';

const store = createStore({

    state: {
        isDark: false,
    },

    getters: {
        getTheme(state) {
            return state.isDark
        }
    },

    actions: {
        changeTheme({ commit }) {
            commit('setTheme')
        }
    },

    mutations: {
        setTheme(state) {
            state.isDark = !state.isDark;
        },
    }
})

export default store;