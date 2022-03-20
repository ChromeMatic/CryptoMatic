import axios from "axios";

export const state = {
    cryptoID: '',
    crypto: {},
    cryptoData: {},
    cryptoSearchData: {}
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
    },
    getCryptoSearchData(state) {
        return state.cryptoSearchData;
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
    },

    //Fetch search data from API
    async getSearchData({ commit }, name) {

        if (name) {

            let url =
                import.meta.env.VITE_SEARCH + name;
            await axios.get(url).then(
                res => {
                    commit('SetSearchData', res.data['coins'][0])
                }
            ).catch(error => {
                alert('Error has happen!');
            });

        } else {
            console.log('Error has happen in the getSearchData function!')
        }

    }
};

export const mutations = {
    SetCrypto(state, payload) {
        state.crypto = payload;
    },
    SetCryptoID(state, payload) {
        localStorage.item = payload;
        state.cryptoID = payload;
    },
    SetCryptoData(state, payload) {
        state.cryptoData = payload;
    },
    SetSearchData(state, payload) {
        state.cryptoSearchData = payload
    }
};