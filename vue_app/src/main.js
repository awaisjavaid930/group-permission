import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js';
createApp(App).use(router).mount('#app')
