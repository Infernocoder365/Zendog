<template>
  <section class="pb-20 bg-white relative">
    <div class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-[12] aspect-[1600/780] bg-black"
      style="clip-path: url(#section-divider-hero);">
</div>
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl z-[15] relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Information -->
        <div class="text-white">
          <h2 class="font-heading text-heading-2 leading-heading tracking-heading text-primary mb-6">
            <span style="white-space:pre-wrap;">Unlock the gateway to growth
          </span></h2>
          <p class="font-body text-base text-white mb-8">
            Book a <span class="text-[#FF2E93] font-heading">30-minute call</span> with Zendog Labs to see how we can help. Have questions? Leave a comment, and we'll
            follow up by email.
          </p>
        </div>

        <!-- Contact Form -->
        <div class="rounded-lg shadow-xl">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Email -->
            <div>
              <label for="email" class="block font-body text-normal-text leading-body tracking-body text-white mb-2">
                Work email (required)
              </label>
              <input type="email" id="email" v-model="form.email" required
                class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="">
            </div>

            <!-- Company -->
            <div>
              <label for="company"
                class="block font-body text-normal-text font-body leading-body tracking-body text-white mb-2">
                How did you hear about us? (required)
              </label>
              <input type="text" id="company" v-model="form.company"
                class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="">
            </div>

            <!-- Message -->
            <div>
              <label for="message"
                class="block font-body text-normal-text font-body leading-body tracking-body text-white mb-2">
                what would you like to discuss? (required)
              </label>
              <textarea id="message" v-model="form.message" required rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                placeholder=""></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isSubmitting"
              class="bg-white hover:bg-white/90 text-primary-button font-header-button text-[calc((var(--header-button-font-size)_-_1)_*_1.2vw_+_1rem)] font-semibold leading-header-button tracking-header-button px-primary-button-padding-x py-auto h-[53px] rounded-primary-button transition-colors duration-200">
              {{ isSubmitting ? 'Sending...' : 'Learn more' }}
            </button>
          </form>
        </div>
      </div>
    </div>
    
    <!-- Clip Path SVG -->
    <svg class="absolute bottom-0 left-0 w-full h-32 z-[16]" style="display: block;">
      <clipPath id="section-divider-hero" clipPathUnits="objectBoundingBox">
        <path class="section-divider-clip"
          d="M-1, 0.892 L-1, 1 l0,0 l1,-0.108 l0,0.108l0,0 l1,-0.108 l0,0.108l0,0 l1,-0.108 l0,0.108 L2, -1 L-1, -1 z">
        </path>
      </clipPath>
    </svg>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  }

  isSubmitting.value = false

  // Show success message (you can implement this as needed)
  alert('Thank you for your message! We\'ll get back to you soon.')
}
</script>