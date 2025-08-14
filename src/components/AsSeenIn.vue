<template>
  <section class="pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-heading text-primary mb-4">
          As seen in
        </h2>
        <p class="text-body text-white max-w-3xl mx-auto mt-8 font-body">
          The team at Zendog Labs has been featured in major media outlets, sharing insights from the trenches on best-in-class growth strategy and market trends.
        </p>
      </div>
      
      <!-- Media Outlet Logos Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center lg:flex lg:flex-wrap lg:justify-center lg:gap-8">
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
        ]" :key="i" class="w-28 h-[60px] flex items-center justify-center">
          <img :src="src" class="grayscale hover:grayscale-0 transition-all duration-300" alt="Media Outlet Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
</script>