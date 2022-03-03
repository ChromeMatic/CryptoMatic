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
        component: function() {}
    },

    {
        path: '/track',
        name: 'trackCrypto',
        component: function() {}
    },

    {
        path: '/watchlist',
        name: 'watchlist',
        component: function() {}
    },

    {
        path: '/login',
        name: 'login',
        component: function() {
            return import ('../views/loginView.vue');
        }
    },

    {
        path: '/signUp',
        name: 'SignUp',
        component: function() {}
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;