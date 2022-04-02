import axios from 'axios';
import VueCookies from 'vue-cookies'

const state = {
    user: null,
    welcome: false,
};
const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
    StateWelcome: state => state.welcome
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
                VueCookies.set('accessToken', response.data.access)
                VueCookies.set('refreshToken', response.data.refresh)
                commit('setUser', User.username)
            })
    },
    async LogOut({
        commit
    }, User) {
        let config = {
            headers: {
              Authorization: 'Bearer ' + VueCookies.get('accessToken'),
            }
          }
        await axios.post('logout/', User, config).then((response) => {
            console.log('logout successful', response.data)
        }).catch((err) => {
            console.log(99, err)
        })
        let user = null
        commit('LogOut', user)
    }


};
const mutations = {
    setUser(state, username) {
        state.user = username
        state.welcome = true
    },
    LogOut(state) {
        state.user = null
        VueCookies.set('accessToken', null)
        VueCookies.set('refreshToken', null)
},

};
export default {
    state,
    getters,
    actions,
    mutations
};