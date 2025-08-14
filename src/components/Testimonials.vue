<template>
  <section>
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-heading text-heading-2 leading-heading tracking-heading text-primary mb-4">
          Track record of success
        </h2>
        <p class="font-body font-body leading-body tracking-body text-white max-w-3xl mx-auto">
          Don’t just take our word for it—hear from the many satisfied clients who have tapped into Zendog Labs'
          expertise in strategy, marketing, sales, and finance.
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative max-w-2xl mx-auto">
        <!-- Testimonial Cards -->
        <div class="relative min-h-[350px] overflow-hidden">
          <div v-for="(testimonial, index) in testimonials" :key="index" :class="[
            'absolute inset-0 transition-transform duration-500 ease-in-out',
            currentIndex === index ? 'translate-x-0' :
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
          ]">
            <div class="bg-transparent p-8 pb-0 rounded-lg shadow-lg text-center">
              <!-- Stars -->
              <div class="flex justify-center mb-6">
                <div v-for="n in 5" :key="n" class="text-yellow-400 text-2xl w-[16px] h-[16px]"><svg viewBox="0 0 14 14"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip_star)">
                      <path
                        d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                        fill="rgb(252, 213, 63)"></path>
                    </g>
                    <defs>
                      <clipPath id="clip_star">
                        <rect width="14" height="14" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg></div>
              </div>

              <!-- Quote -->
              <div class="mb-6">
                <blockquote :class="[
                  'font-body text-sm font-body leading-body tracking-body text-white',
                  !expandedQuotes[index] ? 'line-clamp-3' : ''
                ]" :id="`quote-${index}`">
                  "{{ testimonial.quote }}"
                </blockquote>
                <button v-if="testimonial.quote.length > 150" @click="toggleQuote(index)"
                  class="text-gray-400 hover:underline text-sm font-medium">
                  {{ expandedQuotes[index] ? 'Read less' : 'Read more' }}
                </button>
              </div>

              <!-- Author -->
              <div class="flex items-center justify-center flex-col">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <img :src="testimonial.avatar" :alt="testimonial.author"
                    class="w-full h-full rounded-full object-cover">
                </div>
                <div class="flex flex-col justify-center items-center">
                  <div
                    class="font-heading text-sm leading-heading tracking-heading text-white flex items-center text-center w-full justify-center">
                    {{ testimonial.author }}
                    <div v-if="testimonial.verified" class="ml-2" aria-label="Verified Customer" role="img">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" class="w-4 h-4"
                        aria-hidden="true">
                        <path fill="#197BFF"
                          d="M6.757.236a.35.35 0 0 1 .486 0l1.106 1.07a.35.35 0 0 0 .329.089l1.493-.375a.35.35 0 0 1 .422.244l.422 1.48a.35.35 0 0 0 .24.24l1.481.423a.35.35 0 0 1 .244.422l-.375 1.493a.35.35 0 0 0 .088.329l1.071 1.106a.35.35 0 0 1 0 .486l-1.07 1.106a.35.35 0 0 0-.089.329l.375 1.493a.35.35 0 0 1-.244.422l-1.48.422a.35.35 0 0 0-.24.24l-.423 1.481a.35.35 0 0 1-.422.244l-1.493-.375a.35.35 0 0 0-.329.088l-1.106 1.071a.35.35 0 0 1-.486 0l-1.106-1.07a.35.35 0 0 0-.329-.089l-1.493.375a.35.35 0 0 1-.422-.244l-.422-1.48a.35.35 0 0 0-.24-.24l-1.481-.423a.35.35 0 0 1-.244-.422l.375-1.493a.35.35 0 0 0-.088-.329L.236 7.243a.35.35 0 0 1 0-.486l1.07-1.106a.35.35 0 0 0 .089-.329L1.02 3.829a.35.35 0 0 1 .244-.422l1.48-.422a.35.35 0 0 0 .24-.24l.423-1.481a.35.35 0 0 1 .422-.244l1.493.375a.35.35 0 0 0 .329-.088L6.757.236Z">
                        </path>
                        <path fill="#fff" fill-rule="evenodd"
                          d="M9.065 4.85a.644.644 0 0 1 .899 0 .615.615 0 0 1 .053.823l-.053.059L6.48 9.15a.645.645 0 0 1-.84.052l-.06-.052-1.66-1.527a.616.616 0 0 1 0-.882.645.645 0 0 1 .84-.052l.06.052 1.21 1.086 3.034-2.978Z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="font-body text-sm font-body leading-body tracking-body text-white flex items-center">
                    {{ testimonial.position }}
                  </div>
                  <img v-if="testimonial.companyLogo" :src="testimonial.companyLogo" :alt="testimonial.company"
                    class="h-[30px]">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="previousTestimonial"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-black hover:bg-white text-large-text w-[32px] h-[32px]">
          <div class="text-xl w-[16px] h-[16px] m-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M8.96 1.96a1 1 0 0 1 1.497 1.32l-.083.094L5.747 8l4.627 4.626a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.084l-.094-.084-5.334-5.333a1 1 0 0 1-.083-1.32l.083-.094L8.96 1.96Z">
              </path>
            </svg></div>
        </button>

        <button @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-black hover:bg-white text-large-text w-[32px] h-[32px]">
          <div class="text-xl w-[16px] h-[16px] m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M7.04 1.96a1 1 0 0 0-1.497 1.32l.083.094L10.253 8l-4.627 4.626a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.32.084l.094-.084 5.334-5.333a1 1 0 0 0 .083-1.32l-.083-.094L7.04 1.96Z">
              </path>
            </svg>
          </div>
        </button>

        <div class="text-center mb-16">
          <p class="font-body font-body leading-body tracking-body text-white max-w-3xl mx-auto">
            Click below for more 5-star reviews
          </p>
          <div class="flex justify-center items-center w-full  max-w-2xl mx-auto gap-4 mt-2">
            <img src="/images/hero_trustpilot.png" class="w-1/5 p-2" alt="">
            <img src="/images/hero_clutch.png" class="w-1/5 p-2" alt="">
            <img src="/images/hero_upwork.png" class="w-1/5 p-2" alt="">
            <img src="/images/hero_google.png" class="w-1/5 p-2" alt="">
          </div>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none">
      <g clip-path="url(#clip_star)">
        <path
          d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
          fill="none"></path>
      </g>
      <defs>
        <clipPath id="clip_star">
          <rect width="14" height="14" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const interval = ref(null)
