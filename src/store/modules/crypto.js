import axios from "axios";

export const state = {
    crypto: {}
};

export const getters = {
    getCrypto(state) {
        return state.crypto
    }
};

export const actions = {
    async FetchCrypto({ commit }) {
        await axios.get(
            import.meta.env.VITE_URL,
        ).then(
            res => {
                commit('SetCrypto', res.data)
            }
        ).catch(error => {
            alert('Error has happen!');
        });
    }
};

export const mutations = {
    SetCrypto(state, payload) {
        state.crypto = payload;
    }
};