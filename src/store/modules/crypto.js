import axios from "axios";

export const state = {
    crypto: {},
    cryptoID: {}
};

export const getters = {
    getCrypto(state) {
        return state.crypto;
    },
    getCryptoByID(state) {
        return state.cryptoID;
    },
    getCryptoChartInfo(state) {

    }
};

export const actions = {

    //Get cryptocurrency information
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
    },

    //Get cryptocurrency information by id
    async GetCryptoByID({ commit }) {

    },

    //Get cryptocurrency chart data by ID
    async getChartData({ commit }, { id }) {
        let ID = id + '/market_chart?vs_currency=usd&days=1&interval=10';
    }
};

export const mutations = {
    SetCrypto(state, payload) {
        state.crypto = payload;
    },
    SetCryptoID(state, payload) {
        state.cryptoID = payload;
    }
};