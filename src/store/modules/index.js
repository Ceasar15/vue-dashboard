import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './auth';

const store = createStore({
  state: auth.state,
  getters: auth.getters,
  mutations: auth.mutations,
  actions: auth.actions,
  plugins: [createPersistedState]

})



export default store;