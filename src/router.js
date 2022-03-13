import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import AdminOrders from '@/views/AdminOrders.vue';
import AdminAnalytics from '@/views/AdminAnalytics.vue';


const routes = [
        {
            path: '/',
            redirect: '/dashboard',
        },
        {
            path: "/dashboard",
            name: "dashboard",
            componenet: Dashboard,
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
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
