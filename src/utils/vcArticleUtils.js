import { ref } from 'vue';
import { renderMarkdown } from './markdownRenderer';

/**
 * Load VC article description from markdown file
 * @param {string} id - The article ID
 * @returns {Promise<string>} - The markdown content
 */
export async function loadVCArticleDescription(id) {
  try {
    // Dynamically import the markdown file based on the ID
    const module = await import(`../data/vcArticleDescriptions/${id}.md?raw`);
    return module.default;
  } catch (error) {
    console.error(`Error loading VC article description for ID ${id}:`, error);
    return '';
  }
}

/**
 * Cache for loaded VC article descriptions
 */
const descriptionCache = ref(new Map());

/**
 * Load VC article description with caching
 * @param {string} id - The article ID
 * @returns {Promise<string>} - The markdown content
 */
export async function loadVCArticleDescriptionWithCache(id) {
  // Check if the description is already in the cache
  if (descriptionCache.value.has(id)) {
    return descriptionCache.value.get(id);
  }
  
  // Load the description
  const description = await loadVCArticleDescription(id);
  
  // Cache the result
  descriptionCache.value.set(id, description);
  
  return description;
}