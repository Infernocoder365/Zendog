<template>
  <section class="bg-black text-white py-12 mx-auto px-4 max-w-6xl">
    <div class="px-4 max-w-4xl">
      <div class="space-y-8">
        <BlogCard v-for="(post, index) in paginatedPosts" :key="index" :post="post" />
      </div>
    </div>
    <div class="flex justify-between mt-10">
      <button @click="prevPage"
        class="px-4 py-2 text-white rounded-md flex items-center text-left"
        :disabled="currentPage === 1">
        <div class="pr-[25px]">
            <svg class="w-[18px] h-[32px]" viewBox="0 0 9 16">
              <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2" stroke="white"></polyline>
            </svg>
          </div>
          Newer Posts
      </button>
      <button @click="nextPage"
        class="px-4 py-2 text-white rounded-md flex items-center text-right"
        :disabled="currentPage === totalPages">
        Older Posts
        <div class="pl-[25px]">
            <svg class="w-[18px] h-[32px]" viewBox="0 0 9 16">
              <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7" stroke="white"></polyline>
            </svg>
          </div>
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