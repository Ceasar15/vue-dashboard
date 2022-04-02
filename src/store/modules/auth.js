import axios from 'axios';

const state = {
    user: null,
    products: null,
    count: 9
};
const getters = {
    isAuthenticated: state => !!state.user,
    StatePosts: state => state.posts,
    StateUser: state => state.user,
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
        await commit('setUser', User.username)
    },
    async LogOut({
        commit
    }) {
        let user = null
        commit('logout', user)
    }


};
const mutations = {
    increment(state) {
        state.count++
    },
    setUser(state, username) {
        console.log(22, username)
        state.user = username
        console.log(909090, state.user)
    },
    setPosts(state, posts) {
        state.posts = posts
    },
    LogOut(state) {
        state.user = null
        state.posts = null
    },

};
export default {
    state,
    getters,
    actions,
    mutations
};