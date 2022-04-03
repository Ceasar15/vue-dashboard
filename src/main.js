import {
  createApp
} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {
  loadFonts
} from './plugins/webfontloader'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/modules';
import Vuex from 'vuex';

// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://ecommerce-platform-j.herokuapp.com/';

loadFonts()


createApp(App)
  .use(Vuex)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueAxios, axios)
  .mount('#app')