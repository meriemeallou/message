import { createRouter, createWebHistory } from 'vue-router'
import HomeMessage from '../components/HomeMessage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeMessage',
      component: HomeMessage
    }
  ]
})

export default router
