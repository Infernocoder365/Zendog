<template>
  <section class="py-[calc(10vmax/10)] sm:py-[calc(12vmax/10)] md:py-[calc(15vmax/10)] overflow-hidden">
    <div
      class="relative z-[14] w-full text-primary grid col-[1/-1] row-[1/-1] [--grid-gutter:calc(5vw_-_11.0px)] sm:[--grid-gutter:calc(7vw_-_11.0px)] md:[--grid-gutter:calc(10vw_-_11.0px)] [--container-width:min(1900px,calc(100vw_-_5vw_*_2_-_0vw))] sm:[--container-width:min(1900px,calc(100vw_-_7vw_*_2_-_0vw))] md:[--container-width:min(1900px,calc(100vw_-_10vw_*_2_-_0vw))] [--cell-max-width:calc((1900px_-_(11.0px_*_(24_-_1)))_/_24)] grid-rows-[repeat(15,minmax(calc(var(--container-width)_*_0.0215),auto))] grid-cols-[minmax(var(--grid-gutter),1fr)_repeat(24,minmax(0,var(--cell-max-width)))_minmax(var(--grid-gutter),1fr)] gap-[11px]">
      <!-- Feature Cards -->
      <div v-for="card, index in cards" :key="card.title"
        :class="[`bg-white p-4 sm:p-6 md:p-8 drop-shadow-[2px_2px_3px] text-white rounded-lg border ${card.border} hover:shadow-lg transition-all duration-300 ${card.mobileRow} ${card.tabletRow} ${card.desktopRow} ${card.mobileCol} ${card.tabletCol} ${card.desktopCol} h-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[11px] ${card.tabletDirection} ${card.desktopDirection}`]">

        <div class="items-center flex flex-col">
          <h2 class="text-xl md:text-2xl leading-tight text-black mb-2 sm:mb-3 md:mb-4 text-center font-[800]">
            {{ card.title }}
          </h2>
          <p
            class="font-base text-sm sm:text-base font-normal leading-relaxed sm:leading-body tracking-body text-black text-center">
            {{ card.description }}
          </p>
          <router-link
            :to="{ name: 'home', hash: '#contact' }"
            class="w-full bg-[#FF2E93] hover:bg-[#FF2E93]/90 text-white font-header-button text-body leading-header-button tracking-header-button py-4 rounded-md transition-colors duration-200 text-center block"
          >
            Schedule call
          </router-link>
        </div>
        <img :src="card.icon" :alt="card.title" class="h-[100px] sm:h-[40%] mb-4 sm:mb-0">
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icon: '/images/triple_4.webp',
    title: 'But the reality is, the odds are stacked against you',
    description: `Only 1% of start-ups get funded. It's challenging for first-time founders and serial entrepreneurs alike.`,
    gradient: 'from-primary/5 to-primary/10',
    border: 'border-primary/20',
    mobileRow: 'row-[1/5]',
    tabletRow: 'sm:row-[1/5]',
    desktopRow: 'md:row-[1/5]',
    mobileCol: 'col-[3/26]',
    tabletCol: 'sm:col-[4/25]',
    desktopCol: 'md:col-[6/19]',
    tabletDirection: 'sm:flex-row',
    desktopDirection: 'md:flex-row'
  },
  {
    icon: '/images/triple_2.png',
    title: `And investors don't tell you why they passed`,
    description: `Investors are not incentivized to give you feedback. This leaves you guessing about what to improve.`,
    gradient: 'from-secondary/5 to-secondary/10',
    border: 'border-secondary/20',
    mobileRow: 'row-[6/10]',
    tabletRow: 'sm:row-[6/10]',
    desktopRow: 'md:row-[6/10]',
    mobileCol: 'col-[3/26]',
    tabletCol: 'sm:col-[3/24]',
    desktopCol: 'md:col-[10/23]',
    tabletDirection: 'sm:flex-row',
    desktopDirection: 'md:flex-row-reverse'
  },
  {
    icon: '/images/triple_5.webp',
    title: 'Unsuccessful fundraising is a major setback for you',
    description: `With 99% of start-ups failing to secure funding, you waste time and kill your team's trust in you.`,
    gradient: 'from-tertiary/5 to-tertiary/10',
    border: 'border-tertiary/20',
    mobileRow: 'row-[11/15]',
    tabletRow: 'sm:row-[11/15]',
    desktopRow: 'md:row-[11/15]',
    mobileCol: 'col-[3/26]',
    tabletCol: 'sm:col-[4/25]',
    desktopCol: 'md:col-[6/19]',
    tabletDirection: 'sm:flex-row',
    desktopDirection: 'md:flex-row'
  }
];
</script>