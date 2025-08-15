<template>
  <section class="bg-black text-white py-12">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary">Here's the full breakdown of our plans</h2>
        <p class="text-white max-w-4xl mx-auto">
          Schedule a free call with our team to discuss your situation and explore our pitch deck creation plans.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="index"
          class="bg-white rounded-lg p-8 transition duration-300 relative"
          :class="{ 'my-10': !plan.isPopular, 'my-4  py-14': plan.isPopular }"
        >
          <!-- Most Popular Ribbon -->
           <div class="absolute w-full h-[120px] top-0 left-0 overflow-hidden">
             <div 
               v-if="plan.isPopular" 
               class="bg-primary text-white absolute block top-[18px] -right-[30px] w-[128px] py-2 px-5 m-0 transform rotate-45 h-8 z-10 overflow-hidden whitespace-nowrap text-ellipsis box-border font-base text-xs text-center"
             >
               Most Popular
             </div>
           </div>
          <div class="text-center mb-6 text-black">
            <h3 class="text-lg font-heading mb-2">{{ plan.title }}</h3>
            <div class="text-sm font-body mb-2 pb-8">{{ plan.description }}</div>

            <div class="text-center">
              <button
                class="bg-primary hover:bg-primary/90 text-white py-1 px-5 rounded-md transition duration-300 text-sm">
                CONTACT US
              </button>
            </div>
          </div>

          <ul class="space-y-4 mb-8 text-black">
            <li 
              v-for="(detail, detailIndex) in plan.detail" 
              :key="detailIndex"
              class="flex items-center"
            >
              <!-- Check or X icon based on isAble -->
              <svg 
                v-if="detail.isAble" 
                class="w-[16px] h-[16px] text-primary" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px" 
                viewBox="0 0 14 14" 
                xml:space="preserve"
                fill="currentColor"
              >
                <g>
                  <path
                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7S3.8,1.3,7,1.3s5.7,2.6,5.7,5.7 S10.2,12.7,7,12.7z">
                  </path>
                  <path
                    d="M9.6,4.5L6,8.1L4.4,6.5c-0.2-0.2-0.7-0.2-0.9,0c-0.2,0.2-0.2,0.7,0,0.9l2.1,2.1C5.7,9.6,5.9,9.7,6,9.7h0 c0.2,0,0.3-0.1,0.4-0.2l4-4c0.2-0.2,0.2-0.7,0-0.9C10.3,4.3,9.9,4.3,9.6,4.5z">
                  </path>
                </g>
              </svg>
              <svg 
                v-else 
                class="w-[16px] h-[16px] text-primary" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px" 
                viewBox="0 0 14 14" 
                fill="CurrentColor"
                xml:space="preserve"
              >
                <path
                  d="M11.7,2.3c-0.3-0.3-0.7-0.3-0.9,0L7,6.1L3.2,2.3C2.9,2,2.5,2,2.3,2.3S2,2.9,2.3,3.2L6.1,7l-3.8,3.8c-0.3,0.3-0.3,0.7,0,0.9 c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2L7,7.9l3.8,3.8c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2 c0.3-0.3,0.3-0.7,0-0.9L7.9,7l3.8-3.8C12,2.9,12,2.5,11.7,2.3z">
                </path>
              </svg>
              
              <span class="ml-2 text-xs font-body">{{ detail.title }}</span>
              
              <!-- Tooltip for items with tip -->
              <div v-if="detail.tip" class="relative ml-2 group">
                <svg 
                  class="w-[16px] h-[16px] text-gray-400 cursor-help" 
                  viewBox="0 0 14 14"
                >
                  <g>
                    <path 
                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <div class="absolute left-[-50px] bottom-full w-[280px] bg-gray-800 text-white text-center text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
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

