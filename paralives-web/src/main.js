import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/simulator.css'
import './assets/simulator-tools.css'
import './assets/wiki-pages.css'

createApp(App).use(router).mount('#app')
