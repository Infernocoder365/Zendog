<template>
  <section class="w-full py-10 sm:py-12 md:py-16 lg:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
      <!-- Header Section -->
      <div class="md:text-center mb-8 sm:mb-12 md:mb-16 mt-6 sm:mt-8 md:mt-10 relative">
        <h2 ref="headerText" class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 inline-block underline">
          In strategic partnership with
        </h2>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full pl-0 sm:pl-2 md:pl-5">
        <!-- Feature Card 1 -->
        <div class="bg-transparent rounded-xl shadow-lg p-4 sm:p-6 md:p-8 pt-0 hover:shadow-xl transition-shadow duration-300">
          <img src="/images/Logo+-+oezpa.png" alt="Market Analysis" class="h-20 sm:h-12 md:h-16 mb-3 sm:mb-4 md:mb-6" />
          <p class="text-white text-sm sm:text-base leading-snug sm:leading-relaxed">With 30 years in the field, our family business, oezpa, is a heavyweight in change management, partnering with enterprises like AstraZeneca, Axa, BP, and many more.</p>
          <div class="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-x-3 sm:gap-x-4 md:gap-x-5">
            <div><img src="/images/3.png" alt="Market Analysis" class="w-full my-3 sm:my-4 md:my-6" /></div>
            <div><img src="/images/4.png" alt="Market Analysis" class="w-full my-3 sm:my-4 md:my-6" /></div>
            <div><img src="/images/5.png" alt="Market Analysis" class="w-full my-3 sm:my-4 md:my-6" /></div>
            <div><img src="/images/2.png" alt="Market Analysis" class="w-full" /></div>
            <div><img src="/images/1(2).png" alt="Market Analysis" class="w-full" /></div>
            <div><img src="/images/Logos+below+oezpa.png" alt="Market Analysis" class="w-full" /></div>
          </div>
        </div>

        <!-- Feature Card 2 -->
        <div class="bg-transparent rounded-xl shadow-lg p-4 sm:p-6 md:p-8 pt-0 hover:shadow-xl transition-shadow duration-300">
          <img src="/images/Logo+-+Funden.png" alt="Growth Planning" class="h-20 sm:h-12 md:h-16 mb-3 sm:mb-4 md:mb-6" />
          <p class="text-white text-sm sm:text-base leading-snug sm:leading-relaxed">As VCs-in-Residence for Funden, the premier fundraising platform with 800+ partner funds and Product of the Day on Product Hunt, we harness our insights to get startups funded.</p>
            <div><img src="/images/product-of-the-day+(1).png" alt="Growth Planning" class="h-14 md:h-8 my-3 sm:my-4 md:my-6" /></div>
        </div>

        <!-- Feature Card 3 -->
        <div class="bg-transparent rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <img src="/images/Logos+-+Various+(2).jpg" alt="Execution Support" class="h-20 sm:h-12 md:h-16 mb-3 sm:mb-4 md:mb-6" />
          <p class="text-white text-sm sm:text-base leading-snug sm:leading-relaxed">Fragmant is a group of globally recognized designers and our tried-and-tested partner for branding, creative, video, website, and product design.</p>
          <div class="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-x-3 sm:gap-x-4 md:gap-x-5 items-center">
            <div><img src="/images/4(1).jpg" alt="Execution Support" class="h-12 md:h-8 my-3 sm:my-4 md:my-6" /></div>
            <div><img src="/images/3(1).jpg" alt="Execution Support" class="h-12 md:h-8 my-3 sm:my-4 md:my-6" /></div>
            <div><img src="/images/5(1).jpg" alt="Execution Support" class="h-12 md:h-8 my-3 sm:my-4 md:my-6" /></div>
            <div><img src="/images/6(1).jpg" alt="Execution Support" class="h-12 md:h-8" /></div>
          </div>
        </div>

        <!-- Feature Card 4 -->
        <div class="bg-transparent rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <img src="/images/Logos+-+Various+(4).jpg" alt="Scaling Framework" class="h-20 sm:h-12 md:h-16 mb-3 sm:mb-4 md:mb-6" />
          <p class="text-white text-sm sm:text-base leading-snug sm:leading-relaxed">ClickHive handles our media buying on Meta, TikTok, and Google, managing multi-million dollar budgets. They also produce our user-generated content (UGC).</p>
          <div class="flex flex-wrap">
            <div><img src="/images/7.jpg" alt="Scaling Framework" class="h-4 sm:h-4.5 md:h-5 my-3 sm:my-4 md:my-6 mx-1 sm:mx-1.5 md:mx-2" /></div>
            <div><img src="/images/8.jpg" alt="Scaling Framework" class="h-4 sm:h-4.5 md:h-5 my-3 sm:my-4 md:my-6 mx-1 sm:mx-1.5 md:mx-2" /></div>
            <div><img src="/images/9.jpg" alt="Scaling Framework" class="h-4 sm:h-4.5 md:h-5 my-3 sm:my-4 md:my-6 mx-1 sm:mx-1.5 md:mx-2" /></div>
            <div><img src="/images/10.jpg" alt="Scaling Framework" class="h-4 sm:h-4.5 md:h-5 my-3 sm:my-4 md:my-6 mx-1 sm:mx-1.5 md:mx-2" /></div>
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
  return `M ${x1},31.68 c ${width/4},-0.88 ${width/2},-2.72 ${x2},-3.52 c ${width/2},-0.8 ${width * 0.76},0 ${x3},0.32 c 3.24,0.064 -2.56,0.912 -2.7,0.96`
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