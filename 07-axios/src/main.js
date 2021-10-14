import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {request} from '@/axios/index'


const app = createApp(App)
app.config.globalProperties.$request = request
app.use(router).mount('#app')
