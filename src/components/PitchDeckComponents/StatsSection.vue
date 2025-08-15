<template>
  <section class="bg-black text-white py-16">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary">You're in good company</h2>
      </div>


      <!-- Logo Carousel -->
      <div class="relative overflow-x-hidden mx-auto">
        <div class="flex flex-row relative w-full justify-center">
          <div class="inline-flex  max-w-5xl  border-y border-white py-5">
            <div v-for="(logo, index) in [...logos]" :key="`${logo.name}-${index}`"
              class="mx-[3px] sm:mx-[4px] md:mx-[5px] w-20 sm:w-24 md:w-32 max-h-12 sm:max-h-16 md:max-h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img :src="logo.src" :alt="logo.name" class="max-w-full max-h-full object-contain">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const logos = [
  { name: 'Funden', src: '/images/deck/Funden++-+white+-+200x100.png' },
  { name: 'SO10.', src: '/images/deck/Solo+-+200x100.png' },
  { name: 'Replayable.', src: '/images/deck/Logo+-+Replayable.png' },
  { name: 'Bird', src: '/images/deck/Bird+-+200x100.png' },
  { name: 'LeadsMarket', src: '/images/deck/LeadsMarket+-+200x100.png' },
  { name: 'datrix', src: '/images/deck/Datrix+-+200x100.png' }
];
</script>

<style scoped></style>