<template>
  <main class="bg-black">
    <HeroSection />
    <FeatureCards />
    <ProcessSection />
    <PricingPlans />
    <StatsSection />
    <TestimonialsSection />
    <ContactSection />
  </main>
</template>

<script setup>
// Import all components
import HeroSection from '../components/FundraisingComponents/HeroSection.vue';
import FeatureCards from '../components/FundraisingComponents/FeatureCards.vue';
import ProcessSection from '../components/FundraisingComponents/ProcessSection.vue';
import PricingPlans from '../components/FundraisingComponents/PricingPlans.vue';
import StatsSection from '../components/FundraisingComponents/StatsSection.vue';
import TestimonialsSection from '../components/FundraisingComponents/TestimonialsSection.vue';
import ContactSection from '../components/FundraisingComponents/ContactSection.vue';
</script>