<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-bg-primary max-w-screen overflow-hidden">
    <Header />
    <router-view class="flex-grow" />
    <Footer />
  </div>
</template>

<style>
/* Global styles can be added here */
html {
  scroll-behavior: smooth;
}
</style>
