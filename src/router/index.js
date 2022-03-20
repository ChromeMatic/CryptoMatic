import { createWebHistory, createRouter } from 'vue-router';

const routes = [

    {
        path: '/',
        name: 'home',
        component: function() {
            return import ('../views/home.vue')
        }
    },

    {
        path: '/track',
        name: 'trackCrypto',
        component: function() {
            return import ('../views/dashBoardView.vue')
        }
    },

    {
        path: '/Info',
        name: 'CryptoInfo',
        component: function() {
            return import ('../Pages/CryptoInfo.vue')
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;