import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入
import { createPinia } from 'pinia'

// 1.创建pinia（根存储）
const pinia = createPinia()

// 2.挂载至vue根实例上
createApp(App).use(pinia).mount('#app')
