<template>
  <section class="w-full">
    <div class="max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-8 items-start m-auto">
      <!-- Header Section -->
      <div class="md:col-span-1 text-center md:text-left mb-8 sm:mb-12 md:mb-16 relative">
        <h2 ref="headerText"
          class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 sm:pr-10 inline-block underline">
          Discover how to partner with us
        </h2>
      </div>
      <div class="md:col-span-3 w-full">
        <!-- Grid Layout -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-16 w-full pl-0 sm:pl-2 md:pl-5">
          <!-- Feature Card 1 -->
          <div class="bg-transparent rounded-xl shadow-lg pt-0 hover:shadow-xl transition-shadow duration-300">
            <p class="text-white text-sm sm:text-base leading-snug sm:leading-relaxed">Become a partner or join our team—reach out now at</p>
            <a href="mailto:hi@zendoglabs.com"
              class="text-white hover:underline mb-2 text-sm">hi@zendoglabs.com</a>!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const headerText = ref(null)
const underline = ref(null)

const svgWidth = computed(() => {
  if (!headerText.value) return 0
  return headerText.value.offsetWidth
})

const svgPath = computed(() => {
  const width = svgWidth.value
  const x1 = 0
  const x2 = width / 2
  const x3 = width
  return `M ${x1},31.68 c ${width / 4},-0.88 ${width / 2},-2.72 ${x2},-3.52 c ${width / 2},-0.8 ${width * 0.76},0 ${x3},0.32 c 3.24,0.064 -2.56,0.912 -2.7,0.96`
})

const underlineStyle = computed(() => ({
  fontSize: '22px',
  opacity: 1,
  transform: 'scale(1)',
  left: '0',
  top: '100%',
  position: 'absolute',
  display: 'block',
  pointerEvents: 'none',
  WebkitUserSelect: 'none',
  visibility: 'visible',
  transition: 'opacity .25s ease-out, visibility .25s ease-out',
  mixBlendMode: 'none'
}))

onMounted(() => {
  if (underline.value) {
    const path = underline.value.querySelector('path')
    if (path) {
      setTimeout(() => {
        path.style.strokeDashoffset = '0'
        path.style.transition = 'stroke-dashoffset 1s ease-in-out'
      }, 100)
    }
  }
})
</script>