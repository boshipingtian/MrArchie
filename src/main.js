import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入上面新建的路由文件
import router from './router/index'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')
