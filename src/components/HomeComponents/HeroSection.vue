<template>
  <section
    class="relative pt-[calc(4vw+3rem)] sm:pt-[calc(4vw+3.5rem)] md:pt-[calc(4vw+4rem)] pb-[4vw] sm:pb-[5vw] md:pb-[6vw] min-h-[90vh] sm:min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black">
    <!-- Background Image -->
    <img class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-[12] aspect-[1600/780]"
      src="/images/heroBackground.jpg" alt="Hero Background" style="clip-path: url(#section-divider-hero);">

    <!-- Content -->
    <div
      class="relative z-[14] w-full text-text-primary grid col-[1/-1] row-[1/-1] [--grid-gutter:calc(5vw_-_5.0px)] sm:[--grid-gutter:calc(7vw_-_5.0px)] md:[--grid-gutter:calc(10vw_-_5.0px)] [--container-width:min(1900px,calc(100vw_-_5vw_*_2_-_0vw))] sm:[--container-width:min(1900px,calc(100vw_-_7vw_*_2_-_0vw))] md:[--container-width:min(1900px,calc(100vw_-_10vw_*_2_-_0vw))] [--cell-max-width:calc((1900px_-_(5.0px_*_(24_-_1)))_/_24)] grid-rows-[repeat(16,minmax(calc(var(--container-width)_*_0.0215),auto))] grid-cols-[minmax(var(--grid-gutter),1fr)_repeat(24,minmax(0,var(--cell-max-width)))_minmax(var(--grid-gutter),1fr)] gap-[5px]">
      <div class="max-w-4xl row-[2/7] col-[2/25] sm:col-[2/20] md:col-[2/12] z-0">
        <!-- Main Headline -->
        <h1 class="text-2xl sm:text-3xl md:text-heading-1 font-[800] leading-tight sm:leading-heading tracking-heading mb-4 sm:mb-6 md:mb-8">
          <span class="text-text-primary text-white">Building and executing</span>
          <span class="text-primary"> winning growth strategies</span>
        </h1>
      </div>

      <div class="max-w-4xl row-[7/13] col-[2/25] sm:col-[2/20] md:col-[2/16] z-0">
        <!-- Description -->
        <p class="font-body text-sm sm:text-base md:text-lg leading-relaxed sm:leading-body tracking-body mb-6 sm:mb-8 md:mb-12 max-w-3xl text-text-secondary" style="white-space: pre-wrap;">
          We've operated, advised, and invested in companies that scaled to $150M in revenue, raised over $3B from
          top-tier investors, and went public on the NYSE and NASDAQ. Today, we partner with leaders at tech and e-comm
          companies in the US, Europe, and Asia to fast-track revenue to $100M+.
        </p>
      </div>
      <div class="max-w-4xl row-[12/14] col-[2/25] sm:col-[2/10] md:col-[2/8] z-0">
        <button
          @click="goToContact"
          class="w-full h-full bg-primary hover:bg-primary/90 text-primary-button font-primary-button text-sm sm:text-base font-semibold leading-primary-button tracking-primary-button px-4 sm:px-primary-button-padding-x py-3 sm:py-0 rounded-primary-button transition-colors duration-200 flex items-center justify-center">
          Learn more
        </button>
      </div>
      <div class="hidden md:block row-[15/16] col-[2/4]">
        <img src="/images/hero_trustpilot.png" alt="Trustpilot" class="h-6 sm:h-8 md:h-auto w-auto object-contain">
      </div>
      <div class="hidden md:block row-[15/16] col-[4/6]">
        <img src="/images/hero_clutch.png" alt="Clutch" class="h-auto w-auto">
      </div>
      <div class="hidden md:block row-[15/16] col-[6/8]">
        <img src="/images/hero_google.png" alt="Google" class="h-auto w-auto">
      </div>
      <div class="hidden md:block row-[15/16] col-[8/10]">
        <img src="/images/hero_upwork.png" alt="Upwork" class="h-auto w-auto">
      </div>
      <!-- Mobile/Tablet logos (except Trustpilot which is shown above) -->
      <div class="flex flex-wrap justify-start sm:gap-6 row-[16/17] col-[2/25] sm:col-[2/20] md:hidden">
        <img src="/images/hero_trustpilot.png" alt="Trustpilot" class="sm:h-8 md:h-auto w-1/4 object-contain">
        <img src="/images/hero_clutch.png" alt="Clutch" class="sm:h-8 w-1/4 object-contain">
        <img src="/images/hero_google.png" alt="Google" class="sm:h-8 w-1/4 object-contain">
        <img src="/images/hero_upwork.png" alt="Upwork" class="sm:h-8 w-1/4 object-contain">
      </div>
    </div>

    <!-- Clip Path SVG -->
    <svg class="absolute bottom-0 left-0 w-full h-32 z-[16]" style="display: block;">
      <clipPath id="section-divider-hero" clipPathUnits="objectBoundingBox">
        <path class="section-divider-clip"
          d="M-1, 0.892 L-1, 1 l0,0 l1,-0.108 l0,0.108l0,0 l1,-0.108 l0,0.108l0,0 l1,-0.108 l0,0.108 L2, -1 L-1, -1 z">
        </path>
      </clipPath>
    </svg>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goToContact = () => {
  if (route.path === '/') {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    router.push({ path: '/', hash: '#contact' })
  }
}
</script>