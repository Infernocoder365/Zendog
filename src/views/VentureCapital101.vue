<template>
  <main class="bg-black py-16 px-4 sm:px-6 md:px-8">
    <div class="container mx-auto max-w-6xl px-10 mt-20">
      <!-- Grid layout for VC article cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <!-- Dynamically generate cards from vcArticles array -->
        <VCArticleCard 
          v-for="article in vcArticles" 
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
// Import necessary components and utilities
import { ref, onMounted } from 'vue';
import vcArticlesData from '../data/vcArticles.json';
import VCArticleCard from '../components/VCComponents/VCArticleCard.vue';

// Define reactive data
const vcArticles = ref([]);

onMounted(() => {
  // Load data from vcArticles.json
  vcArticles.value = vcArticlesData.map(article => ({
    ...article,
    // Ensure the link format is correct
    link: `/venture-capital-101/${article.id}`
  }));
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>