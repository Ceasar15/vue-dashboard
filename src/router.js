import Vue from 'vue';
import Router from 'vue-router';
import Overview from '@/views/Overview.vue';


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
    },
    routes: [
        {
            path: '/',
            redirect: '/overview'
        },
        {
            path: '/overview',
            name: 'overview',
            componenet: Overview,
        }
    ]

});
