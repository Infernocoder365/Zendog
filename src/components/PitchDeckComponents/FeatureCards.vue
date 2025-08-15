<template>
  <section class="py-[calc(10vmax/10)] sm:py-[calc(12vmax/10)] md:py-[calc(15vmax/10)] overflow-hidden">
    <div
      class="relative z-[14] w-full text-primary grid col-[1/-1] row-[1/-1] [--grid-gutter:calc(5vw_-_11.0px)] sm:[--grid-gutter:calc(7vw_-_11.0px)] md:[--grid-gutter:calc(10vw_-_11.0px)] [--container-width:min(1900px,calc(100vw_-_5vw_*_2_-_0vw))] sm:[--container-width:min(1900px,calc(100vw_-_7vw_*_2_-_0vw))] md:[--container-width:min(1900px,calc(100vw_-_10vw_*_2_-_0vw))] [--cell-max-width:calc((1900px_-_(11.0px_*_(24_-_1)))_/_24)] grid-rows-[repeat(20,minmax(calc(var(--container-width)_*_0.0215),auto))] grid-cols-[minmax(var(--grid-gutter),1fr)_repeat(24,minmax(0,var(--cell-max-width)))_minmax(var(--grid-gutter),1fr)] gap-[11px]">
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
          <a
            class="mt-2 bg-primary text-black px-12 rounded-md transition duration-300 text-md font-heading text-center">
            Ok, let's start
        </a>
        </div>
        <img :src="card.icon" :alt="card.title" class="h-[100px] sm:h-[40%] mb-4 sm:mb-0">
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icon: '/images/triple_4.png',
    title: 'Don’t risk going it alone – you’ll likely fail',
    description: 'Only 1% of startups get funded. Whether you’re at Series B or Seed, raising capital is an uphill battle.',
    gradient: 'from-primary/5 to-primary/10',
    border: 'border-primary/20',
    mobileRow: 'row-[1/8]',
    tabletRow: 'sm:row-[1/8]',
    desktopRow: 'md:row-[1/8]',
    mobileCol: 'col-[3/26]',
    tabletCol: 'sm:col-[4/24]',
    desktopCol: 'md:col-[6/18]',
    tabletDirection: 'sm:flex-row',
    desktopDirection: 'md:flex-row'
  },
  {
    icon: '/images/triple_3.png',
    title: 'The pitch deck is your secret weapon',
    description: `It's the one variable you have full control over, and it can significantly increase your odds of getting funded.`,
    gradient: 'from-secondary/5 to-secondary/10',
    border: 'border-secondary/20',
    mobileRow: 'row-[10/17]',
    tabletRow: 'sm:row-[10/17]',
    desktopRow: 'md:row-[10/17]',
    mobileCol: 'col-[3/26]',
    tabletCol: 'sm:col-[4/24]',
    desktopCol: 'md:col-[11/23]',
    tabletDirection: 'sm:flex-row',
    desktopDirection: 'md:flex-row-reverse'
  },
  {
    icon: '/images/triple_1.png',
    title: 'Great pitch decks create massive value',
    description: 'At a $10M ask, an improved deck means $1.9M in value if it takes you from a 1% to a 20% probability.',
    gradient: 'from-tertiary/5 to-tertiary/10',
    border: 'border-tertiary/20',
    mobileRow: 'row-[18/25]',
    tabletRow: 'sm:row-[18/25]',
    desktopRow: 'md:row-[18/25]',
    mobileCol: 'col-[3/26]',
    tabletCol: 'sm:col-[4/24]',
    desktopCol: 'md:col-[6/18]',
    tabletDirection: 'sm:flex-row',
    desktopDirection: 'md:flex-row'
  }
];
</script>