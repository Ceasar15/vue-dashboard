import {
    createRouter,
    createWebHistory
} from 'vue-router'


import AdminDashboard from './views/Dashboard.vue';
import AdminOrders from '@/views/AdminOrders.vue';
import AdminAnalytics from '@/views/AdminAnalytics.vue';
import PageNotFound from '@/views/PageNotFound.vue'


const routes = [{
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
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;