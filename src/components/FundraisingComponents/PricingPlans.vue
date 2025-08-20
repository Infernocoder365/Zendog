<template>
  <section class="bg-black text-white py-12">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary">Here’s the full breakdown of our plans</h2>
        <p class="text-white max-w-4xl mx-auto">
          Schedule a free call with our team to discuss your situation and explore our fundraising training plans.
        </p>
      </div>
      <div class="flex justify-center items-center space-x-4">
        <button
          @click="selectedDeckStatus = 'ready'"
          :class="[selectedDeckStatus === 'ready' ? 'bg-[rgba(0,230,179,0.1)] text-primary border-primary' : 'bg-transparent text-gray-400 border-gray-400', 'px-4 py-2 rounded-md border transition-colors duration-200']"
          class="cursor-pointer"
        >
          My deck is ready
        </button>
        <button
          @click="selectedDeckStatus = 'in-progress'"
          :class="[selectedDeckStatus === 'in-progress' ? 'bg-[rgba(0,230,179,0.1)] text-primary border-primary' : 'bg-transparent text-gray-400 border-gray-400', 'px-4 py-2 rounded-md border transition-colors duration-200']"
          class="cursor-pointer"
        >
          My deck is in progress
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="(plan, index) in pricingPlans" :key="index"
          class="bg-white rounded-lg p-8 transition duration-300 relative"
          :class="{ 'my-10': !plan.isPopular, 'my-4  py-14': plan.isPopular }">
          <!-- Most Popular Ribbon -->
          <div class="absolute w-full h-[120px] top-0 left-0 overflow-hidden">
            <div v-if="plan.isPopular"
              class="bg-primary text-white absolute block top-[18px] -right-[30px] w-[128px] py-2 px-5 m-0 transform rotate-45 h-8 z-10 overflow-hidden whitespace-nowrap text-ellipsis box-border font-base text-xs text-center">
              Most Popular
            </div>
          </div>
          <div class="text-center mb-6 text-black">
            <h3 class="text-lg font-heading mb-2">{{ plan.title }}</h3>
            <div class="text-xs font-body mb-2 pb-8">{{ plan.description }}</div>

            <div class="text-center">
              <router-link :to="{ name: 'home', hash: '#contact' }"
                class="inline-block bg-primary hover:bg-primary/90 text-white py-1 px-5 rounded-md transition duration-300 text-sm">
                CONTACT US
              </router-link>
            </div>
          </div>

          <ul class="space-y-4 mb-8 text-black">
            <li v-for="(detail, detailIndex) in plan.detail" :key="detailIndex" class="flex items-center">
              <!-- Check or X icon based on isAble -->
              <svg v-if="detail.isAble" class="w-[16px] h-[16px] text-primary" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 14 14" xml:space="preserve" fill="currentColor">
                <g>
                  <path
                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7S3.8,1.3,7,1.3s5.7,2.6,5.7,5.7 S10.2,12.7,7,12.7z">
                  </path>
                  <path
                    d="M9.6,4.5L6,8.1L4.4,6.5c-0.2-0.2-0.7-0.2-0.9,0c-0.2,0.2-0.2,0.7,0,0.9l2.1,2.1C5.7,9.6,5.9,9.7,6,9.7h0 c0.2,0,0.3-0.1,0.4-0.2l4-4c0.2-0.2,0.2-0.7,0-0.9C10.3,4.3,9.9,4.3,9.6,4.5z">
                  </path>
                </g>
              </svg>
              <svg v-else class="w-[16px] h-[16px] text-primary" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 14" fill="CurrentColor"
                xml:space="preserve">
                <path
                  d="M11.7,2.3c-0.3-0.3-0.7-0.3-0.9,0L7,6.1L3.2,2.3C2.9,2,2.5,2,2.3,2.3S2,2.9,2.3,3.2L6.1,7l-3.8,3.8c-0.3,0.3-0.3,0.7,0,0.9 c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2L7,7.9l3.8,3.8c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2 c0.3-0.3,0.3-0.7,0-0.9L7.9,7l3.8-3.8C12,2.9,12,2.5,11.7,2.3z">
                </path>
              </svg>

              <span class="ml-2 text-xs font-body">{{ detail.title }}</span>

              <!-- Tooltip for items with tip -->
              <div v-if="detail.tip" class="relative ml-2 group">
                <svg class="w-[16px] h-[16px] text-gray-400 cursor-help" viewBox="0 0 14 14">
                  <g>
                    <path
                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                      fill="currentColor"></path>
                    <path
                      d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"
                      fill="currentColor"></path>
                    <path
                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                      fill="currentColor"></path>
                  </g>
                </svg>
                <div
                  class="absolute left-[-50px] bottom-full w-[280px] bg-gray-800 text-white text-center text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  {{ detail.tip }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const selectedDeckStatus = ref('ready');

