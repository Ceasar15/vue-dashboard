import { createWebHistory, createRouter } from 'vue-router';
import OverView from '@/views/Overview.vue'




const routes = [
        {
            path: '/',
            redirect: '/overview',
        },
        {
            path: "/overview",
            name: "overview",
            componenet: OverView,
        },
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
