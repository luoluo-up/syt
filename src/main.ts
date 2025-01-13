import { createApp } from 'vue'
import App from './App.vue'
//引入样式
import { router } from '@/router'
import '@/style/reset.scss'
const app = createApp(App)
app.use(router)
app.mount('#app')
