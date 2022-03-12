import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    baseUrl: process.env.BASE_URl,
    linkActiveClass: 'active',
    linkExactiveClass: 'exact-active',
    scrollBehavior () {
        return {
            x: 0,
            y: 0,
        }
    }

});
