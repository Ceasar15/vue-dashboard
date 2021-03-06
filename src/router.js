import {
    createRouter,
    createWebHistory
} from 'vue-router'


import AdminDashboard from './views/Dashboard.vue';
const AdminOrders = () => import('./views/AdminOrders.vue')
import AdminAnalytics from '@/views/AdminAnalytics.vue';
import PageNotFound from '@/views/PageNotFound.vue'
import AdminProducts from "@/views/AdminProducts";
import SignupPage from "@/views/SignupPage";
import SigninPage from "@/views/SigninPage";
import AdminCreateProducts from "@/views/AdminCreateProducts";
import AdminDetailProduct from "@/views/AdminDetailProduct";



const routes = [{
    path: '/',
    redirect: '/dashboard',
},
    {
        path: "/signUp",
        name: "SignupPage",
        component: SignupPage,
    },
    {
        path: "/signIn",
        name: "SigninPage",
        component: SigninPage,
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
        path: "/admin-products",
        name: "AdminProducts",
        component: AdminProducts,
    },
    {
        path: "/admin-create-products",
        name: "AdminCreateProducts",
        component: AdminCreateProducts,
    },
    {
        path: "/admin-detail-product/:productID",
        name: "AdminDetailProduct",
        component: AdminDetailProduct,
        props: true,
    },
    {
        path: "/analytics",
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