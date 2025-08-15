<template>
  <section class="relative pt-[calc(4vw+3rem)] sm:pt-[calc(4vw+3.5rem)] md:pt-[calc(4vw+4rem)] pb-[4vw] sm:pb-[5vw] md:pb-[6vw] min-h-[90vh] sm:min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Case Studies Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-10 max-w-5xl mx-auto">
        <div v-for="study in caseStudies" :key="study.logo"
          class="rounded-lg hover:shadow-lg transition-all duration-300 mb-4 sm:mb-6 p-6">
          <img :src="study.logo" :alt="study.description" class="w-full transition-transform duration-300 transform hover:scale-110" />
          <p class="text-heading-4 font-heading text-white mt-5 sm:mt-5">
            {{ study.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const caseStudies = [
  {
    logo: '/images/case/2.png',
    description: "Fractional Chief Marketing Officer for Global Brand: Increasing Revenue by 30% to $10M"
  },
  {
    logo: '/images/case/3.png',
    description: "$1 Million ARR in First Month: Launching The Yaoi Box, A Fan-Favorite Subscription Box"
  },
  {
    logo: '/images/case/13.png',
    description: "VC-In-Residence for Funden, the #1 Fundraising Platform for Startups (Exited)"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails.png',
    description: "VAMED: Defining the 2030 Vision for a $1 Billion Healthcare Company"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails+(1).png',
    description: "Corza Medical: Commercial Excellence for $30M+ PE-Backed Company"
  },
  {
    logo: '/images/case/6.png',
    description: "Transforming Intellivy: Go-To-Market Strategy to Scale from $3M to $10M ARR"
  },
  {
    logo: '/images/case/4.png',
    description: "Brightfield Group: Executive Coaching with CEO of a $5M MarTech and Consulting Firm"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails+(2).png',
    description: "Dante AI: Growth and Funnel Optimization for a Leading GenAI Company"
  },
  {
    logo: '/images/case/3(1).png',
    description: "SOLO: Raising $1M and Expanding Enterprise Sales in FinTech"
  },
  {
    logo: '/images/case/8.png',
    description: "Launching ByTek in the US: Market Entry Strategy for SEO Technology Company"
  },
  {
    logo: '/images/case/9.png',
    description: "Expanding LeadsMarket to Europe: Market Entry Strategy for $50M+ FinTech Company"
  },
  {
    logo: '/images/case/16.png',
    description: "CRM Migration: Fueling MeeOpp’s Growth from $1M to $10M ARR"
  },
  {
    logo: '/images/case/15.png',
    description: "Unstrap: Executive Coaching to Grow a $5M E-Commerce Marketing Plan"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails+(3).png',
    description: "Atoro: Executive Coaching for Growth and Channel Diversification"
  },
  {
    logo: '/images/case/11.png',
    description: "Bird Collaborative: Strategy and Team Coaching for a ClimateTech Company"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails(1).png',
    description: "Launching ETF Insider: Go-To-Market Plan That Resulted in 60K+ Monthly Traffic"
  },
  {
    logo: '/images/case/7.png',
    description: "Aryo Logistics: Strategic Expansion into New High-Potential Industries"
  },
  {
    logo: '/images/case/12.png',
    description: "Turning Around FitCraft: Go-To-Market Strategy and Cap Table Advisory"
  },
  {
    logo: '/images/case/2(1).png',
    description: "Hop Delivery: Pitch Deck and Fundraising Strategy for FoodTech"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails(2).png',
    description: "Vtuls: Fundraising Strategy and Pitch Deck for HealthTech Startup"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails+(4).png',
    description: "Eve Exchange: Pitch Deck Review and Fundraising Strategy for DeFi Startup"
  },
  {
    logo: '/images/case/Upwork+-+Case+Studies+-+Thumbnails(3).png',
    description: "Leveling Up Piston DAO's Fundraising: A Pitch Deck Transformation"
  },
  {
    logo: '/images/case/5.png',
    description: "Fundraising for Susterra: Pitch Deck Review and VC Advice"
  }
]
</script>