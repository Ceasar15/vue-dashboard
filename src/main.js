/* eslint-disable */
import VueRouter from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();


/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
  
// createApp(App).mount('#app')