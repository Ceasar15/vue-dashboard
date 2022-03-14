import {
    createRouter,
    createWebHistory
} from 'vue-router'


import AdminDashboard from './views/Dashboard.vue';
const AdminOrders = () => import('./views/AdminOrders.vue')
import AdminAnalytics from '@/views/AdminAnalytics.vue';
import PageNotFound from '@/views/PageNotFound.vue'


const routes = [{
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: "/dashboard",
        name: "AdminDashboard",
        component: AdminDashboard,
    },
    {
        path: "/admin-orders",
        name: "AdminOrders",
        component: AdminOrders,
    },
    {
        path: "/admin-analytics",
        name: "AdminAnalytics",
        component: AdminAnalytics,
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