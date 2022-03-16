export const state = {
    isDark: false,
};

export const getters = {
    getTheme(state) {
        return state.isDark;
    }
};

export const actions = {
    changeTheme({ commit }) {
        commit('setTheme')
    }
};

export const mutations = {
    setTheme(state) {
        state.isDark = !state.isDark;
    },
};