const pricingPlans = ref([
  {
    title: 'Starter Plan',
    description: 'Unlock funding with our cost-effective pitch deck plan.',
    isPopular: false,
    detail: [
      {
        title: 'Pitch deck survey',
        isAble: true,
        tip: 'Proven survey with questions that uncover key insights about your vision, product, traction, team, and funding ask - the main start-up features investors care about.'
      },
      {
        title: 'Onboarding call (30m)',
        isAble: true,
        tip: 'Call with your Fundraising Strategist (minus Rafael, our Founder & CEO). Review the next steps and confirm survey responses.'
      },
      {
        title: 'Content synthesis',
        isAble: true,
        tip: 'We create a skeleton pitch deck based on your survey responses and notes from your onboarding call.'
      },
      {
        title: 'Pitch deck design',
        isAble: true,
        tip: 'We transition your skeleton pitch deck to PowerPoint and work with our designers on creating a stunning deck.'
      },
      {
        title: 'Hand-over email',
        isAble: true,
        tip: 'We share your new pitch deck via email. No hand-over call.'
      },
      {
        title: 'Pitch deck review',
        isAble: false,
        tip: 'We review your old pitch deck or business plan (if available) to audit what you’ve messaged thus far and keep the good things.'
      },
      {
        title: 'Content workshop (2h)',
        isAble: false,
        tip: 'Workshop with your Fundraising Strategist to refine your pitch deck skeleton, discuss feedback, and strategize about areas for improvement. This collaborative session is critical to ensure alignment, making the Expert Plan the recommended plan for start-ups that can afford it.'
      },
      {
        title: '“Homework” advice',
        isAble: false,
        tip: 'Get personalized guidance from our Fundraising Strategist on any homework coming out of the content workshop.'
      }
    ]
  },
  {
    title: 'Expert Plan',
    description: 'Get the best pitch deck and advice to raise venture capital.',
    isPopular: true,
    detail: [
      {
        title: 'Onboarding call (1h)',
        isAble: true,
        tip: 'Kick-off call with Rafael, our Founder & CEO, and your Fundraising Strategist. Review the next steps and start collecting information'
      },
      {
        title: 'Pitch deck survey',
        isAble: true,
        tip: 'Proven survey with questions that uncover key insights about your vision, product, traction, team, and funding ask - the main start-up features investors care about.'
      },
      {
        title: 'Pitch deck review',
        isAble: true,
        tip: 'We review your old pitch deck or business plan (if available) to audit what you’ve messaged thus far and keep the good things.'
      },
      {
        title: 'Content synthesis',
        isAble: true,
        tip: 'We create a skeleton pitch deck based on take-aways from our onboarding call, your pitch deck survey responses, and notes from the review of your old pitch deck.'
      },
      {
        title: 'Content workshop (2h)',
        isAble: true,
        tip: 'Workshop with your Fundraising Strategist to refine your pitch deck skeleton, discuss feedback, and strategize about areas for improvement. This collaborative session is critical to ensure alignment, making the Expert Plan the recommended plan for start-ups that can afford it.'
      },
      {
        title: '“Homework” advice',
        isAble: true,
        tip: 'Get personalized guidance from our Fundraising Strategist on any homework coming out of the content workshop.'
      },
      {
        title: 'Pitch deck design',
        isAble: true,
        tip: 'We transition your skeleton pitch deck to PowerPoint and work with our designers on creating a stunning deck.'
      },
      {
        title: 'Hand-over call (1h)',
        isAble: true,
        tip: 'We present your new pitch deck and share tips and tricks about how to best pitch your new deck to prospective investors.'
      },
      
    ]
  },
  {
    title: 'Enterprise Plan',
    description: 'The ultimate pitch deck solution for maximum impact.',
    isPopular: false,
    detail: [
      {
        title: 'Fast pitch deck delivery',
        isAble: true},
      {
        title: 'Live pitch simulation',
        isAble: true,
        tip: 'Get a simulated pitch with a VC that comes as close to the real thing as possible and gives you invaluable feedback about your pitch delivery and investment case.'
      },
      {
        title: 'Custom elevator pitch',
        isAble: true
      },
      {
        title: 'Custom investor list',
        isAble: true
      },
      {
        title: 'Data room review',
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
        title: 'Investor outreach',
        isAble: true
      },
      
    ]
  }
]);

// No additional logic needed for this component
</script>