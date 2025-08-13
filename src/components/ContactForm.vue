<template>
  <section class="py-20 bg-gradient-to-br from-black to-gray-900">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Contact Information -->
          <div class="text-white">
            <h2 class="font-heading text-heading-2 font-heading leading-heading tracking-heading text-white mb-6">
              Ready to Scale Your Business?
            </h2>
            <p class="font-body text-large-text font-body leading-body tracking-body text-gray-300 mb-8">
              Let's discuss how we can help you achieve your growth goals. Get in touch with our team to start your transformation journey.
            </p>
            
            <!-- Contact Details -->
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">📧</span>
                </div>
                <div>
                  <div class="font-heading text-heading-4 font-heading leading-heading tracking-heading text-white">
                    Email Us
                  </div>
                  <div class="font-body text-normal-text font-body leading-body tracking-body text-gray-300">
                    hello@zendoglabs.com
                  </div>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">📞</span>
                </div>
                <div>
                  <div class="font-heading text-heading-4 font-heading leading-heading tracking-heading text-white">
                    Call Us
                  </div>
                  <div class="font-body text-normal-text font-body leading-body tracking-body text-gray-300">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-lg shadow-xl">
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block font-body text-normal-text font-body leading-body tracking-body text-black mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    v-model="form.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block font-body text-normal-text font-body leading-body tracking-body text-black mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  >
                </div>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block font-body text-normal-text font-body leading-body tracking-body text-black mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter your email address"
                >
              </div>

              <!-- Company -->
              <div>
                <label for="company" class="block font-body text-normal-text font-body leading-body tracking-body text-black mb-2">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="company"
                  v-model="form.company"
                  class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter your company name"
                >
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block font-body text-normal-text font-body leading-body tracking-body text-black mb-2">
                  How can we help? *
                </label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-form-field font-body text-normal-text font-body leading-body tracking-body text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your business and growth goals..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-400 text-white font-primary-button text-primary-button font-primary-button leading-primary-button tracking-primary-button px-primary-button-padding-x py-primary-button-padding-y rounded-primary-button transition-colors duration-200"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
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