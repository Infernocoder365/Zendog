<template>
  <header :class="[
    'fixed top-0 z-40 w-full box-border pt-[2vw] pb-[2vw] px-[5vw] sm:px-[7vw] md:px-[10vw] pointer-events-auto transition-all duration-[140ms] ease-in-out',
    scrolled ? 'bg-bg-secondary' : 'bg-transparent'
  ]">
    <div class="max-w-[1900px] mx-auto">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center flex-nowrap flex-[1_0_auto] sm:flex-[1_0_50%] md:flex-[1_0_67%]">
          <div class="flex-[0_0_auto] backface-visibility-hidden">
            <router-link to="/">
              <img src="/images/zendog_Labs_Logo.png" alt="Zendo Logo"
                class="w-auto max-w-full max-h-[30px] sm:max-h-[35px] md:max-h-[40px] block border-0 cursor-pointer text-inherit font-size-0 pointer-events-auto">
            </router-link>
          </div>
          <div class="text-right ml-auto pl-[1vw] sm:pl-[1.5vw] md:pl-[2.5vw]">
            <!-- Navigation -->
            <nav class="hidden lg:block">
              <ul class="flex space-x-4 md:space-x-8">
                <li class="relative group">
                  <a href="#" 
                    :class="['text-text-secondary transition-colors font-body text-sm md:text-base leading-body tracking-body', isCompanyActive ? 'underline' : 'hover:underline']">Company</a>
                  <div class="absolute right-0 w-48 bg-bg-secondary rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <router-link to="/team" :class="['block px-4 py-2 text-text-secondary transition-colors font-body text-sm leading-body tracking-body', route.path === '/team' ? 'underline' : 'hover:underline']">
                      Team
                    </router-link>
                    <router-link to="/case-studies" :class="['block px-4 py-2 text-text-secondary transition-colors font-body text-sm leading-body tracking-body', route.path === '/case-studies' ? 'underline' : 'hover:underline']">
                      Case Studies
                    </router-link>
                  </div>
                </li>
                <li class="relative group">
                  <a href="#" 
                    :class="['text-text-secondary transition-colors font-body text-sm md:text-base leading-body tracking-body', isGrandSlamsActive ? 'underline' : 'hover:underline']">Grand Slams</a>
                  <div class="absolute right-0 w-80 bg-bg-secondary rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <router-link to="/pitch-deck-creation" :class="['block px-4 py-2 text-text-secondary transition-colors font-body text-sm leading-body tracking-body', route.path === '/pitch-deck-creation' ? 'underline' : 'hover:underline']">
                      Grand Slam ⚡ Pitch Deck Creation
                    </router-link>
                    <router-link to="/fundraising-training" :class="['block px-4 py-2 text-text-secondary transition-colors font-body text-sm leading-body tracking-body', route.path === '/fundraising-training' ? 'underline' : 'hover:underline']">
                      Grand Slam ⚡ Fundraising Training
                    </router-link>
                  </div>
                </li>
                <li class="relative group">
                  <a href="#" 
                    :class="['text-text-secondary transition-colors font-body text-sm md:text-base leading-body tracking-body', isInsightsActive ? 'underline' : 'hover:underline']">Insights</a>
                  <div class="absolute right-0 w-64 bg-bg-secondary rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <router-link to="/blog" :class="['block px-4 py-2 text-text-secondary transition-colors font-body text-sm leading-body tracking-body', route.path === '/blog' ? 'underline' : 'hover:underline']">
                      Blog 🎓
                    </router-link>
                    <router-link to="/venture-capital-101" :class="['block px-4 py-2 text-text-secondary transition-colors font-body text-sm leading-body tracking-body', route.path === '/venture-capital-101' ? 'underline' : 'hover:underline']">
                      VC 101 Series 🎓
                    </router-link>
                    <router-link to="/growth-vc-slang" :class="['block px-4 py-2 text-text-secondary transition-colors font-body text-sm leading-body tracking-body', route.path === '/growth-vc-slang' ? 'underline' : 'hover:underline']">
                      Growth & VC Slang 🎓
                    </router-link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- CTA Button -->
        <button
          @click="goToContact"
          class="hidden lg:block bg-primary hover:bg-primary text-primary-button font-header-button text-xs sm:text-sm md:text-[calc((var(--header-button-font-size)_-_1)_*_1.2vw_+_1rem)] font-semibold leading-header-button tracking-header-button px-3 sm:px-4 md:px-primary-button-padding-x py-auto h-[40px] sm:h-[45px] md:h-[53px] rounded-primary-button transition-colors duration-200 ml-[1vw] sm:ml-[1.5vw] md:ml-[2.5vw]">
          Learn more
        </button>

        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="lg:hidden text-text-secondary ml-2">
          <span class="text-xl">☰</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden mt-4 pb-4 bg-bg-secondary rounded-md p-4 absolute left-0 right-0 mx-[5vw] sm:mx-[7vw] md:mx-[10vw] shadow-lg">
        <ul class="space-y-4">
          <!-- Company -->
          <li>
            <div @click="toggleSubmenu('company')" :class="['flex justify-between items-center text-text-secondary transition-colors font-body text-sm sm:text-base leading-body tracking-body py-2 cursor-pointer', isCompanyActive ? 'underline' : '']">
              <span>Company</span>
              <span class="text-xs">{{ openSubmenus.company ? '▲' : '▼' }}</span>
            </div>
            <ul v-if="openSubmenus.company" class="pl-4 mt-2 space-y-2">
              <li>
                <router-link to="/team" :class="['text-text-secondary transition-colors font-body text-sm leading-body tracking-body block py-2', route.path === '/team' ? 'underline' : '']">
                  Team
                </router-link>
              </li>
              <li>
                <router-link to="/case-studies" :class="['text-text-secondary transition-colors font-body text-sm leading-body tracking-body block py-2', route.path === '/case-studies' ? 'underline' : '']">
                  Case Studies
                </router-link>
              </li>
            </ul>
          </li>
          
          <!-- Grand Slams -->
          <li>
            <div @click="toggleSubmenu('grandSlams')" :class="['flex justify-between items-center text-text-secondary transition-colors font-body text-sm sm:text-base leading-body tracking-body py-2 cursor-pointer', isGrandSlamsActive ? 'underline' : '']">
              <span>Grand Slams</span>
              <span class="text-xs">{{ openSubmenus.grandSlams ? '▲' : '▼' }}</span>
            </div>
            <ul v-if="openSubmenus.grandSlams" class="pl-4 mt-2 space-y-2">
              <li>
                <router-link to="/pitch-deck-creation" :class="['text-text-secondary transition-colors font-body text-sm leading-body tracking-body block py-2', route.path === '/pitch-deck-creation' ? 'underline' : '']">
                  PitchDeck Creation
                </router-link>
              </li>
              <li>
                <router-link to="/fundraising-training" :class="['text-text-secondary transition-colors font-body text-sm leading-body tracking-body block py-2', route.path === '/fundraising-training' ? 'underline' : '']">
                  Fundraising Training
                </router-link>
              </li>
            </ul>
          </li>
          
          <!-- Insights -->
          <li>
            <div @click="toggleSubmenu('insights')" :class="['flex justify-between items-center text-text-secondary transition-colors font-body text-sm sm:text-base leading-body tracking-body py-2 cursor-pointer', isInsightsActive ? 'underline' : '']">
              <span>Insights</span>
              <span class="text-xs">{{ openSubmenus.insights ? '▲' : '▼' }}</span>
            </div>
            <ul v-if="openSubmenus.insights" class="pl-4 mt-2 space-y-2">
              <li>
                <router-link to="/blog" :class="['text-text-secondary transition-colors font-body text-sm leading-body tracking-body block py-2', route.path === '/blog' ? 'underline' : '']">
                  Blog
                </router-link>
              </li>
              <li>
                <router-link to="/venture-capital-101" :class="['text-text-secondary transition-colors font-body text-sm leading-body tracking-body block py-2', route.path === '/venture-capital-101' ? 'underline' : '']">
                  VC 101 Series
                </router-link>
              </li>
              <li>
                <router-link to="/growth-vc-slang" :class="['text-text-secondary transition-colors font-body text-sm leading-body tracking-body block py-2', route.path === '/growth-vc-slang' ? 'underline' : '']">
                  Growth & VC Slang
                </router-link>
              </li>
            </ul>
          </li>
          
          <li class="pt-2">
            <button @click="goToContact" class="w-full bg-primary hover:bg-primary/90 text-primary-button font-header-button text-sm font-semibold leading-header-button tracking-header-button py-3 rounded-primary-button transition-colors duration-200">
              Learn more
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const openSubmenus = reactive({
  company: false,
  grandSlams: false,
  insights: false
})

