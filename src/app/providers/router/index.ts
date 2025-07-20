import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, name: 'Home' },
  // new route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
