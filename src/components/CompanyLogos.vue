<template>
  <section class="py-[calc(25vmax/10)] overflow-hidden">
    <div class="relative z-[14] w-full text-text-primary grid col-[1/-1] row-[1/-1] [--grid-gutter:calc(10vw_-_5.0px)] [--container-width:min(1900px,calc(100vw_-_10vw_*_2_-_0vw))] [--cell-max-width:calc((1900px_-_(5.0px_*_(24_-_1)))_/_24)] grid-rows-[repeat(6,minmax(calc(var(--container-width)_*_0.0215),auto))] grid-cols-[minmax(var(--grid-gutter),1fr)_repeat(24,minmax(0,var(--cell-max-width)))_minmax(var(--grid-gutter),1fr)] gap-[5px]">
      <!-- Section Header -->
      <div class="row-[1/2] col-[2/12]">
        <h2 class="font-heading text-3xl font-heading leading-heading tracking-heading text-primary mb-4">
          You're in good company
        </h2>
      </div>

      <!-- Logo Carousel -->
      <div class="relative row-[2/6] col-[2/24] overflow-x-hidden">
        <div class="marquee-container flex flex-row relative w-full">
          <div class="marquee-content flex-none min-w-max z-[1] flex flex-row items-center">
            <div class="inline-flex">
              <div v-for="(logo, index) in [...logos, ...logos]" :key="`${logo.name}-${index}`" 
                   class="mx-[5px] w-32 max-h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <img :src="logo.src" :alt="logo.name" class="max-w-full max-h-full object-contain">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  { name: 'Logo of Credit Suisse: A global financial services company offering comprehensive investment banking, private banking, and asset management services.', src: '/images/Logos-Various.jpg' },
  { name: 'Logo of Softbank: A leading venture capital investment firm known for its strategic investments in technology and innovation.', src: '/images/5.jpg' },
  { name: 'Logo of Founders Fund: A venture capital firm specializing in early-stage investments in technology-driven startups.', src: '/images/6.jpg' },
  { name: 'Logo of Roivant: A leading biopharmaceutical company focused on developing and commercializing innovative therapies to address unmet medical needs.', src: '/images/1.jpg' },
  { name: 'Logo of our customer Freudenberg Group, a global technology company specializing in innovative solutions across multiple industries, headquartered in Germany.', src: '/images/2.jpg' },
  { name: 'Logo of our customer VAMED, a leading player in hospital management and construction', src: '/images/VAMED---200x100.png' },
  { name: 'Logo of EZContacts: An online retailer specializing in eyewear, including prescription glasses, sunglasses, and contact lenses.', src: '/images/Logos-Various.jpg' },
  { name: 'Logo of our customer Neuroth-Gruppe, an Austrian acoustics company specializing in hearing solutions and audiology services across Europe.', src: '/images/3.jpg' },
  { name: 'Logo of our customer Corza Medical, a PE-backed scale-up in the medical devices industry based in Frankfurt', src: '/images/Corza---200x100.png' },
  { name: 'Logo of Saldo Bank, a leading consumer and merchant bank in Scandinavia and Lithuania.', src: '/images/Logo-Saldo-Bank.jpg' },
  { name: 'Logo of WinHQ: An online betting company based in Singapore, specializing in innovative and secure betting solutions with a focus on reliability and excitement.', src: '/images/Logos-Various.png' },
  { name: 'Logo of our customer The Otaku Box, an 8-figure ecommerce seller out of the US and Japan ', src: '/images/Logo-Otaku.png' },
  { name: 'Logo of Originality AI, a leading tool for detecting AI-generated content and ensuring originality.', src: '/images/Logo-Originality-AI.jpg' },
  { name: 'Logo of our customer LeadsMarket, an affiliate marketing start-up from San Francisco', src: '/images/LeadsMarket---200x100.png' },
  { name: 'Logo of Lokavant: A leading data science company specializing in clinical trial optimization and real-world evidence solutions.', src: '/images/2.jpg' },
  { name: 'Logo of Paw Origins, a leading startup in animal health.', src: '/images/Logo-Paw-Origins.jpg' },
  { name: 'Logo of Dante AI, a leading technology provider for engaging, educating, and converting customers through advanced conversational AI solutions.', src: '/images/Logo-Dante-AI.jpg' },
  { name: 'Logo of Maison Baum: A luxury fashion brand known for its sophisticated and contemporary designs.', src: '/images/4.jpg' },
  { name: 'Logo of our customer The Shade, a premium hair colour and hair care brand which ships its products DTC throughout Australia and Overseas and has sold over 100,000 hair colour kits.', src: '/images/Logo-The-Shade-1-.png' },
  { name: 'Logo of our customer Hillcour, a principal investment firm with majority/minority investments in healthcare, technology, retail, real estate and pharmaceutical services.', src: '/images/Logo-Hillcour.png' },
  { name: 'Logo of our customer Brightfield Group, a PE-backed hybrid B2B SaaS / consulting firm providing incumbent and contestant CPG companies with customer intelligence.', src: '/images/Logo-Brightfield-Group.png' },
  { name: 'Logo of our customer MonTransport, a start-up from Paris that brands itself as the “Skyscanner for cabs"', src: '/images/monTransport---200x100.png' },
  { name: 'Logo of our customer MeeOpp, an education technology start-up out of Hong Kong', src: '/images/Logo---MeeOpp.png' },
  { name: 'QUANTUM Logo: Representing a global community of top IT and digital experts, connecting companies with agile teams from Munich, Würzburg, and Málaga for digital project success.', src: '/images/1.jpg' },
  { name: 'Logo of Rfox, leading Metaverse as a Service builders. Depicting their core offering, the RFOX VALT, a metaverse hub for ecommerce and entertainment utilizing immersive virtual reality technology.', src: '/images/Logo-Rfox.png' },
  { name: '          alt=""', src: '/images/Logo-Eve-Exchange.jpg' },
  { name: 'Logo of our customer Intellivy, a B2B SaaS MarTech start-up based out of the Netherlands', src: '/images/Logo---Intellivy.png' },
  { name: 'Logo of our customer Datrix Group, a publicly-listed technology investment platform out of Milan, Italy', src: '/images/Datrix---200x100.png' },
  { name: 'Logo of our customer ByTek, a MarTech start-up from Milan that was acquired by Datrix Group', src: '/images/Logo---ByTek-Marketing---Copy.png' },
  { name: 'Logo of our customer Funden, an investor matchmaking platform out of San Francisco that helps start-ups looking to raise capital', src: '/images/Funden----white---200x100.png' },
  { name: 'Logo for Prep Business, a subsidiary of Jasara Tech, a B2B SaaS platform specializing in inventory management solutions tailored for Amazon FBA prep centers.', src: '/images/Logos-Various.jpg' },
  { name: 'Logo of our customer SOLO, a B2B SaaS in FinTech from New York', src: '/images/Solo---200x100.png' },
  { name: 'Eora: Innovative hearing aid jewelry that combines advanced technology with stylish, customizable designs.', src: '/images/Logos-Various.jpg' },
  { name: 'Logo of our customer Replayable, a DevTech start-up out of Austin, Texas', src: '/images/Logo---Replayable.png' },
  { name: 'Taxhackers.io Logo: Leading the way in tax-free company setups for digital nomads. Empowering professionals to optimize taxes legally, maximize profits, and live a life of freedom.', src: '/images/2.jpg' },
  { name: 'Logo of our customer Unstrap, an e-commerce start-up out of Hong Kong selling high-end accessories for Apple products', src: '/images/Logo---Unstrap.png' },
  { name: 'Logo of our customer Tesslift, a MedTech start-up that\'s distributing products from its South Korean parent in Germany', src: '/images/Logo---Tesslift.png' },
  { name: 'Logo of our customer Atoro, a cybersecurity consulting firm in Ireland', src: '/images/Logo-Atoro.png' },
  { name: 'Logo of our customer Aryo Logistics, a start-up in supply chain and logistics consulting from Boston', src: '/images/Aryo---200x100.png' },
  { name: 'Logo of our customer Bird Collaborative, a start-up based in Dubai in the sustainable e-commerce space', src: '/images/Bird---200x100.png' },
  { name: 'Logo of our customer Nowy, a B2B2C marketplace in the travel industry out of Washington D.C.', src: '/images/Logo---Nowy.png' },
  { name: 'Logo of our customer Hop Delivery, a growth management platform for upscale restaurants for which we build the pitch deck for their Series A', src: '/images/Logo-Hop-Delivery.png' },
  { name: 'Logo of our customer Vtuls, a digital health start-up from Switzerland for who we built a pitch deck to raise venture capital', src: '/images/Logo---Vtuls.png' },
  { name: 'Logo of our customer OptiLegal, a contract management start-up in the LegalTech space', src: '/images/Logo---OptiLegal--1-.png' },
  { name: 'Logo of our customer PistonDAO, a web3 DAO that fractionalizes ownership of valuable old-timers by minting and selling NFTs', src: '/images/Logo---PistonDAO.png' },
  { name: 'Logo of our customer Performify, an AI-powered performance assistant for marketers based out of Alabama in the US', src: '/images/Logo-Performify.png' },
  { name: 'Tutosh logo: B2C SaaS startup providing accessible private tutoring for high school students.', src: '/images/Logo-Tutosh.png' },
  { name: 'Logo of our customer FitCraft, a mobile fitness gaming app/start-up from New York', src: '/images/FitCraft---200x100---Copy.png' },
  { name: 'Logo of our customer ETF Insider, a FinTech start-up based in Tel Aviv that is making ETF investing more accessible for retail investors', src: '/images/ETF-Insider---200x100.png' },
  { name: 'Logo of our customer 2050 Farms, a Farming 4.0. start-up out of Oklahoma', src: '/images/2050-Farms---200x100.png' },
  { name: 'Logo of our customer Eatearnity, a digital health start-up paying consumers for eating healthier based in Basel and Cologne', src: '/images/Eatearnity---200x100.png' },
  { name: 'Logo of our partner oezpa, an established management consulting firm in Germany', src: '/images/Oezpa---200x100.png' },
];
</script>

<style scoped>
.marquee-container {
  --pause-on-hover: running;
  --pause-on-click: running;
  --width: 100%;
  --transform: none;
  transform: var(--transform);
}

.marquee-content {
  --play: running;
  --direction: normal;
  --duration: 146.74242424242425s;
  --delay: 0s;
  --iteration-count: infinite;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>