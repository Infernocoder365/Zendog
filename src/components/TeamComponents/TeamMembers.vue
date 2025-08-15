<template>
  <section class="bg-black text-white py-16">
    <div class="container mx-auto px-4 md:px-8">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Wall of love</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div v-for="(member, index) in teamMembers" :key="member.name"
          class="bg-transparent p-4 sm:p-6 md:p-8 pb-0 rounded-lg shadow-lg text-left">
          <!-- Stars -->
          <div class="flex mb-3 sm:mb-4 md:mb-6">
            <div v-for="n in member.star" :key="n"
              class="text-yellow-400 text-xl sm:text-2xl w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]">
              <!-- Star SVG -->
              <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </svg>
            </div>
          </div>
          <!-- Detail (quote) -->
          <div class="mb-3 sm:mb-4 md:mb-6">
            <blockquote :class="[
              'font-body text-xs sm:text-sm md:text-sm leading-body tracking-body text-white',
              !expandedQuotes[index] ? 'line-clamp-5' : ''
            ]">
              {{ member.detail }}
            </blockquote>
            <button v-if="member.detail.length > 150" @click="toggleQuote(index)"
              class="text-gray-400 hover:underline text-xs sm:text-sm font-medium mt-1">
              {{ expandedQuotes[index] ? 'Read less' : 'Read more' }}
            </button>
          </div>
          <!-- Author -->
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-b from-[#e5e5e5] to-[rgba(203,203,203,0.15)] transition-opacity duration-1000 ease-out  rounded-full flex items-center justify-center">
              <!-- SVG avatar stub -->
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
                <title>Avatar stub icon</title>
                <path
                  d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z"
                  fill="url(#first_linear_f2f8a5ea-7a87-4523-b80a-49edca03b315)"></path>
                <path
                  d="M12 13C9.60453 13 7.42467 13.6937 5.82227 14.6715C5.02143 15.1602 4.33788 15.7363 3.84397 16.3615C3.35805 16.9767 3 17.713 3 18.5C3 19.3449 3.41114 20.0111 4.00266 20.4859C4.56324 20.9359 5.30182 21.2336 6.08716 21.4416C7.66466 21.8593 9.77101 22 12 22C14.229 22 16.3353 21.8593 17.9128 21.4416C18.6982 21.2336 19.4368 20.9359 19.9973 20.4859C20.5889 20.0111 21 19.3449 21 18.5C21 17.713 20.642 16.9767 20.156 16.3615C19.6621 15.7363 18.9786 15.1602 18.1777 14.6715C16.5753 13.6937 14.3955 13 12 13Z"
                  fill="url(#second_linear_f2f8a5ea-7a87-4523-b80a-49edca03b315)"></path>
                <defs>
                  <linearGradient id="first_linear_f2f8a5ea-7a87-4523-b80a-49edca03b315" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7e7e7e"></stop>
                    <stop offset="1" stop-color="#989898"></stop>
                  </linearGradient>
                  <linearGradient id="second_linear_f2f8a5ea-7a87-4523-b80a-49edca03b315"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7e7e7e"></stop>
                    <stop offset="1" stop-color="#989898"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="flex flex-col">
              <div
                class="font-heading text-xs sm:text-sm leading-heading tracking-heading text-white flex items-center w-full">
                {{ member.name }}
                <div v-if="member.isVerify" class="ml-1 sm:ml-2" aria-label="Verified" role="img">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" class="w-3 h-3 sm:w-4 sm:h-4"
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
              <div class="font-body text-xs sm:text-sm leading-body tracking-body text-white flex items-center">
                {{ member.position }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <p
          class="font-body font-body leading-body tracking-body text-white max-w-3xl mx-auto text-xs sm:text-sm md:text-base">
          Click below for more 5-star reviews
        </p>
        <div
          class="flex justify-center items-center w-full max-w-full sm:max-w-xl md:max-w-2xl mx-auto gap-2 sm:gap-3 md:gap-4 mt-2">
          <img src="/images/hero_trustpilot.png" class="w-1/5 p-1 sm:p-2" alt="">
          <img src="/images/hero_clutch.png" class="w-1/5 p-1 sm:p-2" alt="">
          <img src="/images/hero_upwork.png" class="w-1/5 p-1 sm:p-2" alt="">
          <img src="/images/hero_google.png" class="w-1/5 p-1 sm:p-2" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expandedQuotes = ref({})

const teamMembers = [
  {
    star: 5,
    detail: "Zendog Labs delivered a professional and impactful PowerPoint pitch deck. They were responsive and met all deadlines. Their domain knowledge and experience in fundraising were impressive.",
    avatar: "images/branda.jpg",
    name: "Jas",
    isVerify: true,
    position: "Founder & CEO"
  },
  {
    star: 5,
    detail: "We brought Rafael on as fractional CMO for our $10M subscription business, and his meticulous project management was exceptional. Within just 3 months, he grasped our industry, streamlined performance metrics, and led successful PPC campaigns across major platforms. Rafael also crafted strategic plans for SEO, CRO, and automation, launched a new product, and expanded into new markets. We’re so impressed with his work that we’re expanding the scope of our fractional executive agreement. Highly recommended for any growth or marketing role.",
    avatar: "images/mptwipjol4cptn716qf6.avif",
    name: "Michael",
    isVerify: true,
    position: "Founder & CEO"
  },
  {
    star: 5,
    detail: "Rafael and the Zendog Labs team are amazing and strategic thinkers. They constantly blew us away with their ability to adapt to our deliverables, manage multiple projects, and think on the fly all while helping us build our business. If you have a chance to work with Zendog Labs - do it!",
    avatar: "images/Emanuel.png",
    name: "Steve",
    isVerify: true,
    position: "CEO & Co-Founder"
  },
  {
    star: 5,
    detail: "Great job again by Zendog Labs! I'm now armed with a very professional pitch deck. It's great getting advice from former VCs. Thoroughly recommend!",
    avatar: "images/1660762379807.jpg",
    name: "Craig",
    isVerify: true,
    position: "Founder & CEO"
  },
  {
    star: 5,
    detail: "I had the pleasure of working with Zendog Labs for our fundraising efforts. Their ability to understand quickly what we do and our vision and their strong knowledge of the startup and fundraising world gave us the perfect support. Thank you very much, and I recommend Zendog Labs 100%.",
    avatar: "images/1652667244382.jpg",
    name: "Vincent",
    isVerify: true,
    position: "Co-Founder & Head Partnerships"
  },
  {
    star: 5,
    detail: "I believe that great sales strategy is the result of great sales tactics, and Zendog Labs helped us double down on the right set of sales tactics for our team. Their growth frameworks are incredibly useful and the team at Zendog Labs is highly analytical. I highly recommend working with them.",
    avatar: "images/1619996071552.jpg",
    name: "Mark",
    isVerify: true,
    position: "SVP Commercial"
  }
]

function toggleQuote(index) {
  expandedQuotes.value[index] = !expandedQuotes.value[index]
}
</script>