import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UIKit from '@/views/UIKit.vue'
import IssuesExplanation from '@/views/IssuesExplanation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/uikit',
      name: 'uikit',
      component: UIKit,
    },
    {
      path: '/explanation',
      name: 'explanation',
      component: IssuesExplanation,
    },
  ],
})

export default router
