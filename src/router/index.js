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
        path: '/news',
        name: 'news',
        component: function() {},
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/track',
        name: 'trackCrypto',
        component: function() {
            return import ('../views/dashBoardView.vue')
        },
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/charts',
        name: 'chartInfo',
        component: function() {
            return import ('../views/chartView.vue')
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;