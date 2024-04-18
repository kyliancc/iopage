import '@/assets/global.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router.js'
import i18n from "@/i18n/i18n.js";

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')