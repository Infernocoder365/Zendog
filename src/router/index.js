import { createRouter, createWebHistory } from 'vue-router'

// Import views (lazy-loaded to match project pattern)
const Home = () => import('../views/Home.vue')
const Team = () => import('../views/Team.vue')
const CaseStudies = () => import('../views/CaseStudies.vue')
const CaseStudyDetail = () => import('../views/CaseStudyDetail.vue')
const PitchDeckCreation = () => import('../views/PitchDeckCreation.vue')
const FundraisingTraining = () => import('../views/FundraisingTraining.vue')
const Blog = () => import('../views/Blog.vue')
const BlogDetail = () => import('../views/BlogDetail.vue')
const VentureCapital101 = () => import('../views/VentureCapital101.vue')
const VentureCapitalDetail = () => import('../views/VentureCapitalDetail.vue')
const GrowthVcSlang = () => import('../views/GrowthVcSlang.vue')
const PrivacyPolicy = () => import('../views/PrivacyPolicy.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: 'Zendog Labs' } },
    { path: '/team', name: 'team', component: Team, meta: { title: 'Team' } },
    { path: '/case-studies', name: 'case-studies', component: CaseStudies, meta: { title: 'Case Studies' } },
    { path: '/case-studies/:id', name: 'case-study-detail', component: CaseStudyDetail },
    { path: '/pitch-deck-creation', name: 'pitch-deck-creation', component: PitchDeckCreation, meta: { title: 'Grand Slam ⚡ Pitch Deck Creation' } },
    { path: '/fundraising-training', name: 'fundraising-training', component: FundraisingTraining, meta: { title: 'Grand Slam ⚡ Fundraising Training' } },
    { path: '/blog', name: 'blog', component: Blog, meta: { title: 'Blog 🎓' } },
    { path: '/blog/:id', name: 'blog-detail', component: BlogDetail },
    { path: '/venture-capital-101', name: 'venture-capital-101', component: VentureCapital101, meta: { title: 'VC 101 Series 🎓' } },
    { path: '/venture-capital-101/:id', name: 'venture-capital-detail', component: VentureCapitalDetail },
    { path: '/growth-vc-slang', name: 'growth-vc-slang', component: GrowthVcSlang, meta: { title: 'Growth & VC Slang 🎓' } },
    { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicy, meta: { title: 'Privacy Policy' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Set document title from route meta for static pages; detail pages set their own titles
router.afterEach((to) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else {
    document.title = 'Zendog Labs'
  }
})

export default router