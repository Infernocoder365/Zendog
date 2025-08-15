<template>
  <section class="bg-black text-white py-16">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <!-- FAQ Item 1 -->
        <div class="mb-6">
          <button 
            @click="toggleFaq(1)" 
            class="w-full flex justify-between items-center bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <span class="text-lg font-semibold">How long does it take to create a pitch deck?</span>
            <svg 
              :class="{'rotate-180': activeFaq === 1}" 
              class="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div 
            v-show="activeFaq === 1" 
            class="bg-gray-800 p-4 rounded-b-lg mt-1"
          >
            <p class="text-gray-400">
              Our standard delivery time is 3-5 business days, depending on the plan you choose. Our Enterprise plan offers priority 48-hour delivery. If you need your pitch deck even faster, please contact us for rush delivery options.
            </p>
          </div>
        </div>
        
        <!-- FAQ Item 2 -->
        <div class="mb-6">
          <button 
            @click="toggleFaq(2)" 
            class="w-full flex justify-between items-center bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <span class="text-lg font-semibold">What information do I need to provide?</span>
            <svg 
              :class="{'rotate-180': activeFaq === 2}" 
              class="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div 
            v-show="activeFaq === 2" 
            class="bg-gray-800 p-4 rounded-b-lg mt-1"
          >
            <p class="text-gray-400">
              After signing up, you'll receive a detailed questionnaire covering your business model, target market, competitive landscape, team, financials, and funding goals. The more information you provide, the better we can tailor your pitch deck to your specific needs.
            </p>
          </div>
        </div>
        
        <!-- FAQ Item 3 -->
        <div class="mb-6">
          <button 
            @click="toggleFaq(3)" 
            class="w-full flex justify-between items-center bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <span class="text-lg font-semibold">What file formats will I receive?</span>
            <svg 
              :class="{'rotate-180': activeFaq === 3}" 
              class="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div 
            v-show="activeFaq === 3" 
            class="bg-gray-800 p-4 rounded-b-lg mt-1"
          >
            <p class="text-gray-400">
              Depending on your plan, you'll receive your pitch deck in PowerPoint, PDF, and Keynote formats. Our Pro and Enterprise plans include all file formats, making it easy to present your pitch deck on any device or platform.
            </p>
          </div>
        </div>
        
        <!-- FAQ Item 4 -->
        <div class="mb-6">
          <button 
            @click="toggleFaq(4)" 
            class="w-full flex justify-between items-center bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <span class="text-lg font-semibold">How many revisions are included?</span>
            <svg 
              :class="{'rotate-180': activeFaq === 4}" 
              class="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div 
            v-show="activeFaq === 4" 
            class="bg-gray-800 p-4 rounded-b-lg mt-1"
          >
            <p class="text-gray-400">
              The Starter Plan includes 1 revision round, the Pro Plan includes 3 revision rounds, and the Enterprise Plan includes unlimited revisions. We want to ensure you're completely satisfied with your pitch deck.
            </p>
          </div>
        </div>
        
        <!-- FAQ Item 5 -->
        <div class="mb-6">
          <button 
            @click="toggleFaq(5)" 
            class="w-full flex justify-between items-center bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <span class="text-lg font-semibold">Do you offer refunds?</span>
            <svg 
              :class="{'rotate-180': activeFaq === 5}" 
              class="w-5 h-5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div 
            v-show="activeFaq === 5" 
            class="bg-gray-800 p-4 rounded-b-lg mt-1"
          >
            <p class="text-gray-400">
              We offer a 100% satisfaction guarantee. If you're not completely satisfied with your pitch deck, we'll work with you to make it right. If we still can't meet your expectations, we'll provide a full refund within 14 days of delivery.
            </p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <div class="bg-gray-900 inline-flex items-center p-4 rounded-lg">
          <span class="mr-4">Ready to create a winning pitch?</span>
          <button class="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded-md transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeFaq = ref(null);

function toggleFaq(index) {
  activeFaq.value = activeFaq.value === index ? null : index;
}
</script>