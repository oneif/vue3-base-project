import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

import { throttle } from '@/directives/index'
// svg
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('SvgIcon', SvgIcon)
throttle(app)

app.mount('#app')
