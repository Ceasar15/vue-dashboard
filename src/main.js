/* eslint-disable */
import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './router'

// Vue.config.productionTip = false;
// Vue.prototype.$eventHub = new Vue();


/* eslint-disable no-new */
// new Vue({
    // router,
    // render: h => h(App),
// }).$mount('#app');
  
createApp(App).use(router).mount('#app')