const expandedQuotes = ref({})

const testimonials = [
  {
    stars: 5,
    quote: "We're in the pre-seed stage of our startup for a travel social app. Although we have in-house technology to build our product, we don't have a robust go to market plan. I had before a few conversations with Rafael and his advice always inspired us to the next step when there's a showstopper or a bottleneck. That's when I decided to book a Sparring Session with Rafael from Zendog Labs. He has evaluated the position where we're at and set up a list of executable items for us to move on and test the market. Rafael is a great professional and he never sugarcoats our challenges, instead, he always goes beyond to propel us forward to achieve our goals in an actionable way. I would rate 10 stars if I could and highly recommend Zendog Labs.",
    avatar: "images/branda.jpg",
    author: "Branda",
    position: "Co-Founder & CEO",
    company: "Nowy",
    companyLogo: "images/Logo-Nowy.png",
    verified: true
  },
  {
    stars: 5,
    quote: "Rafael and the Zendog Labs team are amazing and strategic thinkers. They constantly blew us away with their ability to adapt to our deliverables, manage multiple projects, and think on the fly all while helping us build our business. If you have a chance to work with Zendog Labs - do it!",
    avatar: "images/mptwipjol4cptn716qf6.avif",
    author: "Steve",
    position: "CEO & Co-Founder",
    company: "fundern",
    companyLogo: "images/Funden----white---200x100.png",
    verified: true
  },
  {
    stars: 5,
    quote: "Zendog Labs helped us with market research, sales strategy, and other go-to-market questions. I truly cannot think of a more valuable partner. Their attention to detail and business acumen are top-notch and anyone looking to understand who their customer is and what/where their company should focus on should absolutely consider Zendog Labs.",
    avatar: "images/Emanuel.png",
    author: "Justin",
    position: "CEO & Co-Founder",
    company: "Aryo",
    companyLogo: "images/Aryo---200x100.png",
    verified: true
  },
  {
    stars: 5,
    quote: "I believe that great sales strategy is the result of great sales tactics, and Zendog Labs helped us double down on the right set of sales tactics for our team. Their growth frameworks are incredibly useful and the team at Zendog Labs is highly analytical. I highly recommend working with them.",
    avatar: "images/1660762379807.jpg",
    author: "Mark",
    position: "SVP Commercial",
    company: "Corza",
    companyLogo: "images/Corza---200x100.png",
    verified: true
  },
  {
    stars: 5,
    quote: "This team is unique! – that’s the first thing that came to my mind during our first call. Zendog Labs has a unique way of approaching challenging situations. They helped us organize and put together sales and marketing strategies and suggested targeted improvements to our day-to-day operations. You will get way more than you expect.",
    avatar: "images/1652667244382.jpg",
    author: "Nabil",
    position: "CEO & Founder",
    company: "Corza",
    companyLogo: "images/Bird---200x100.png",
    verified: true
  },
  {
    stars: 5,
    quote: "Last year we launched a B2B SaaS product and had initial traction. However, we sought guidance on further accelerating growth and augmenting our team with global talent. We brought in Rafael from Zendog Labs to review the work of our team and external vendors. He built a new growth playbook that included strategic and tactical advice, which he converted into a Trello board with specific next steps for our team. For example, Rafael found that a subset of Google Ad campaigns was remarkably effective and suggested we re-activate it. Most importantly, he helped us notice that our primary challenge wasn’t user acquisition but activation and retention. Rafael also provided ongoing implementation support by introducing a data-tracking framework and ongoing sparring sessions with our leadership team. We highly recommend working with Rafael and the Zendog Labs team - they are A-players and great to work with!",
    avatar: "images/1619996071552.jpg",
    author: "Mels",
    position: "CEO & Founder",
    company: "Intellivy",
    companyLogo: "images/Logo---Intellivy.png",
    verified: true
  },
  {
    stars: 5,
    quote: "We brought Rafael on as fractional CMO for our $10M subscription business, and his meticulous project management was exceptional. Within just 3 months, he grasped our industry, streamlined performance metrics, and led successful PPC campaigns across major platforms. Rafael also crafted strategic plans for SEO, CRO, and automation, launched a new product, and expanded into new markets. We’re so impressed with his work that we’re expanding the scope of our fractional executive agreement. Highly recommended for any growth or marketing role.",
    avatar: "images/200px-Mike-Maddox.jpg",
    author: "Michael",
    position: "Founder & CEO",
    company: "Intellivy",
    companyLogo: "images/Logo-Otaku.jpg",
    verified: true
  },
  {
    stars: 5,
    quote: "Zendog and Sam were some of the best consultants I've worked with. From the beginning their passion, aptitude for business and entrepreneurship, communication, and then execution were perfect and very impressive. They provided more value than I could've asked for and they went ABOVE AND BEYOND to make our project a priority and something that really got the feedback needed. I would highly recommend for anyone looking to work with serious and capable people!",
    avatar: "images/josh-184x300.jpg",
    author: "Josh",
    position: "CEO & Co-Founder",
    company: "2050",
    companyLogo: "images/2050-Farms---200x100.png",
    verified: true
  },
  {
    stars: 5,
    quote: "I had the pleasure of working with Zendog Labs for our fundraising efforts. Their ability to understand quickly what we do and our vision and their strong knowledge of the startup and fundraising world gave us the perfect support. Thank you very much, and I recommend Zendog Labs 100%.",
    avatar: "images/Vincent-Moret-carre-300x300.png",
    author: "Vincet",
    position: "Co-Founder & Head Partnerships",
    company: "Logo-Hop-Delivery",
    companyLogo: "images/Logo-Hop-Delivery.png",
    verified: true
  },
  {
    stars: 5,
    quote: "Thanks to Zendog Labs, we gained our users' trust and expanded our base to 3,000. Rafael's expertise was instrumental in crafting a stellar go-to-market strategy and helping us achieve product-market fit. The team was responsive, held productive meetings, and delivered quality results. I’d work with Zendog Labs anytime again!",
    avatar: "images/1710407362242.jpg",
    author: "David",
    position: "Founder & CEO",
    company: "Logo-OptiLegal",
    companyLogo: "images/Logo-OptiLegal.jpg",
    verified: true
  },
  {
    stars: 5,
    quote: "Rafael is a professional. Many consultants don't deliver 100%. He does. We look forward to working with him on the next project.",
    avatar: "images/Screenshot-2022-09-23-151150.png",
    author: "Frank",
    position: "COO & Co-Founder",
    company: "LeadsMarket---200x100",
    companyLogo: "images/LeadsMarket---200x100.png",
    verified: true
  },
  {
    stars: 5,
    quote: "Zendog Labs delivered a professional and impactful PowerPoint pitch deck. They were responsive and met all deadlines. Their domain knowledge and experience in fundraising were impressive.",
    avatar: "images/1675957117270.jpg",
    author: "Jas",
    position: "Founder & CEO",
    company: "Logo-Vtuls",
    companyLogo: "images/Logo-Vtuls.jpg",
    verified: true
  },
  {
    stars: 5,
    quote: "Rafael is a fantastic businessman. His knowledge and experience were very valuable in pushing my startup forward! In addition to his professionalism, he was also a great team player.",
    avatar: "images/1516525735114.jpg",
    author: "Ran",
    position: "CEO & Founder",
    company: "ETF-Insider---200x100",
    companyLogo: "images/ETF-Insider---200x100.png",
    verified: true
  },
  {
    stars: 5,
    quote: "Zendog Labs tripled our ad spend profitably in less than 12 months, leading to record growth. The team was highly responsive and proactive, consistently hitting difficult targets. They’re extremely growth-oriented and always on the lookout for new ways to scale. I’d 100% recommend them to anyone looking to achieve impressive results.",
    avatar: "images/1699382022146.jpg",
    author: "Krzysztof",
    position: "Lead, Media Buyer",
    company: "Logo-Otaku",
    companyLogo: "images/Logo-Otaku.jpg",
    verified: true
  },
  {
    stars: 5,
    quote: "Great job again by Zendog Labs! I'm now armed with a very professional pitch deck. It's great getting advice from former VCs. Thoroughly recommend!",
    avatar: "images/663012c24891c09f9d5375b3_image-3-.png",
    author: "Craig",
    position: "Founder & CEO",
    company: "Logo-The-Shade.jpg",
    companyLogo: "images/Logo-The-Shade.jpg",
    verified: true
  }
]

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const previousTestimonial = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}

const goToTestimonial = (index) => {
  currentIndex.value = index
}

const toggleQuote = (index) => {
  expandedQuotes.value[index] = !expandedQuotes.value[index]
}

const startAutoPlay = () => {
  interval.value = setInterval(nextTestimonial, 50000)
}

const stopAutoPlay = () => {
  if (interval.value) {
    clearInterval(interval.value)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>