<template>
  <main class="bg-black text-white min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <div v-if="loading" class="flex justify-center items-center h-64">
        <p class="text-xl">Loading...</p>
      </div>
      
      <div v-else-if="post" class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-heading leading-tight mb-2">{{ post.title }}</h1>
        
        <div class="text-white text-lg mt-6 mb-4 flex flex-wrap items-center">
          <span class="mr-4">{{ post.category }}</span>
          <span v-if="post.author" class="mr-4">By {{ post.author }}</span>
          <span v-if="post.date" class="">{{ post.date }}</span>
        </div>
        
        <div class="prose prose-lg prose-invert max-w-none text-white" v-html="renderedContent"></div>
        
        <div class="mt-8 pt-6 border-t border-gray-700">
          <a 
            :href="post.originalLink" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-white hover:text-gray-300 border-b border-white"
          >
            View original article
          </a>
        </div>
        
        <!-- Author section -->
        <div class="mt-8 pt-6 border-t border-gray-700">
          <h3 class="text-xl font-semibold mb-4">About the Author</h3>
          <div class="flex items-start">
            <div class="mr-4">
              <!-- Placeholder for author avatar -->
              <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                {{ post.author ? post.author.charAt(0) : 'A' }}
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium">{{ post.author }}</h4>
              <p class="text-gray-300 mt-1">Content Writer</p>
            </div>
          </div>
        </div>
        
        <!-- Comment form -->
        <div class="mt-8 pt-6 border-t border-gray-700">
          <h3 class="text-xl font-semibold mb-4">Leave a Comment</h3>
          <form @submit.prevent="submitComment" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="commentForm.name" 
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="commentForm.email" 
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>
            <div>
              <label for="comment" class="block text-sm font-medium mb-1">Comment</label>
              <textarea 
                id="comment" 
                v-model="commentForm.message" 
                rows="4" 
                class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Comment
              </button>
            </div>
          </form>
        </div>
        
        <!-- Navigation buttons -->
        <div class="mt-8 pt-6 border-t border-gray-700 flex justify-between">
          <router-link 
            v-if="prevPost" 
            :to="`/blog/${prevPost.id}`" 
            class="text-white hover:text-gray-300 flex items-center"
          >
            <span class="mr-2">&larr;</span> Previous: {{ prevPost.title.substring(0, 30) }}{{ prevPost.title.length > 30 ? '...' : '' }}
          </router-link>
          <div v-else></div>
          
          <router-link 
            v-if="nextPost" 
            :to="`/blog/${nextPost.id}`" 
            class="text-white hover:text-gray-300 flex items-center"
          >
            Next: {{ nextPost.title.substring(0, 30) }}{{ nextPost.title.length > 30 ? '...' : '' }} <span class="ml-2">&rarr;</span>
          </router-link>
          <div v-else></div>
        </div>
        
        <div class="mt-8">
          <router-link 
            to="/blog" 
            class="text-white border-b border-white hover:text-gray-300"
          >
            &larr; Back to Blog
          </router-link>
        </div>
      </div>
      
      <div v-else class="text-center py-12">
        <p class="text-xl mb-4">Post not found</p>
        <router-link 
          to="/blog" 
          class="text-white border-b border-white hover:text-gray-300"
        >
          &larr; Back to Blog
        </router-link>
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

<style scoped>
/* Add any additional styling here */
.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  color: white;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose p {
  margin-bottom: 1.25em;
}

.prose a {
  color: #3b82f6;
  text-decoration: underline;
}

.prose ul, .prose ol {
  margin-left: 1.5em;
  margin-bottom: 1.25em;
}

.prose blockquote {
  border-left: 4px solid #4b5563;
  padding-left: 1em;
  font-style: italic;
  margin: 1.5em 0;
}

.prose code {
  background-color: #1f2937;
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
  font-size: 0.9em;
}

.prose pre {
  background-color: #1f2937;
  padding: 1em;
  border-radius: 0.5em;
  overflow-x: auto;
  margin: 1.5em 0;
}

/* Custom markdown elements */
.p-block {
  background-color: #1f2937;
  border-left: 4px solid #3b82f6;
  padding: 1em;
  margin-bottom: 1.5em;
  border-radius: 0.25em;
}

.counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  width: 2em;
  height: 2em;
  border-radius: 0.25em;
  font-weight: bold;
  margin: 0 0.5em;
}

.circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #4b5563;
  color: white;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  font-weight: bold;
  margin: 0 0.5em;
}

.youtube-preview {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin: 1.5em 0;
}

.youtube-preview iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
}
</style>