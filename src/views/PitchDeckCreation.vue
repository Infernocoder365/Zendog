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
import HeroSection from '../components/PitchDeckComponents/HeroSection.vue';
import FeatureCards from '../components/PitchDeckComponents/FeatureCards.vue';
import ProcessSection from '../components/PitchDeckComponents/ProcessSection.vue';
import PricingPlans from '../components/PitchDeckComponents/PricingPlans.vue';
import StatsSection from '../components/PitchDeckComponents/StatsSection.vue';
import TestimonialsSection from '../components/PitchDeckComponents/TestimonialsSection.vue';
import ContactSection from '../components/PitchDeckComponents/ContactSection.vue';
</script>