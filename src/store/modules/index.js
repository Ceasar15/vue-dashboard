import { createStore } from 'vuex';
// import Vue from 'vue';
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
// Load Vuex
// Vue.use(Vuex);
// Create store
// export default new Vuex.Store({
//   modules: {
//     auth
//   },
//   plugins: [createPersistedState()]
// });