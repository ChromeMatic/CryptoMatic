import { createWebHistory, createRouter } from 'vue-router';
import { getCurrentUser } from '../firebase';

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
        path: '/watchlist',
        name: 'watchlist',
        component: function() {},
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/login',
        name: 'login',
        component: function() {
            return import ('../views/loginView.vue');
        },
        meta: {
            guestOnly: true
        }
    },

    {
        path: '/signUp',
        name: 'SignUp',
        component: function() {},
        meta: {
            guestOnly: true
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;