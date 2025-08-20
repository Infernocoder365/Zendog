<template>
  <main class="bg-black text-white min-h-screen py-16 px-4">
    <div class="container mx-auto px-4 py-12 mt-20">
      <div v-if="loading" class="flex justify-center items-center h-64">
        <p class="text-xl">Loading...</p>
      </div>

      <div v-else-if="post" class="max-w-xl mx-auto px-4">

        <div class="text-sm mt-6 mb-10 text-center w-full">
          <span class="mr-2">{{ post.category }}</span>
          <span v-if="post.date" class="mr-2">{{ post.date }}</span>
          <span v-if="post.author">By {{ post.author }}</span>
          <h1 class="text-4xl font-heading leading-tight mb-2 mt-7">{{ post.title }}</h1>
        </div>

        <div class=" max-w-none text-white" v-html="renderedContent"></div>

        <!-- Author section -->
        <div class="mt-8 pt-6">
          <div class="w-full flex items-center justify-center flex-col mx-auto gap-4">
            <div>
              <p class="text-sm font-medium">{{ post.author }}</p>
            </div>
            <div>
              <a class="text-sm font-medium" href="https://zendoglabs.com">https://zendoglabs.com</a>
            </div>
          </div>
        </div>

        <!-- Comment form -->
        <div class="mt-8 pt-6">
          <div class="flex justify-between">
            <h3 class="text-3xl font-heading">Comments (0)</h3>
            <span class="text-sm text-gray-300">Newest First</span>
          </div>

          <div
            class="mt-4 bg-white text-black rounded-md border border-gray-300 min-h-[180px] relative overflow-hidden">
            <textarea
              class="absolute inset-0 w-full h-full resize-none bg-transparent text-black p-4 pr-44 pb-16 outline-none"></textarea>
            <button @click="openCommentForm"
              class="absolute bottom-2 right-2 z-10 px-6 py-4 bg-primary text-black rounded-md shadow text-sm font-heading">
              Post Comment...
            </button>
          </div>
        </div>

      </div>


      <!-- Navigation buttons -->
      <div class="mt-8 pt-6 flex justify-between max-w-6xl">
        <router-link v-if="prevPost" :to="`/blog/${prevPost.id}`" class="flex items-center max-w-[500px] text-2xl">
          <div class="pr-[25px]">
            <svg class="w-[18px] h-[32px]" viewBox="0 0 9 16">
              <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2" stroke="white"></polyline>
            </svg>
          </div>
          {{ prevPost.title }}
        </router-link>
        <div v-else></div>

        <router-link v-if="nextPost" :to="`/blog/${nextPost.id}`" class="flex items-center max-w-[500px] text-2xl text-right">
          {{ nextPost.title }} <div class="pl-[25px]">
            <svg class="w-[18px] h-[32px]" viewBox="0 0 9 16">
              <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7" stroke="white"></polyline>
            </svg>
          </div>
        </router-link>
        <div v-else></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import blogPosts from '../data/blogPosts.json';
import { loadBlogDescriptionWithCache } from '../utils/blogUtils';
import { renderMarkdown } from '../utils/markdownRenderer';

const route = useRoute();
const router = useRouter();
const loading = ref(true);
const post = ref(null);
const commentForm = ref({
  name: '',
  email: '',
  message: ''
});

// Function to load post data based on route ID
const loadPostData = async () => {
  loading.value = true;
  const postId = route.params.id;
  // Ensure string comparison for IDs
  post.value = blogPosts.find(p => String(p.id) === String(postId));

  if (post.value) {
    // Load the blog description from markdown file
    const description = await loadBlogDescriptionWithCache(postId);
    if (description) {
      // Override the description from the JSON with the markdown file content
      post.value = { ...post.value, description };
    }
  }

  loading.value = false;

  // Scroll to top when post changes
  window.scrollTo(0, 0);
};

// Watch for route changes
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      loadPostData();
    }
  }
);

onMounted(() => {
  // Load post data on initial mount
  loadPostData();
});

// Render markdown content with custom renderer
const renderedContent = computed(() => {
  if (!post.value || !post.value.description) return '';
  try {
    return renderMarkdown(post.value.description);
  } catch (error) {
    console.error('Error rendering markdown:', error);
    return post.value.description.toString();
  }
});

// Find previous and next posts
const currentIndex = computed(() => {
  if (!post.value) return -1;
  return blogPosts.findIndex(p => String(p.id) === String(post.value.id));
});

const prevPost = computed(() => {
  if (currentIndex.value <= 0) return null;
  return blogPosts[currentIndex.value - 1];
});

const nextPost = computed(() => {
  if (currentIndex.value === -1 || currentIndex.value >= blogPosts.length - 1) return null;
  return blogPosts[currentIndex.value + 1];
});

// Handle comment form opening
const openCommentForm = () => {
  // In a real application, this would open a modal or expand a form
  alert('Comment form would open here!');
};

// Handle comment submission
const submitComment = () => {
  // In a real application, this would send the comment to a backend API
  console.log('Comment submitted:', commentForm.value);

  // Show success message
  alert('Thank you for your comment!');

  // Reset form
  commentForm.value = {
    name: '',
    email: '',
    message: ''
  };
};
</script>
