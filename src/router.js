import Vue from 'vue';
import Router from 'vue-router';

import AdminDashboard from './views/Dashboard.vue';
import AdminOrders from './views/AdminOrders.vue';
import AdminAnalytics from './views/AdminAnalytics.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    routes: [{
            path: '/',
            redirect: '/dashboard',
        },
        {
            path: "/dashboard",
            name: "Admindashboard",
            componenet: AdminDashboard,
        },
        {
            path: "/admin-orders",
            name: "AdminOrders",
            componenet: AdminOrders,
        },
        {
            path: "/admin-analytics",
            name: "AdminAnalytics",
            componenet: AdminAnalytics,
        },
    ],
});