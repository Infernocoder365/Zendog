<template>
  <footer class="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
    <div class="container mx-auto max-w-5xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
        <!-- Contact -->
        <div class="sm:col-span-1 md:col-span-3 text-center sm:text-left">
          <h3 class="font-heading text-xl sm:text-2xl md:text-heading-4 leading-tight sm:leading-heading tracking-heading text-primary mb-4 sm:mb-5 md:mb-6 text-center">Contact</h3>
          <ul class="space-y-2 sm:space-y-3 md:space-y-4 text-black text-sm sm:text-base text-center">
            <li>e: <a href="mailto:hi@zendoglabs.com" class="transition hover:text-primary">hi@zendoglabs.com</a>
            </li>
            <li>m: <a href="tel:+41764782886" class="transition hover:text-primary">+41 76 479 82 86</a></li>
            <li>Zurich, Switzerland</li>
            <li>Cologne, Germany</li>
            <li>Istanbul, Turkey</li>
            <li>New York, United States</li>
          </ul>
        </div>

        <!-- Navigation -->
        <div class="sm:col-span-1 md:col-span-4 text-center sm:text-left mt-8 sm:mt-0">
          <h3 class="font-heading text-xl sm:text-2xl md:text-heading-4 leading-tight sm:leading-heading tracking-heading text-primary mb-4 sm:mb-5 md:mb-6 text-center">Navigation</h3>
          <ul class="space-y-2 sm:space-y-3 md:space-y-4 text-black text-sm sm:text-base text-center">
            <li><router-link to="/" class="transition hover:text-primary">Home</router-link></li>
            <li><router-link to="/team" class="transition hover:text-primary">Team</router-link></li>
            <li><router-link to="/case-studies" class="transition hover:text-primary">Case Studies</router-link></li>
            <li><router-link to="/blog" class="transition hover:text-primary">Vlog</router-link></li>
            <li><router-link to="/privacy-policy" class="transition hover:text-primary">Privacy Policy</router-link></li>
          </ul>
          <div class="mt-4 sm:mt-5 md:mt-6 text-gray-400 text-xs sm:text-sm">&copy; 2025 Zendog Labs</div>
        </div>

        <!-- Badges / Awards -->
        <div class="sm:col-span-2 md:col-span-5 flex flex-col items-center sm:items-start mt-8 md:mt-0">
            <div class="flex justify-center items-center gap-2">
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-2 mt-2 sm:mt-3 md:mt-4 w-full">
            <img src="/images/Logos+-+Social+Proof+-+Website+-+Trustpilot%2C+Clutch%2C+Upwork++(1).png" class="w-full h-auto object-contain" alt="Trustpilot">
            <img src="/images/Untitled+design+(1).webp" class="w-full h-auto object-contain" alt="Award">
            <img src="/images/hero_upwork.png" class="w-full h-auto object-contain" alt="Upwork">
            <img src="/images/hero_google.png" class="w-full h-auto object-contain" alt="Google">
            </div>
            <div class="grid grid-cols-4 gap-2 sm:gap-3 md:gap-2 mt-2 sm:mt-3 md:mt-4 w-full">
            <img src="/images/footer_cluch_1.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
            <img src="/images/footer_cluch_2.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
            <img src="/images/footer_cluch_3.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
            <img src="/images/footer_cluch_4.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
            <img src="/images/footer_cluch_5.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
            <img src="/images/footer_cluch_6.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
            <img src="/images/footer_cluch_7.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
            <img src="/images/footer_cluch_8.png" alt="Clutch Award"
              class="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed
</script>