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
import VueCookies from 'vue-cookies'


// let fut = axios.create({
//   baseURL: "https://ecommerce-platform-j.herokuapp.com/"
// });

// // axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://ecommerce-platform-j.herokuapp.com/';
axios.interceptors.response.use(ress => {
  if (ress) {
    return ress;
  }
}, async (err) => {
  console.log(21)
  let oldConfig = err.config;
  if (oldConfig.url !== "api/token/" && err.response) {
    console.log(22)
    if (err.response.status === 401 && !oldConfig._retry) {
      oldConfig._retry = true;
      try {
        console.log(23)
        let res = axios.post("/api/token/refresh/", {
          refresh: VueCookies.get('refreshToken')
        })
        if (res.status === 201) {
          VueCookies.set('accessToken', res.data.access)
          VueCookies.set('refreshToken', res.data.refresh)
          return axios(oldConfig)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

})

window.onbeforeunload = function () {
  window.onunload = function () {
    window.localStorage.alertTriggered = false;
  }
  return undefined;
};

window.onload = function () {
  window.localStorage.alertTriggered = true;
};
loadFonts()


createApp(App)
  .use(Vuex)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueAxios, axios)
  .mount('#app')