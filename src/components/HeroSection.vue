<template>
  <section
    class="relative pt-[calc(4vw+4rem)] pb-[6vw] min-h-screen flex items-center justify-center overflow-hidden bg-black">
    <!-- Background Image -->
    <img class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-[12] aspect-[1600/780]"
      src="/images/heroBackground.jpg" alt="Hero Background" style="clip-path: url(#section-divider-hero);">

    <!-- Content -->
    <div
      class="relative z-[14] w-full text-text-primary grid col-[1/-1] row-[1/-1] [--grid-gutter:calc(10vw_-_5.0px)] [--container-width:min(1900px,calc(100vw_-_10vw_*_2_-_0vw))] [--cell-max-width:calc((1900px_-_(5.0px_*_(24_-_1)))_/_24)] grid-rows-[repeat(16,minmax(calc(var(--container-width)_*_0.0215),auto))] grid-cols-[minmax(var(--grid-gutter),1fr)_repeat(24,minmax(0,var(--cell-max-width)))_minmax(var(--grid-gutter),1fr)] gap-[5px]">
      <div class="max-w-4xl row-[2/7] col-[2/12] z-0">
        <!-- Main Headline -->
        <h1 class="text-heading-1 font-[800] leading-heading tracking-heading mb-8">
          <span class="text-text-primary text-white">Building and executing</span>
          <span class="text-primary"> winning growth strategies</span>
        </h1>
      </div>

      <div class="max-w-4xl row-[7/13]  col-[2/16] z-0">
        <!-- Description -->
        <p class="font-body text-lg leading-body tracking-body mb-12 max-w-3xl text-text-secondary" style="white-space: pre-wrap;">
          We’ve operated, advised, and invested in companies that scaled to $150M in revenue, raised over $3B from
          top-tier investors, and went public on the NYSE and NASDAQ. Today, we partner with leaders at tech and e-comm
          companies in the US, Europe, and Asia to fast-track revenue to $100M+.
        </p>
      </div>
      <div class="max-w-4xl row-[12/14]  col-[2/8] z-0">
        <div
          class="w-full h-full bg-primary hover:bg-primary/90 text-primary-button font-primary-button text-base font-semibold leading-primary-button tracking-primary-button px-primary-button-padding-x py-0 rounded-primary-button transition-colors duration-200 flex items-center justify-center">
          Learn more
        </div>
      </div>
      <div class="row-[15/16] col-[2/4]">
        <img src="/images/hero_trustpilot.png" alt="">
      </div>
      <div class="row-[15/16] col-[4/6]">
        <img src="/images/hero_clutch.png" alt="">
      </div>
      <div class="row-[15/16] col-[6/8]">
        <img src="/images/hero_google.png" alt="">
      </div>
      <div class="row-[15/16] col-[8/10]">
        <img src="/images/hero_upwork.png" alt="">
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
// No additional logic needed for this component
</script>