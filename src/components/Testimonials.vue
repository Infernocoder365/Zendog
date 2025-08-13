<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-heading text-heading-2 font-heading leading-heading tracking-heading text-black mb-4">
          What Our Clients Say
        </h2>
        <p class="font-body text-large-text font-body leading-body tracking-body text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Testimonial Cards -->
        <div class="flex overflow-hidden">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            :class="[
              'w-full flex-shrink-0 transition-transform duration-500 ease-in-out',
              currentIndex === index ? 'translate-x-0' : 'translate-x-full'
            ]"
          >
            <div class="bg-white p-8 rounded-lg shadow-lg text-center">
              <!-- Stars -->
              <div class="flex justify-center mb-6">
                <span v-for="n in 5" :key="n" class="text-yellow-400 text-2xl">⭐</span>
              </div>
              
              <!-- Quote -->
              <blockquote class="font-body text-large-text font-body leading-body tracking-body text-gray-700 mb-6 italic">
                "{{ testimonial.quote }}"
              </blockquote>
              
              <!-- Author -->
              <div class="flex items-center justify-center">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-emerald-600 font-bold text-lg">{{ testimonial.author.charAt(0) }}</span>
                </div>
                <div class="text-left">
                  <div class="font-heading text-heading-4 font-heading leading-heading tracking-heading text-black">
                    {{ testimonial.author }}
                  </div>
                  <div class="font-body text-normal-text font-body leading-body tracking-body text-gray-500">
                    {{ testimonial.position }}, {{ testimonial.company }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button 
          @click="previousTestimonial"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-emerald-600"
        >
          <span class="text-xl">‹</span>
        </button>
        
        <button 
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-emerald-600"
        >
          <span class="text-xl">›</span>
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            @click="goToTestimonial(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-200',
              currentIndex === index ? 'bg-emerald-600' : 'bg-gray-300 hover:bg-gray-400'
            ]"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const interval = ref(null)

const testimonials = [
  {
    quote: "Working with Zendog Labs transformed our business. Their strategic approach helped us scale from $2M to $15M in just 18 months. The team's expertise in growth marketing and operational optimization was invaluable.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "The Otaku Box"
  },
  {
    quote: "The level of professionalism and results-driven approach exceeded our expectations. They helped us optimize our go-to-market strategy and expand into new European markets successfully.",
    author: "Michael Chen",
    position: "VP of Operations",
    company: "VAMED Healthcare"
  },
  {
    quote: "Zendog Labs played a crucial role in our Series A funding round. Their guidance on investor relations and market positioning helped us secure $25M in funding. Highly recommended!",
    author: "David Rodriguez",
    position: "Founder",
    company: "Funden"
  },
  {
    quote: "Their data-driven approach to marketing optimization helped us increase our conversion rates by 300%. The ROI we've seen from working with them has been exceptional.",
    author: "Lisa Thompson",
    position: "CMO",
    company: "Intellivy"
  },
  {
    quote: "The team's expertise in scaling operations and international expansion was exactly what we needed. They helped us navigate complex markets and achieve sustainable growth.",
    author: "Robert Kim",
    position: "COO",
    company: "Corza Medical"
  }
]

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const previousTestimonial = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}

const goToTestimonial = (index) => {
  currentIndex.value = index
}

const startAutoPlay = () => {
  interval.value = setInterval(nextTestimonial, 5000)
}

const stopAutoPlay = () => {
  if (interval.value) {
    clearInterval(interval.value)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script> 