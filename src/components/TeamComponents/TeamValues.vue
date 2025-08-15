<template>
  <section class="bg-black text-white py-16">
    <div class="container mx-auto px-4 md:px-8">
      <div class="max-w-xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-5 text-center">Our Team</h2>
        <p class="px-4 md:px-10 text-center">Meet the experts behind our success. Our team brings diverse expertise and
          experience to help your business grow and thrive.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div v-for="(member, idx) in teamMembers" :key="member.name"
          class="p-6 rounded-lg transition-all duration-300 space-y-4">
          <div class="flex items-center justify-center mb-4">
            <img :src="member.avatar" :alt="member.name" class="w-24 h-24 rounded-full object-cover" />
          </div>
          <h3 class="text-lg font-bold mb-1 text-center">{{ member.name }}</h3>
          <p class="text-gray-400 text-center mb-2 text-sm">{{ member.position }}</p>
          <p class="text-gray-300 text-center text-sm mb-3">
            <span class="block">{{ member.location }}</span>
          </p>
          <div class="flex justify-center flex-col items-center">
            <a v-if="member.email" :href="`mailto:${member.email}`"
              class="text-[#FF2E93] hover:underline transition-colors mb-2">
              <span>{{ member.email }}</span>
            </a>
            <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <!-- See Info Button -->
          <div class="flex justify-center mb-4">
            <button @click="openModal(idx)"
              class="flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-white text-sm">
              <span>SEE INFO</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 10 8" fill="currentColor">
                <path
                  d="M8.793 4.25l-2.147-2.146a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 1 1-.708-.708l2.147-2.146H1.25a.5.5 0 1 1 0-1h7.543z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition enter-active-class="transition-opacity" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition-opacity" leave-from-class="opacity-100" leave-to-class="opacity-0" class="z-50">
      <div v-if="modalOpen">
        <!-- Overlay -->
        <div class="fixed inset-0 bg-black opacity-50" @click="closeModal"></div>
        <!-- Modal -->
        <div
          class="fixed top-0 sm:right-[20%] h-screen w-full sm:w-[480px] bg-white z-50 p-4 pl-8 overflow-y-auto rounded-r-3xl">
          <div class="relative">
            <button @click="closeModal"
              class="absolute self-end mb-4 text-gray-600 bg-gray-300 hover:text-gray-400 text-2xl top-0 right-0 rounded-full w-[32px] h-[32px]"
              aria-label="Close">&times;</button>
            <div v-if="selectedMember" class="flex flex-col text-black pt-4">
              <h3 class="text-lg font-bold mb-2">{{ selectedMember.name }}</h3>
              <p class="mb-2 text-sm">{{ selectedMember.position }}</p>
              <p class="text-sm mb-2">{{ selectedMember.location }}</p>
              <a v-if="selectedMember.email" :href="`mailto:${selectedMember.email}`"
                class="text-[#FF2E93] hover:underline mb-2 text-sm">{{ selectedMember.email }}</a>
              <div class="text-base mt-4 text-sm prose prose-sm max-w-none"
                v-html="renderMarkdown(selectedMember.detail)"></div>
              <div><a v-if="selectedMember.linkedin" :href="selectedMember.linkedin" target="_blank" rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue';
import { marked } from 'marked';

