import { createApp } from 'vue'
import App from '@/app/app.vue'
import router from '@/app/providers/router'
import { bootstrap } from './bootstrap'
import { VueQueryPlugin } from '@tanstack/vue-query'

import '@/app/styles/app.css'

bootstrap().then(() => {
  createApp(App).use(router).use(VueQueryPlugin).mount('#ctx-app')
})
