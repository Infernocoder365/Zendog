<template>
  <article class="flex flex-col bg-black text-white py-8">
    <router-link :to="post.link">
      <div class="flex flex-col">
        <h2 class="text-4xl font-heading leading-tight mb-2">
          {{ post.title }}
        </h2>
        <div class="text-white text-lg mt-6 mb-4 flex flex-wrap items-center">
          <span class="mr-4">{{ post.category }}</span>
          <span v-if="post.author" class="mr-4">By {{ post.author }}</span>
          <span v-if="post.date" class="">{{ post.date }}</span>
        </div>
        <router-link :to="post.link" class="text-white self-start mt-2 text-lg border-b border-white">Read More</router-link>
      </div>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  post: {
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
      originalLink: ''
    })
  }
});
</script>