// Computed properties to check if routes are active
const isCompanyActive = computed(() => {
  return route.path.includes('/team') || route.path.includes('/case-studies')
})

const isGrandSlamsActive = computed(() => {
  return route.path.includes('/pitch-deck-creation') || route.path.includes('/fundraising-training')
})

const isInsightsActive = computed(() => {
  return route.path.includes('/blog') || route.path.includes('/venture-capital-101') || route.path.includes('/growth-vc-slang')
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Reset submenus when closing mobile menu
  if (!mobileMenuOpen.value) {
    openSubmenus.company = false
    openSubmenus.grandSlams = false
    openSubmenus.insights = false
  }
}

const toggleSubmenu = (submenu) => {
  openSubmenus[submenu] = !openSubmenus[submenu]
}

const goToContact = () => {
  // Navigate to home with hash and rely on router scrollBehavior for smooth scroll
  router.push({ path: '/', hash: '#contact' })
}

// Auto-open submenu based on current route
onMounted(() => {
  if (isCompanyActive.value) {
    openSubmenus.company = true
  } else if (isGrandSlamsActive.value) {
    openSubmenus.grandSlams = true
  } else if (isInsightsActive.value) {
    openSubmenus.insights = true
  }
})

// Close mobile menu when route changes
router.afterEach(() => {
  mobileMenuOpen.value = false
  // Auto-open relevant submenu based on new route
  openSubmenus.company = isCompanyActive.value
  openSubmenus.grandSlams = isGrandSlamsActive.value
  openSubmenus.insights = isInsightsActive.value
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>