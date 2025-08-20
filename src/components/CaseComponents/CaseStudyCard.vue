<template>
  <article class="flex flex-col bg-black text-white py-8">
    <router-link :to="study.link">
      <div class="flex flex-col">
        <img v-if="study.image" :src="study.image" :alt="study.title" class="w-full rounded-md mb-4" />
        <h2 class="text-3xl leading-tight mb-2">
          {{ study.title }}
        </h2>
      </div>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  study: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      category: '',
      description: '',
      link: '#',
      author: '',
      date: '',
      id: '',
      slug: '',
      image: ''
    })
  }
});
</script>