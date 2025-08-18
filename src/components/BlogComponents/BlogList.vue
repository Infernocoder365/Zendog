<template>
  <section class="bg-black text-white py-12 mx-auto px-4 max-w-6xl">
    <div class="px-4 max-w-4xl">
      <div class="space-y-8">
        <BlogCard v-for="(post, index) in paginatedPosts" :key="index" :post="post" />
      </div>
    </div>
    <div class="flex justify-between mt-10">
      <button @click="prevPage"
        class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="currentPage === 1">
        Previous
      </button>
      <span class="text-white self-center">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage"
        class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import BlogCard from './BlogCard.vue';
import blogPostsData from '../../data/blogPosts.json';

const currentPage = ref(1);
const postsPerPage = 10;
const blogPosts = ref([]);

onMounted(() => {
  // Transform the data to include the new link format
  blogPosts.value = blogPostsData.map((post, index) => ({
    title: post.title,
    category: post.category,
    description: post.description,
    link: `/blog/${post.id || (index + 1)}`,
    id: post.id || (index + 1).toString(),
    originalLink: post.originalLink || post.link,
    author: post.author,
    date: post.date
  }));
});

const totalPages = computed(() => {
  return Math.ceil(blogPosts.value.length / postsPerPage);
});

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return blogPosts.value.slice(startIndex, endIndex);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>