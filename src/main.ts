import { createApp } from 'vue'
import '@/styles/reset.scss'
import components from './components'
import App from './App.vue'

const app = createApp(App)
app.use(components)
app.mount('#app')
