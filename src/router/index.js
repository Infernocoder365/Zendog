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
      path: '/case-studies/:id',
      name: 'case-study-detail',
      component: () => import('../views/CaseStudyDetail.vue')
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
      path: '/blog/:id',
      name: 'blog-detail',
      component: () => import('../views/BlogDetail.vue')
    },
    {
      path: '/venture-capital-101',
      name: 'venture-capital-101',
      component: () => import('../views/VentureCapital101.vue')
    },
    {
      path: '/venture-capital-101/:id',
      name: 'venture-capital-detail',
      component: () => import('../views/VentureCapitalDetail.vue')
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