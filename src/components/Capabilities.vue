<template>
  <section class="pb-12 sm:pb-16 md:pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 class="font-heading text-xl sm:text-2xl md:text-heading-2 leading-tight sm:leading-heading tracking-heading text-primary mb-2 sm:mb-3 md:mb-4">
          Capabilities for accelerated growth
        </h2>
        <p class="font-body text-sm sm:text-base leading-snug sm:leading-body tracking-body text-text-secondary max-w-4xl mx-auto px-2 sm:px-6 md:px-10">
          We leverage our deep expertise in strategy, marketing, sales, and finance to help you hit product-market fit, scale your go-to-market strategy, and secure venture capital.
        </p>
      </div>
      <div class="flex justify-center items-center">
        <!-- Capabilities Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 max-w-4xl">
          <div v-for="capability in capabilities" :key="capability.title" class="bg-white py-4 sm:py-5 md:py-6 px-6 sm:px-10 md:px-14 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 drop-shadow-[2px_2px_3px] text-white">
            <h3 class="font-heading text-lg sm:text-xl md:text-heading-4 font-[800] leading-tight sm:leading-heading tracking-heading text-black mb-2 sm:mb-3">
              {{ capability.title }} {{ capability.icon }}
            </h3>
            <p class="font-body text-sm sm:text-normal leading-snug sm:leading-body tracking-body text-black">
              {{ capability.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const capabilities = [
  {
    icon: '🔭',
    title: 'Strategy',
    description: 'We extend your success story with a fresh vision, mission, and strategy, alongside a scalable Target Operating Model that incorporates analytics, talent, processes, and systems.'
  },
  {
    icon: '📡',
    title: 'Marketing',
    description: 'We scale revenue with game plans that engage your audience through best-in-class PPC, SEO, SMM, email/SMS, CRO, and more, alongside entering new markets and launching new products.'
  },
  {
    icon: '🤝',
    title: 'Sales',
    description: 'We identify ideal customers, create stunning sales collateral, and engage buyers through targeted outreach, partnerships, and trade shows, generating leads that flow through your CRM seamlessly.'
  },
  {
    icon: '💸',
    title: 'Finance',
    description: 'We apply our investor and strategic finance expertise to build your fundraising strategy, design a standout pitch deck, deliver a valuation report, and find the right investors or potential buyers.'
  }
];
</script>