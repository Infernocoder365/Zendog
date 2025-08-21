<template>
  <section id="contact" class="pb-12 sm:pb-16 md:pb-20 bg-white relative">
    <div
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-[12] aspect-[1600/780] bg-black"
      style="clip-path: url(#section-divider-hero);">
    </div>
    <div class="mx-auto px-4 lg:px-8 max-w-4xl z-[15] relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <!-- Contact Information -->
        <div class="text-white">
          <h2
            class="font-heading text-xl sm:text-2xl md:text-heading-2 leading-tight sm:leading-heading tracking-heading text-primary mb-3 sm:mb-4 md:mb-6">
            <span style="white-space:pre-wrap;">Unlock the gateway to growth
            </span>
          </h2>
          <p class="font-body text-sm sm:text-base text-white mb-4 sm:mb-6 md:mb-8">
            Book a <span class="text-[#FF2E93] font-heading">30-minute call</span> with Zendog Labs to see how we can
            help. Have questions? Leave a comment, and we'll
            follow up by email.
          </p>
        </div>

        <!-- Contact Form -->
        <div class="rounded-lg">
          <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-5 md:space-y-6 mb-5">
            <!-- Email -->
            <div>
              <label for="email"
                class="block font-body text-sm sm:text-normal-text leading-body tracking-body text-white mb-1 sm:mb-2">
                Work email (required)
              </label>
              <input type="email" id="email" v-model="form.email" required
                class="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-form-field font-body text-sm sm:text-normal-text leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="">
            </div>

            <!-- Company -->
            <div>
              <label for="company"
                class="block font-body text-sm sm:text-normal-text leading-body tracking-body text-white mb-1 sm:mb-2">
                How did you hear about us? (required)
              </label>
              <input type="text" id="company" v-model="form.company"
                class="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-form-field font-body text-sm sm:text-normal-text leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="">
            </div>

            <!-- Message -->
            <div>
              <label for="message"
                class="block font-body text-sm sm:text-normal-text leading-body tracking-body text-white mb-1 sm:mb-2">
                what would you like to discuss? (required)
              </label>
              <textarea id="message" v-model="form.message" required rows="4"
                class="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-form-field font-body text-sm sm:text-normal-text leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                placeholder=""></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isSubmitting"
              class="bg-white hover:bg-white/90 text-primary-button font-header-button text-sm sm:text-base md:text-[calc((var(--header-button-font-size)_-_1)_*_1.2vw_+_1rem)] font-semibold leading-header-button tracking-header-button px-4 sm:px-primary-button-padding-x py-auto h-10 sm:h-12 md:h-[53px] rounded-primary-button transition-colors duration-200 w-full sm:w-auto">
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

  // Create mailto link with form data
  const subject = encodeURIComponent(`Contact Form: ${form.value.company}`)
  const body = encodeURIComponent(
    `Message:\n${form.value.message}`
  )
  
  const mailtoLink = `mailto:${form.value.email}?subject=${subject}&body=${body}`
  
  // Open mailto link
  window.location.href = mailtoLink

  // Reset form after a short delay
  setTimeout(() => {
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: ''
    }
    isSubmitting.value = false
  }, 1000)
}
</script>