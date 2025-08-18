import { ref } from 'vue';
import { renderMarkdown } from './markdownRenderer';

/**
 * Load blog description from markdown file
 * @param {string} id - The blog post ID
 * @returns {Promise<string>} - The markdown content
 */
export async function loadBlogDescription(id) {
  try {
    // Dynamically import the markdown file based on the ID
    const module = await import(`../data/blogDescriptions/${id}.md?raw`);
    return module.default;
  } catch (error) {
    console.error(`Error loading blog description for ID ${id}:`, error);
    return '';
  }
}

/**
 * Cache for loaded blog descriptions
 */
const descriptionCache = ref(new Map());

/**
 * Load blog description with caching
 * @param {string} id - The blog post ID
 * @returns {Promise<string>} - The markdown content
 */
export async function loadBlogDescriptionWithCache(id) {
  // Check if the description is already in the cache
  if (descriptionCache.value.has(id)) {
    return descriptionCache.value.get(id);
  }
  
  // Load the description
  const description = await loadBlogDescription(id);
  
  // Cache the result
  descriptionCache.value.set(id, description);
  
  return description;
}