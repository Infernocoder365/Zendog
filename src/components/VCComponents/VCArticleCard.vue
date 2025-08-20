<template>
  <article class="bg-black text-white text-center p-6 flex flex-col justify-between min-h-[300px] cursor-pointer"
    @click="navigateToArticle">
    <div class="text-white">
      <img v-if="article.logoImage" :src="article.logoImage" :alt="`${article.title} logo`"
        class="max-h-full w-full object-contain" />
      <p class="text-md my-4 text-gray-300">By {{ article.owner }} | {{ formatDate(article.date) }}</p>
      <h3 class="text-xl md:text-2xl font-heading mb-4">{{ article.title }}</h3>
    </div>
    <div>
      <span
        class="text-sm border-b border-white inline-block text-white hover:text-blue-300 transition-colors duration-300">
        Read More
      </span>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      title: '',
      owner: '',
      date: '',
      logoImage: '',
      description: ''
    })
  }
});

const router = useRouter();

const navigateToArticle = () => {
  router.push(`/venture-capital-101/${props.article.id}`);
};

/**
 * Format date string to a more readable format
 * @param {string} dateString - The date string to format
 * @returns {string} - The formatted date
 */
const formatDate = (dateString) => {
  if (!dateString) return '';

  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Return original string if formatting fails
  }
};
</script>

<style scoped>
.logo-container {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

article {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

article:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>