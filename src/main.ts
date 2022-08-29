import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入pinia持久化插件
import piniaPersist from 'pinia-plugin-persist'

// 引入
import { createPinia } from 'pinia'

// 1.创建pinia（根存储）
const pinia = createPinia()
// 使用插件
pinia.use(piniaPersist)

// 2.挂载至vue根实例上
createApp(App).use(pinia).mount('#app')
