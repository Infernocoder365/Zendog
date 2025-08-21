<template>
  <main class="bg-black text-white min-h-screen py-16 px-4">
    <div class="container mx-auto px-4 py-12 mt-20">
      <div v-if="loading" class="flex justify-center items-center h-64">
        <p class="text-xl">Loading...</p>
      </div>

      <div v-else class="max-w-6xl mx-auto px-4">
        <h1 class="text-4xl font-heading leading-tight mb-6 text-center">Growth & VC Slang</h1>
        <div class="max-w-none text-white px-6" v-html="renderedContent"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { renderMarkdown } from '../utils/markdownRenderer';

const loading = ref(true);
const markdown = ref('');

onMounted(async () => {
  try {
    const module = await import('../data/insights/growth-vc-slang.md?raw');
    markdown.value = module.default || '';
  } catch (e) {
    console.error('Failed to load slang content', e);
    markdown.value = '# Growth & VC Slang\n\nContent unavailable.';
  } finally {
    document.title = 'Growth & VC Slang 🎓';
    loading.value = false;
  }
});

const renderedContent = computed(() => {
  if (!markdown.value) return '';
  try {
    return renderMarkdown(markdown.value);
  } catch (err) {
    console.error('Error rendering markdown:', err);
    return markdown.value.toString();
  }
});
</script>

<style scoped>
/* Component-specific styles if needed */
</style>