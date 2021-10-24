import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  引入自定义插件
import MyPlugin from './plugin'
import '@/assets/css/border.css'
import '@/assets/css/resets.css'
import '@/assets/js/common.js'

createApp(App).use(store).use(router).use(MyPlugin).mount('#app')
