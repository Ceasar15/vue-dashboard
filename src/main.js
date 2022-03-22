import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSnip from 'vue-snip'

loadFonts()


createApp(App)
    .use(router)
  .use(vuetify)
    .use(VueAxios, axios)
    .use(VueSnip)
  .mount('#app')
