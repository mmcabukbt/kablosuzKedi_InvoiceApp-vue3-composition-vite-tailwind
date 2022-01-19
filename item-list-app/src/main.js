import { createApp } from 'vue'
import App from './App.vue'
import AppSectionTitle from './components/appComponents/AppSectionTitle.vue'

import './index.css'

const app = createApp(App)
app.component("AppSectionTitle", AppSectionTitle)
app.mount('#app')
