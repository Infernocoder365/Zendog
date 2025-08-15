<template>
  <section class="bg-black text-white py-16">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          Have questions about our pitch deck services? Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <form @submit.prevent="submitForm" class="bg-gray-900 rounded-lg p-8 shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                class="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your name"
                required
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                class="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your email"
                required
              >
            </div>
          </div>
          
          <div class="mb-6">
            <label for="subject" class="block text-sm font-medium text-gray-400 mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject" 
              class="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Subject"
              required
            >
          </div>
          
          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              rows="5" 
              class="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          
          <div class="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="privacy" 
              v-model="formData.privacyAgreed" 
              class="h-4 w-4 text-green-400 focus:ring-green-400 border-gray-700 rounded"
              required
            >
            <label for="privacy" class="ml-2 block text-sm text-gray-400">
              I agree to the <a href="#" class="text-green-400 hover:underline">Privacy Policy</a>
            </label>
          </div>
          
          <div class="text-center">
            <button 
              type="submit" 
              class="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
              <svg 
                v-if="!isSubmitting" 
                class="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
              <svg 
                v-else 
                class="animate-spin ml-2 h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </div>
          
          <div v-if="formSubmitted" class="mt-4 p-3 bg-green-400 bg-opacity-20 text-green-400 rounded-md text-center">
            Thank you for your message! We'll get back to you soon.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacyAgreed: false
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    
    // Reset form after submission
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
      privacyAgreed: false
    };
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  }, 1500);
};
</script>