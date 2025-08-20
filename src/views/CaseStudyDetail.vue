<template>
  <main class="bg-black text-white min-h-screen py-16 px-4">
    <div class="container mx-auto px-4 py-12 mt-20">
      <div v-if="loading" class="flex justify-center items-center h-64">
        <p class="text-xl">Loading...</p>
      </div>

      <div v-else-if="study" class="max-w-2xl mx-auto px-4">

        <div class="text-sm mt-6 mb-10 text-center w-full">
          <span class="mr-2">{{ study.category }}</span>
          <span v-if="study.date" class="mr-2">{{ study.date }}</span>
          <span v-if="study.author">By {{ study.author }}</span>
          <h1 class="text-4xl font-heading leading-tight mb-2 mt-7">{{ study.title }}</h1>
        </div>

        <div class="max-w-none text-white" v-html="renderedContent"></div>


      </div>
      <div
        class="mx-auto max-w-3xl z-[15] relative bg-white rounded-xl p-12 drop-shadow-[5px_5px_5px_rgba(255,46,147,1)] border hover:shadow-lg transition-all duration-300 flex flex-row justify-between items-center gap-x-8 h-40 text-[#FF2E93] mt-40 mb-20">
        <h2
          class="grow basis-0 min-w-0 text-left text-xl sm:text-2xl md:text-3xl font-heading tracking-heading text-black mb-0 font-[800] flex items-center basis-[75%]">
          <span class="text-sm sm:text-heading-4 text-black font-bold leading-[1.8]">
            Book your <span class="text-[#FF2E93] font-bold">30-minute strategy call</span> now.
          </span>
        </h2>
        <div class="grow basis-0 min-w-0 flex items-center h-full basis-[25%]">
          <button type="submit" :disabled="isSubmitting"
            class="bg-[#FF2E93] hover:bg-[#FF2E93]/90 text-white font-header-button text-body leading-header-button tracking-header-button px-4 sm:px-primary-button-padding-x w-full h-full transition-colors duration-200">
            Learn more
          </button>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="mt-8 pt-6 flex justify-between max-w-6xl">
        <router-link v-if="prevStudy" :to="`/case-studies/${prevStudy.id}`"
          class="flex items-center max-w-[500px] text-2xl">
          <div class="pr-[25px]">
            <svg class="w-[18px] h-[32px]" viewBox="0 0 9 16">
              <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2" stroke="white"></polyline>
            </svg>
          </div>
          {{ prevStudy.title }}
        </router-link>
        <div v-else></div>

        <router-link v-if="nextStudy" :to="`/case-studies/${nextStudy.id}`"
          class="flex items-center max-w-[500px] text-2xl text-right">
          {{ nextStudy.title }} <div class="pl-[25px]">
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
import caseStudies from '../data/caseStudies.json';
import { loadCaseStudyDescriptionWithCache } from '../utils/caseStudyUtils';
import { renderMarkdown } from '../utils/markdownRenderer';

const route = useRoute();
const router = useRouter();
const loading = ref(true);
const study = ref(null);

// Function to load study data based on route ID
const loadStudyData = async () => {
  loading.value = true;
  const studyId = route.params.id;

  // Find the study with matching ID
  study.value = caseStudies.find(s => String(s.id) === String(studyId));

  if (study.value) {
    try {
      const markdownContent = await loadCaseStudyDescriptionWithCache(studyId);
      if (markdownContent) {
        study.value = { ...study.value, description: markdownContent };
      }
    } catch (error) {
      console.error('Error loading case study content:', error);
    }
  } else {
    router.push('/case-studies');
  }

  loading.value = false;
  window.scrollTo(0, 0);
};

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      loadStudyData();
    }
  }
);

onMounted(() => {
  loadStudyData();
});

const renderedContent = computed(() => {
  if (!study.value || !study.value.description) return '';
  try {
    return renderMarkdown(study.value.description);
  } catch (error) {
    console.error('Error rendering markdown:', error);
    return study.value.description.toString();
  }
});

const currentIndex = computed(() => {
  if (!study.value) return -1;
  return caseStudies.findIndex(s => String(s.id) === String(study.value.id));
});

const prevStudy = computed(() => {
  if (currentIndex.value <= 0) return null;
  return caseStudies[currentIndex.value - 1];
});

const nextStudy = computed(() => {
  if (currentIndex.value === -1 || currentIndex.value >= caseStudies.length - 1) return null;
  return caseStudies[currentIndex.value + 1];
});

const openCommentForm = () => {
  alert('Comment form would open here!');
};
</script>