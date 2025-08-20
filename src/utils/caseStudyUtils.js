import { ref } from 'vue';
import { renderMarkdown } from './markdownRenderer';

/**
 * Load case study description from markdown file
 * @param {string} id - The case study ID
 * @returns {Promise<string>} - The markdown content
 */
export async function loadCaseStudyDescription(id) {
  try {
    // Dynamically import the markdown file based on the ID
    const module = await import(`../data/caseStudyDescriptions/${id}.md?raw`);
    return module.default;
  } catch (error) {
    console.error(`Error loading case study description for ID ${id}:`, error);
    return '';
  }
}

/**
 * Cache for loaded case study descriptions
 */
const descriptionCache = ref(new Map());

/**
 * Load case study description with caching
 * @param {string} id - The case study ID
 * @returns {Promise<string>} - The markdown content
 */
export async function loadCaseStudyDescriptionWithCache(id) {
  // Check if the description is already in the cache
  if (descriptionCache.value.has(id)) {
    return descriptionCache.value.get(id);
  }
  
  // Load the description
  const description = await loadCaseStudyDescription(id);
  
  // Cache the result
  descriptionCache.value.set(id, description);
  
  return description;
}