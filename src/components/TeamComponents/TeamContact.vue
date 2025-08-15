<template>
  <section id="contact" class="pb-12 sm:pb-16 md:pb-20 bg-white relative">
    <div
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-[12] aspect-[1600/780] bg-black"
      style="clip-path: url(#section-divider-hero);">
    </div>
    <div
      class="mx-auto max-w-3xl z-[15] relative bg-white rounded-xl p-12 drop-shadow-[5px_5px_5px_rgba(255,46,147,1)] border hover:shadow-lg transition-all duration-300 flex flex-row justify-between items-center gap-x-8 h-40 text-[#FF2E93]"
    >
      <h2
        class="grow basis-0 min-w-0 text-left text-xl sm:text-2xl md:text-3xl font-heading tracking-heading text-black mb-0 font-[800] flex items-center basis-[70%]">
        <span class="text-sm sm:text-heading-4 text-black font-heading leading-[1.8]">
          Book your <span class="text-[#FF2E93] font-heading">30-minute strategy call</span> now.
        </span>
      </h2>
      <div class="grow basis-0 min-w-0 flex items-center h-full basis-[30%]">
        <button type="submit" :disabled="isSubmitting"
          class="bg-[#FF2E93] hover:bg-[#FF2E93]/90 text-white font-header-button text-body leading-header-button tracking-header-button px-4 sm:px-primary-button-padding-x w-full h-full transition-colors duration-200">
          Learn more
        </button>
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
</script>