<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-heading text-heading-2 font-heading leading-heading tracking-heading text-black mb-4">
          Frequently Asked Questions
        </h2>
        <p class="font-body text-large-text font-body leading-body tracking-body text-gray-600 max-w-3xl mx-auto">
          Get answers to the most common questions about our services and approach.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-3xl mx-auto space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="border border-gray-200 rounded-lg overflow-hidden"
        >
          <!-- Question -->
          <button 
            @click="toggleFAQ(index)"
            class="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
          >
            <h3 class="font-heading text-heading-4 font-heading leading-heading tracking-heading text-black">
              {{ item.question }}
            </h3>
            <span class="text-2xl text-gray-500 transition-transform duration-200" :class="{ 'rotate-45': openItems[index] }">
              {{ openItems[index] ? '×' : '+' }}
            </span>
          </button>
          
          <!-- Answer -->
          <div 
            v-show="openItems[index]"
            class="px-6 py-4 bg-white border-t border-gray-200"
          >
            <p class="font-body text-normal-text font-body leading-body tracking-body text-gray-600">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openItems = ref({})

const faqItems = [
  {
    question: "What industries do you specialize in?",
    answer: "We work with companies across various industries including SaaS, e-commerce, fintech, healthcare, and manufacturing. Our growth strategies are adaptable to any business model that has potential for scaling."
  },
  {
    question: "How long does it typically take to see results?",
    answer: "Results vary depending on your business model and goals. Most clients see initial improvements within 30-60 days, with significant growth typically occurring within 3-6 months of implementing our strategies."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both startups and established companies. Our approach is tailored to your current stage and growth objectives, whether you're pre-seed or generating millions in revenue."
  },
  {
    question: "What makes your approach different from other consulting firms?",
    answer: "We combine data-driven insights with hands-on execution. Unlike traditional consultants who only provide recommendations, we work alongside your team to implement strategies and ensure successful outcomes."
  },
  {
    question: "Do you offer ongoing support after the initial engagement?",
    answer: "Yes, we offer various ongoing support options including monthly retainers, quarterly reviews, and ad-hoc consulting. We believe in building long-term partnerships for sustained growth."
  },
  {
    question: "How do you measure success in your client relationships?",
    answer: "We establish clear KPIs at the beginning of each engagement, typically focusing on revenue growth, customer acquisition costs, conversion rates, and operational efficiency. We provide regular reporting and adjust strategies based on performance."
  }
]

const toggleFAQ = (index) => {
  openItems.value[index] = !openItems.value[index]
}
</script> 