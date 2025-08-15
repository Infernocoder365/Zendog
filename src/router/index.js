import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Team.vue')
    },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: () => import('../views/CaseStudies.vue')
    },
    {
      path: '/pitch-deck-creation',
      name: 'pitch-deck-creation',
      component: () => import('../views/PitchDeckCreation.vue')
    },
    {
      path: '/fundraising-training',
      name: 'fundraising-training',
      component: () => import('../views/FundraisingTraining.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/venture-capital-101',
      name: 'venture-capital-101',
      component: () => import('../views/VentureCapital101.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router