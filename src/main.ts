import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import { vFocus } from './shared/directives/vFocus'

const pinia = createPinia()

createApp(App).use(router).use(pinia).directive('focus', vFocus).mount('#app')
