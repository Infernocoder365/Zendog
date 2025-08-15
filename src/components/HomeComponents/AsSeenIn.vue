<template>
  <section class="pb-12 sm:pb-16 md:pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-primary mb-2 sm:mb-3 md:mb-4">
          As seen in
        </h2>
        <p class="text-sm sm:text-base text-white max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8 font-body">
          The team at Zendog Labs has been featured in major media outlets, sharing insights from the trenches on best-in-class growth strategy and market trends.
        </p>
      </div>
      
      <!-- Media Outlet Logos Grid -->
      <div class="gap-4 sm:gap-6 md:gap-8 items-center justify-items-center mx-auto flex flex-wrap justify-center lg:gap-8">
        <div v-for="(src, i) in [
          '/images/1(3).png',
          '/images/Logo+-+FastCompany+%281%29.png',
          '/images/Logo+-+Hubspot.png',
          '/images/Logo+-+Zapier.png',
          '/images/Logo+-+Upwork.png',
          '/images/Logo+-+Big+Think.png',
          '/images/2.png',
          '/images/Logo+-+TechBullion.png',
          '/images/Logo+-+Disrupt.png',
          '/images/Logo+-+AZ+Big+Media.png',
          '/images/1(4).png',
          '/images/Copy+of+Logo+-+oezpa.png',
          '/images/Logo+-+Bulk.ly.png',
          '/images/Logo+-+Beefree.png',
          '/images/Logo+-+Grit+Daily.png'
        ]" :key="i" class="w-20 sm:w-24 md:w-28 h-[40px] sm:h-[50px] md:h-[60px] flex items-center justify-center">
          <img :src="src" class="grayscale hover:grayscale-0 transition-all duration-300 max-h-full max-w-full object-contain" alt="Media Outlet Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
</script>