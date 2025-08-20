<template>
  <section class="pb-12 sm:pb-16 md:pb-20 flex flex-col justify-center">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 class="font-heading text-xl sm:text-2xl md:text-heading-2 leading-tight sm:leading-heading tracking-heading text-primary mb-2 sm:mb-3 md:mb-4">
          Recent client case studies
        </h2>
        <p class="font-body text-sm sm:text-base text-white max-w-4xl mx-auto px-2 sm:px-3 md:px-5">
          Our recent engagements span consulting and fractional executive roles for billion-dollar enterprises, startups
          with up to $100M in revenue, and emerging entrepreneurs.
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        <router-link v-for="study in displayedCaseStudies" :key="study.id" :to="`/case-studies/${study.id}`"
          class="block rounded-lg hover:shadow-lg transition-all duration-300 mb-4 sm:mb-6 cursor-pointer">
          <img :src="study.logo" :alt="study.title" class="w-full" />
          <p class="font-body text-sm sm:text-base leading-snug sm:leading-body tracking-body text-white mt-2 sm:mt-3 px-2 sm:px-0">
            {{ study.title }}
          </p>
        </router-link>
      </div>
    </div>
    <div class="m-auto mt-6 sm:mt-8 md:mt-10">
      <button
        v-if="!showAll"
        @click="showAll = true"
        class="bg-white hover:bg-white/90 text-primary-button font-header-button text-sm sm:text-base md:text-[calc((var(--header-button-font-size)_-_1)_*_1.2vw_+_1rem)] font-semibold leading-header-button tracking-header-button px-4 sm:px-primary-button-padding-x py-auto h-10 sm:h-12 md:h-[53px] rounded-primary-button transition-colors duration-200">
        Load more </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import caseStudiesData from '../../data/caseStudies.json'

const showAll = ref(false)
const displayedCaseStudies = computed(() => showAll.value ? caseStudiesData : caseStudiesData.slice(0, 6))
</script>