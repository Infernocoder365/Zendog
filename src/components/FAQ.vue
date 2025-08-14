<template>
  <section class="pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-heading text-heading-2 leading-heading tracking-heading text-primary mb-4">
          Frequently asked questions
        </h2>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-2xl mx-auto">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="border-y mx-6 border-white overflow-hidden"
        >
          <!-- Question -->
          <button 
            @click="toggleFAQ(index)"
            class="w-full px-0 py-4 text-left transition-colors duration-200 flex justify-between items-center"
          >
            <h3 class="font-body text-heading-4 leading-heading tracking-heading text-white">
              {{ item.question }}
            </h3>
            <div 
              class="h-4 w-4 flex items-center justify-center" 
              :data-is-open="openItems[index]" 
              aria-hidden="true"
            >
              <!-- Plus Icon -->
              <span class="relative block w-3.5 h-3.5">
                <!-- Horizontal line -->
                <span class="absolute left-0 right-0 top-1/2 w-full h-0.5 bg-white -translate-y-1/2"></span>
                <!-- Vertical line, rotates when closed -->
                <span 
                  class="absolute left-0 right-0 top-1/2 w-full h-0.5 bg-white -translate-y-1/2 transition-transform duration-200"
                  :class="openItems[index] ? '' : 'rotate-90'"
                ></span>
              </span>
            </div>
          </button>
          
          <!-- Answer -->
          <div
            :class="[
              'overflow-hidden transition-all duration-300',
              openItems[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            ]"
          >
            <div
              class="text-lg text-white min-w-[70%] max-w-[300px] pb-[30px] faq-markdown ml-10"
              v-html="renderMarkdown(item.answer)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { marked } from 'marked'
const openItems = ref({})

const faqItems = [
  {
    question: "What industries do you focus on?",
    answer: `We primarily work in technology and e-commerce, but we also have experience with major brick-and-mortar businesses:
- **Healthcare:** e.g., VAMED, Neuroth, Corza Medical, TESSLIFT, eora, Retain Health, Vtuls, FitCraft
- **E-commerce:** e.g., EzContacts, The Otaku Box, Paw Origins, UNSTRAP, The Shade, Mabele
- **FinTech:** e.g., Funden, SOLO, Saldo Bank, ETF Insider
- **GenAI:** e.g., [originality.ai](http://originality.ai), Dante AI, txt2create, Serenio AI
- **MarTech:** e.g., Intellivy, BYTEK, [LeadsMarket.com](http://LeadsMarket.com), Performify
- **Web3:** e.g., RFOX, Eve Exchange, PistonDAO
- **EduTech:** e.g., MeeOpp, Stigmi Learning, Tutosh
- **Logistics:** e.g., Jasara Tech, PrepBusiness, Aryo Logistics
- **CyberSec:** e.g., Atoro, Replayable
- **TravelTech:** e.g., monTransport, Nowy
- **LegalTech:** e.g., taxhackers.io, [mybusiness.ca](http://mybusiness.ca)
- **Services:** e.g., Brightfield Group, QUANTUM
- **ClimateTech:** e.g., Bird Collaborative
- **AgriTech:** e.g., KoraLabs
- **PropTech:** e.g., Kucha
- **FoodTech:** e.g., Hop Delivery
- **(i)Gaming:** e.g., KZ Group
- **Industrial:** Freudenberg`
  },
  {
    question: "What geographies do you have expertise in?",
    answer: `We have expertise in North America, Europe, the Middle East, and Asia.`
  },
  {
    question: "How do you typically work with clients?",
    answer: `At Zendog Labs, we typically offer two engagement models:
- **Model 1 – Growth Advisor:** Our engagement usually begins with a strategy development phase. From there, we provide ongoing advisory and coaching while you and your team execute the strategy we create. Alternatively, we can coach you through developing and executing your own strategy.
- **Model 2 – Growth Executive:** We start by understanding your team, product, customers, and channels. We then collaborate with your C-Level or Board to identify and validate key performance indicators (KPIs). Finally, we establish a single source of truth for tracking these KPIs and implement strategic game plans to enhance`
  },
  {
    question: "What is your pricing model?",
    answer: `Our pricing is based on project scope and requirements. Please contact us to discuss your needs and receive a tailored proposal.`
  },
  {
    question: "Who benefits the most from working with you?",
    answer: `To work with us, you'll need to:
- Recognize that high-end advice comes at a cost.
- Be ready to take calibrated bets to grow the company.
- Always treat your team, vendors, and advisors with respect.`
  }
]

const renderMarkdown = (md) => marked.parse(md)
const toggleFAQ = (index) => {
  openItems.value[index] = !openItems.value[index]
}
</script>

<style>
.faq-markdown ul {
  list-style-type: circle;
  margin-left: 1.5em;
  padding-left: 0;
}
.faq-markdown li {
  margin-bottom: 0.5em;
}
</style>