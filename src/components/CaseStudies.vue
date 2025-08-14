<template>
  <section class="pb-20 flex flex-col justify-center">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center">
        <h2 class="font-heading text-heading-2 leading-heading tracking-heading text-primary mb-4">
          Recent client case studies
        </h2>
        <p class="font-body text-white max-w-4xl mx-auto px-5">
          Our recent engagements span consulting and fractional executive roles for billion-dollar enterprises, startups
          with up to $100M in revenue, and emerging entrepreneurs.
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 max-w-5xl mx-auto">
        <div v-for="study in caseStudies" :key="study.title"
          :class="[`rounded-lg hover:shadow-lg transition-all duration-300`]">
          <img :src="study.logo" :alt="study.title" class="w-full" />
          <p class="font-body text-base leading-body tracking-body text-white">
            {{ study.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="m-auto mt-10">
      <button
        class="bg-white hover:bg-white/90 text-primary-button font-header-button text-[calc((var(--header-button-font-size)_-_1)_*_1.2vw_+_1rem)] font-semibold leading-header-button tracking-header-button px-primary-button-padding-x py-auto h-[53px] rounded-primary-button transition-colors duration-200">
        Load more </button>
    </div>
  </section>
</template>

<script setup>
const caseStudies = [
  {
    title: 'THE OTAKU BOX',
    description: 'Chief Marketing Officer for Global Brand: Increasing Revenue by 30% to $10M',
    logo: '/images/4(2).png'
  },
  {
    title: 'The YAOI BOX',
    description: '$1 Million ARR in First Month: Launching The Yaoi Box, A New Subscription Box',
    logo: '/images/5(2).png'
  },
  {
    title: 'VAMED',
    description: 'VAMED: Defining the 2030 Vision for a $1 Billion Healthcare Company',
    logo: '/images/2(3).png'
  },
  {
    title: 'FUNDEN',
    description: 'VC-In-Residence for Funden, the #1 Fundraising Platform for Startups (Exited)',
    logo: '/images/15.png'
  },
  {
    title: 'CORZA',
    description: 'Corza Medical: Commercial Excellence for $30M+ PE-Backed Company',
    logo: '/images/Upwork-Case-Studies-Thumbnails-1-.png'
  },
  {
    title: 'INTELLIVY',
    description: 'Transforming Intellivy: Go-To-Market Strategy to Scale from $3M to $10M ARR',
    logo: '/images/8.png'
  }
]
</script>