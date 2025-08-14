<template>
  <section class="py-[calc(15vmax/10)] overflow-hidden">
    <div
      class="relative z-[14] w-full text-primary grid col-[1/-1] row-[1/-1] [--grid-gutter:calc(10vw_-_11.0px)] [--container-width:min(1900px,calc(100vw_-_10vw_*_2_-_0vw))] [--cell-max-width:calc((1900px_-_(11.0px_*_(24_-_1)))_/_24)] grid-rows-[repeat(30,minmax(calc(var(--container-width)_*_0.0215),auto))] grid-cols-[minmax(var(--grid-gutter),1fr)_repeat(24,minmax(0,var(--cell-max-width)))_minmax(var(--grid-gutter),1fr)] gap-[11px]">
      <!-- Section Header -->
      <div class="row-[1/5] col-[3/23]">
        <h2 class="text-4xl font-heading leading-heading tracking-heading text-primary mb-4 text-center">
          The triple threat to revenue growth
        </h2>
      </div>
      <div class="row-[3/5] col-[5/23]">
        <p class="font-body text-lg font-normal leading-body tracking-body text-text-secondary text-center">
          Poor product-market fit, an unscalable go-to-market strategy, and lack of capital are the primary root causes
          that stop businesses from growing—and it’s what keeps founders, executives, and investors up at night.
        </p>
      </div>
      <!-- Feature Cards -->
      <div v-for="card, index in cards" :key="card.title"
        :class="[`bg-white p-8 drop-shadow-[2px_2px_3px] text-white rounded-lg border ${card.border} hover:shadow-lg transition-all duration-300 ${card.row} ${card.col} h-full flex justify-center items-center gap-[11px] ${card.direction}`]">

        <img :src="card.icon" :alt="card.title" class="h-[50%]">
        <div>
          <h2 class="text-3xl font-heading leading-heading tracking-heading text-black mb-4 text-center font-[800]">
            {{ card.title }}
          </h2>
          <p class="font-body text-lg font-normal leading-body tracking-body text-black text-center">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icon: '/images/triple_1.png',
    title: 'Product-market fit',
    description: 'Traction stays flat without a product that clicks with customers. If progress feels like an uphill battle, it\'s time to adjust your product or pivot to a new market.',
    gradient: 'from-primary/5 to-primary/10',
    border: 'border-primary/20',
    row: 'row-[6/13]',
    col: 'col-[5/18]',
    direction: ''
  },
  {
    icon: '/images/triple_2.png',
    title: 'Go-to-market scalability',
    description: 'When revenue stops scaling, it\'s time to recalibrate your go-to-market strategy and optimize processes and infrastructure at every stage of the customer journey.',
    gradient: 'from-secondary/5 to-secondary/10',
    border: 'border-secondary/20',
    row: 'row-[14/21]',
    col: 'col-[10/23]',
    direction: 'flex-row-reverse'
  },
  {
    icon: '/images/triple_3.png',
    title: 'Venture capital',
    description: 'Capital is the lifeblood of growth, yet a scant 1% of companies manage to secure it. Crafting an investor-ready case amid competing priorities is no small feat.',
    gradient: 'from-tertiary/5 to-tertiary/10',
    border: 'border-tertiary/20',
    row: 'row-[22/29]',
    col: 'col-[5/18]',
    direction: ''
  }
];
</script>