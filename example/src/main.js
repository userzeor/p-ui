import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PUI from '@p-ui/p-ui'

import './style.css'
import App from './App.vue'

const env = import.meta.env
console.log(env)

const app = createApp(App)
app.use(ElementPlus)
app.use(PUI)
app.mount('#app')
