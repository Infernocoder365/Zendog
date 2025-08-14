<template>
  <header :class="[
    'fixed top-0 z-50 w-full box-border pt-[2vw] pb-[2vw] px-[5vw] sm:px-[7vw] md:px-[10vw] pointer-events-auto transition-all duration-[140ms] ease-in-out',
    scrolled ? 'bg-bg-secondary' : 'bg-transparent'
  ]">
    <div class="max-w-[1900px] mx-auto">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center flex-nowrap flex-[1_0_auto] sm:flex-[1_0_50%] md:flex-[1_0_67%]">
          <div class="flex-[0_0_auto] backface-visibility-hidden">
            <img src="/images/zendog_Labs_Logo.png" alt="Zendo Logo"
              class="w-auto max-w-full max-h-[30px] sm:max-h-[35px] md:max-h-[40px] block border-0 cursor-pointer text-inherit font-size-0 pointer-events-auto">
          </div>
          <div class="text-right ml-auto pl-[1vw] sm:pl-[1.5vw] md:pl-[2.5vw]">
            <!-- Navigation -->
            <nav class="hidden lg:block">
              <ul class="flex space-x-4 md:space-x-8">
                <li><a href="#company"
                    class="text-text-secondary hover:text-primary transition-colors font-body text-sm md:text-base leading-body tracking-body">Company</a>
                </li>
                <li><a href="#guides"
                    class="text-text-secondary hover:text-primary transition-colors font-body text-sm md:text-base leading-body tracking-body">Guides</a>
                </li>
                <li><a href="#grand-slams"
                    class="text-text-secondary hover:text-primary transition-colors font-body text-sm md:text-base leading-body tracking-body">Grand
                    Slams</a></li>
                <li><a href="#insights"
                    class="text-text-secondary hover:text-primary transition-colors font-body text-sm md:text-base leading-body tracking-body">Insights</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- CTA Button -->
        <button
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
          <li><a href="#company"
              class="text-text-secondary hover:text-primary transition-colors font-body text-sm sm:text-base leading-body tracking-body block py-2">Company</a>
          </li>
          <li><a href="#guides"
              class="text-text-secondary hover:text-primary transition-colors font-body text-sm sm:text-base leading-body tracking-body block py-2">Guides</a>
          </li>
          <li><a href="#grand-slams"
              class="text-text-secondary hover:text-primary transition-colors font-body text-sm sm:text-base leading-body tracking-body block py-2">Grand
              Slams</a></li>
          <li><a href="#insights"
              class="text-text-secondary hover:text-primary transition-colors font-body text-sm sm:text-base leading-body tracking-body block py-2">Insights</a>
          </li>
          <li class="pt-2">
            <button class="w-full bg-primary hover:bg-primary/90 text-primary-button font-header-button text-sm font-semibold leading-header-button tracking-header-button py-3 rounded-primary-button transition-colors duration-200">
              Learn more
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>