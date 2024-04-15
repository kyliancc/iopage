import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/AboutView.vue')
    },
    {
      path: '/feature',
      name: 'feature',
      component: () => import('../views/feature/FeatureView.vue')
    },
    {
      path: '/note',
      name: 'note',
      component: () => import('../views/note/NoteView.vue')
    }
  ]
})

export default router