const pricingPlans = ref([
  {
    title: 'Health Check',
    description: 'Unlock the funding you need with our pitch deck and live pitch review.',
    isPopular: true,
    detail: [
      {
        title: 'Money-back guarantee',
        isAble: true,
        tip: `We're confident in our ability to deliver results. That's why we offer a money-back guarantee. If, for any reason, you don't have a significantly improved understanding of what investors look for in startups after working with us, we'll refund your money without any questions or hassle.`
      },
      {
        title: 'Pitch deck review',
        isAble: true,
        tip: 'Get detailed strategic and tactical feedback regarding your deck and investment case in writing and on a recorded video from a VC.'
      },
      {
        title: 'Live pitch simulation',
        isAble: true,
        tip: 'Get a simulated pitch with a VC that comes as close to the real thing as possible and gives you invaluable feedback about your pitch deck, pitch delivery, and investment case.'
      },
      {
        title: 'Revision of updates',
        isAble: true,
        tip: 'Get a second review of your new deck once you updated it.'
      },
      {
        title: 'Pitch deck benchmarking',
        isAble: true
      },
      {
        title: 'Fast 1 Day Delivery',
        isAble: false,
        tip: 'Get your pitch deck review in less than 24 hours from the time you send us your deck.'
      },
      {
        title: 'Strategy call (1 hour)',
        isAble: false,
        tip: 'Discuss questions such as when and how much to raise, how to value your start-up, how the due diligence process works, how to select the right investors, how long it takes to secure funding, how to size your target market, and more.'
      },
      {
        title: 'Ongoing support (2 hours)',
        isAble: false,
        tip: 'Get professional help for fundraising questions via email, chat, or calls.'
      },
      {
        title: 'Custom elevator pitch',
        isAble: false
      },
      {
        title: 'Data room review',
        isAble: false
      },
    ]
  },
  {
    title: 'Premium Plan',
    description: 'Unlock the funding you need with a plan that lets you get it right the first time.',
    isPopular: false,
    detail: [
      {
        title: 'Money-back guarantee',
        isAble: true,
        tip: `We're confident in our ability to deliver results. That's why we offer a money-back guarantee. If, for any reason, you don't have a significantly improved understanding of what investors look for in startups after working with us, we'll refund your money without any questions or hassle.`
      },
      {
        title: 'Pitch deck review',
        isAble: true,
        tip: 'Get detailed strategic and tactical feedback regarding your deck and investment case in writing and on a recorded video from a VC.'
      },
      {
        title: 'Live pitch simulation',
        isAble: true,
        tip: 'Get a simulated pitch with a VC that comes as close to the real thing as possible and gives you invaluable feedback about your pitch deck, pitch delivery, and investment case.'
      },
      {
        title: 'Revision of updates',
        isAble: true,
        tip: 'Get a second review of your new deck once you updated it.'
      },
      {
        title: 'Pitch deck benchmarking',
        isAble: true
      },
      {
        title: 'Fast 1 Day Delivery',
        isAble: true,
        tip: 'Get your pitch deck review in less than 24 hours from the time you send us your deck.'
      },
      {
        title: 'Strategy call (1 hour)',
        isAble: true,
        tip: 'Discuss questions such as when and how much to raise, how to value your start-up, how the due diligence process works, how to select the right investors, how long it takes to secure funding, how to size your target market, and more.'
      },
      {
        title: 'Ongoing support (2 hours)',
        isAble: true,
        tip: 'Get professional help for fundraising questions via email, chat, or calls.'
      },
      {
        title: 'Custom elevator pitch',
        isAble: true
      },
      {
        title: 'Data room review',
        isAble: true
      },
    ]
  },
  {
    title: 'Custom Plan',
    description: 'Unlock the best fundraising strategy and execution money can buy you.',
    isPopular: false,
    detail: [
      {
        title: 'More support hours',
        isAble: true,
        tip: 'Book additional support hours. Note that the "deep dive" plan comes with 2 support hours.'
      },
      {
        title: 'Pitch deck co-creation',
        isAble: true
      },
      {
        title: 'Full pitch deck creation',
        isAble: true
      },
      {
        title: 'Bottom-up market sizing',
        isAble: true
      },
      {
        title: 'One-pager',
        isAble: true
      },
      {
        title: 'Financial model',
        isAble: true
      },
      {
        title: 'Cap table',
        isAble: true
      },
      {
        title: 'Valuation report',
        isAble: true
      },
      {
        title: 'Investor outreach',
        isAble: true
      },
    ]
  }
]);

// No additional logic needed for this component
</script>