const teamMembers = ref([
  {
    avatar: '/images/Profile-photo-Rafael.png',
    name: 'Rafael',
    position: 'Founder & CEO',
    location: 'Europe',
    email: 'rafael@zendoglabs.com',
    linkedin: 'https://www.linkedin.com/in/rsoezdemir/',
    detail: `Rafael is an entrepreneur, investor, and consultant.

<br>

Currently, he helms Zendog Labs as its Founder & CEO. Over the past year, he has served as a Growth Advisor and Chief Growth Officer to numerous technology, e-commerce, and healthcare companies across the USA, Europe, and Asia.

<br>

Rafael previously served for 5 years as a Principal in the Roivant Health team of Roivant Sciences, a unicorn company founded by Vivek Ramaswamy. During this time, he was involved in healthcare technology and biopharmaceutical investments. Roivant received over $3 billion from investors like the Softbank Vision Fund and Founders Fund and went public on NASDAQ in 2021 with an $11 billion valuation. Several Roivant subsidiaries are also traded on the NASDAQ and NYSE.

<br>

In early 2020, Rafael dropped into Lokavant, an enterprise SaaS company of Roivant. During his 2 years at the company, Lokavant grew its revenue from $0 to $10 million and expanded its team from 5 to over 50 employees. Lokavant subsequently secured $21 million in Series A funding from Edison Partners, taking its valuation to over $60 million.

<br>

Before Roivant, Rafael founded both a digital health and an e-commerce company. His professional background includes stints at top financial institutions like Credit Suisse and BHF KB Group in the financial centers of London and Zurich. In the Swiss Army, he led a unit of 40 armored infantrymen as a deputy platoon`
  },
  {
    avatar: '/images/Profile-photo-Arron.png',
    name: 'Arron',
    position: 'Growth Strategist',
    location: 'United States',
    email: 'arron@zendoglabs.com',
    linkedin: 'https://www.linkedin.com/in/arrongould/',
    detail: `Arron is a builder and investor with experience across geos and verticals. Arron was an early employee at Roivant, initially developing software to enhance market intelligence and create unfair advantages for the family of companies of Roivant. Following that, he spun-out and operated biotech and SaaS companies. These companies raised over $30M and grew to over 100 employees in as little as 3 years. In 2019, Arron dropped into Lokavant, after leading operations, he joined Rafael in the Growth team. He developed Python programs that scraped and organized data to improve the team’s efficiency and enhanced the go-to-market strategy. Additionally, he led discovery of the companies underlying data set to improve pitch and marketing materials, ultimately driving deal conversion that saw the company scale from $0-10M ARR. Prior to Roivant, Arron was an investor working with Israeli founders at UpWest Labs, where he led investments including Jolt and EXO technologies (exited). Arron is an alumnus of University of California, Berkeley and has represented Great Britain in Water Polo.`
  },
  {
    avatar: '/images/Profile-photo-Sam.png',
    name: 'Sam',
    position: 'Growth Strategist',
    location: 'Europe',
    email: 'samuel@zendoglabs.com',
    linkedin: 'https://www.linkedin.com/in/samuel-schneider-wurster-bb000248/',
    detail: `Sam is a driven entrepreneur with a focus on rapidly building and iterating revenue-generating MVPs to accelerate product-market fit and generate traction. He is a team leader with a focus on building, steering, and leading market-facing teams. Sam founded Journeyman in 2017 and sold it in 2022. He took the startup to €1.2M in ARR and raised €1.5M from top-tier VCs like Atlantic Labs and Tiny.vc. He built a full-cycle sales process, recruited and trained a team of 15 people across business and technical functions, and personally created the first MVP with no-code tools. Sam now consults for clients at Zendog Labs and is also the co-host of Unicorn Ideas, a weekly podcast that breaks down startup ideas of successful founders and investors. Sam started his career in Venture Capital and in the Special Forces of the Swiss Army. He holds an MBA from one of the best business schools in Europe.`
  },
  {
    avatar: '/images/Profile-photo-Hayk.png',
    name: 'Hayk',
    position: 'Growth Operations',
    location: 'Asia',
    email: 'hayk@zendoglabs.com',
    linkedin: 'https://www.linkedin.com/in/hayk-shahnazaryan/',
    detail: `Hayk is an accomplished growth marketer and advisor. He has spearheaded growth at Referral Factory in the Netherlands and was the Founder & CEO of Market Hikers, aiding startups and enterprises in accelerating growth. Starting his career at SmartGateVC, he developed impactful go-to-market strategies for B2B startups. Specializing in growth marketing, customer acquisition, and referral marketing, he has worked across industries such as Finance, SaaS, and Web 3. Adept with tools like Hubspot, Pipedrive, Zapier, and Google Analytics, Hayk constantly experiments with new solutions. Fluent in French, he holds a Bachelor's and Master's degree from the French University of Armenia.`
  }
]);

const modalOpen = ref(false);
const selectedIdx = ref(null);

const selectedMember = computed(() =>
  selectedIdx.value !== null ? teamMembers.value[selectedIdx.value] : null
);

function openModal(idx) {
  selectedIdx.value = idx;
  modalOpen.value = true;
}
function closeModal() {
  modalOpen.value = false;
  selectedIdx.value = null;
}

watch(modalOpen, (open) => {
  if (open) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

// Clean up in case component is destroyed while modal is open
onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});

const renderMarkdown = (md) => marked.parse(md);
</script>