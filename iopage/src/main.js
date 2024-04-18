import '@/assets/global.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router.js'
import { createI18n } from 'vue-i18n'
import i18nOptions from '@/i18n/options.js'

const i18n = createI18n(i18nOptions)

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')

export default i18n;