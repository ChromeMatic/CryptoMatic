import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from '../src/store/index.js'
import router from '../src/router/index.js'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

createApp(App).use(VueChartkick).use(router).use(store).mount('#app')