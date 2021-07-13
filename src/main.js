import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'reset-css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/scss/main.scss';
import 'animate.css';



createApp(App).use(store).use(router).mount('#app')
