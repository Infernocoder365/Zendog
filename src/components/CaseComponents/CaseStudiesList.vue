<template>
  <section class="bg-black text-white py-12 mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-10 max-w-5xl mx-auto">
        <CaseStudyCard v-for="(study, index) in caseStudies" :key="index" :study="study" />
      </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CaseStudyCard from './CaseStudyCard.vue';
import caseStudiesData from '../../data/caseStudies.json';

const caseStudies = ref([]);

onMounted(() => {
  caseStudies.value = caseStudiesData.map((study, index) => ({
    ...study,
    link: `/case-studies/${study.id || (index + 1)}`,
    id: study.id || (index + 1).toString()
  }));
});
</script>