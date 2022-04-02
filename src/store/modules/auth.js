import axios from 'axios';

const state = {
    accessToken: null,
    refreshToken: null,
    user: null,
    products: null,
    count: 9
};
const getters = {
    isAuthenticated: state => !!state.user,
    StateProducts: state => state.products,
    StateUser: state => state.user,
    StateAccessToken: state => state.accessToken,
    StateRefreshToken: state => state.refreshToken,

};

const actions = {
    async Register({
        dispatch
    }, form) {
        await axios.post('register/', form)
            .then((response) => console.log(44, response))
            .catch((error) => console.log(55, error))
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('api/token/', UserForm)
    },
    async LogIn({
        commit
    }, User) {
        await axios.post('api/token/', User)
            .then((response) => {
                commit('setTokens', response.data)
            })
            .catch((error) => console.log(55, error))
        await commit('setUser', User.username)
    },
    async LogOut({
        commit
    }) {
        let user = null
        commit('LogOut', user)
    }


};
const mutations = {
    increment(state) {
        state.count++
    },
    setTokens(state, data) {
        state.accessToken = data.access
        state.refreshToken = data.refresh
    },
    setUser(state, username) {
        state.user = username
    },
    setProducts(state, products) {
        state.products = products
    },
    LogOut(state) {
        state.user = null
        state.products = null
        state.accessToken = null,
        state.refreshToken = null
    },

};
export default {
    state,
    getters,
    actions,
    mutations
};