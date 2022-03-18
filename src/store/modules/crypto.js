import axios from "axios";

export const state = {
    cryptoID: '',
    crypto: {},
    cryptoData: {}
};

export const getters = {
    getCrypto(state) {
        return state.crypto;
    },
    getCryptoByID(state) {
        return state.cryptoID;
    },
    getCryptoChartInfo(state) {
        return state.cryptoData;
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
    GetCryptoByID({ commit }, id) {
        commit('SetCryptoID', id)
    },

    //Get cryptocurrency data by ID  import.meta.env.VITE_CION_BY_ID
    async getChartData({ commit }, ID) {
        let URL =
            import.meta.env.VITE_CION_BY_ID + ID + '?community_data=false&developer_data=false&sparkline=false';
        await axios.get(URL).then(
            res => {
                commit('SetCryptoData', res.data)
            }
        ).catch(error => {
            alert('Error has happen!');
        });
    }
};

export const mutations = {
    SetCrypto(state, payload) {
        state.crypto = payload;
    },
    SetCryptoID(state, payload) {
        state.cryptoID = payload;
    },
    SetCryptoData(state, payload) {
        state.cryptoData = payload;
    }
};