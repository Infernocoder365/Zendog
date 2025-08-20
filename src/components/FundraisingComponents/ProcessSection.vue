<template>
  <section class="bg-black text-white py-12">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary">We help you beat the odds in 3 simple steps</h2>
        <p class="text-white max-w-6xl mx-auto px-5">
          Beat the odds with a process you can complete in less than 7 days and that gives you the advice and training you need to get funded.
        </p>
      </div>
      
      <div class=" max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mx-auto">
        <div 
          v-for="(step, index) in processSteps" 
          :key="index"
          class="rounded-lg relative flex flex-col items-center justify-center"
        >
          <div class="text-white font-bold">
            STEP {{ step.index }}
          </div>
          <h3 class="text-xl font-bold mb-8 mt-8">{{ step.title }}</h3>
          <p class="text-white text-center font-body">
            {{ step.description }}
          </p>
          <div v-if="step.counterWithUnit" class="mt-6 text-center bg-white w-full rounded-lg p-5">
            <div class="flex flex-col items-center justify-center mb-2">
              <span v-if="step.counterIcon" class="mr-2 flex items-center justify-center">
                <div class="w-[52px] h-[52px] text-primary" v-html="step.counterIcon"></div>
              </span>
              <span class="text-[3rem] font-bold text-primary">{{ step.counterWithUnit }}</span>
            </div>
            <p class="text-sm text-black">{{ step.counterDescription }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <router-link
        :to="{ name: 'home', hash: '#contact' }"
        class="mt-2 bg-primary text-black px-12 rounded-md transition duration-300 text-md font-heading text-center"
      >
        Schedule strategy call
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const processSteps = ref([
  {
    index: 1,
    title: 'Pitch deck review',
    description: 'Get strategic and tactical feedback on your deck and investment case. Expect honest, direct feedback in writing and via Loom.',
    counterIcon: '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="injected-svg" data-src="https://static.elfsight.com/icons/app-number-counter-handshake.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M33.865 14.577 28.36 5.472a.938.938 0 0 0-1.18-.373l-3.363 1.477L18.63 5.04a.937.937 0 0 0-.72.079l-5.973 3.303-3.441-2.203a.937.937 0 0 0-1.308.304l-5.054 8.36a.938.938 0 0 0 .299 1.276l2.126 1.356-.43.574a2.628 2.628 0 0 0 2.095 4.2c.05 0 .101-.003.152-.006a2.61 2.61 0 0 0 .98 1.504 2.611 2.611 0 0 0 1.72.52 2.6 2.6 0 0 0 .981 1.504 2.605 2.605 0 0 0 1.72.52c.136.58.467 1.12.981 1.504a2.623 2.623 0 0 0 3.675-.526l.084-.113 3.75 2.668a2.74 2.74 0 0 0 1.594.51 2.752 2.752 0 0 0 2.698-2.186 2.76 2.76 0 0 0 2.757-1.092 2.72 2.72 0 0 0 .512-1.587 2.745 2.745 0 0 0 1.906-1.122 2.71 2.71 0 0 0 .497-1.295 2.757 2.757 0 0 0 2.304-1.14 2.711 2.711 0 0 0 .479-2.043 2.72 2.72 0 0 0-1.114-1.783l-.91-.647 2.572-1.624a.938.938 0 0 0 .302-1.278zM6.83 20.113a.745.745 0 0 1-.494.292.75.75 0 0 1-.707-1.192l1.23-1.64a.75.75 0 0 1 1.2.9l-1.23 1.64zm2.7 2.024a.75.75 0 0 1-1.2-.9l1.23-1.64.865-1.155a.745.745 0 0 1 .494-.293.75.75 0 0 1 .707 1.192l-2.095 2.796zm2.702 2.023a.745.745 0 0 1-.494.293.745.745 0 0 1-.556-.142.745.745 0 0 1-.293-.494.745.745 0 0 1 .142-.556l2.095-2.795.381-.51a.745.745 0 0 1 .602-.3.745.745 0 0 1 .74.644.745.745 0 0 1-.141.556l-2.476 3.304zm3.93.384-1.23 1.64a.75.75 0 0 1-1.2-.9l1.23-1.64a.745.745 0 0 1 .493-.292.75.75 0 0 1 .707 1.192zm15.002-4.329a.85.85 0 0 1-.15.64.88.88 0 0 1-1.224.201l-.678-.483-3.785-2.691a.938.938 0 0 0-1.087 1.528l3.777 2.686a.86.86 0 0 1 .195 1.196.88.88 0 0 1-1.223.2l-.297-.21v-.001l-2.923-2.078a.937.937 0 1 0-1.086 1.528l2.915 2.073a.86.86 0 0 1 .196 1.197.88.88 0 0 1-1.224.2l-1.04-.74-1.573-1.12a.938.938 0 0 0-1.087 1.529l1.546 1.1a.855.855 0 0 1 .16 1.167.881.881 0 0 1-1.222.2l-3.712-2.642.02-.026a2.628 2.628 0 0 0-1.227-4.05c.254-.484.35-1.033.27-1.584a2.608 2.608 0 0 0-1.024-1.729 2.608 2.608 0 0 0-2.24-.438 2.608 2.608 0 0 0-.842-1.076 2.607 2.607 0 0 0-1.947-.498 2.62 2.62 0 0 0-.967.34 2.63 2.63 0 0 0-3.949-.59l-1.524-.973 4.083-6.754 1.776 1.137-1.175.65a.938.938 0 0 0-.482.757 3.735 3.735 0 0 0 .394 1.934 3.78 3.78 0 0 0 5.053 1.667l4.352-2.173 2.207.032 8.348 5.878 2.044 1.455c.19.134.314.334.352.561zm-1.828-3.91-8.073-5.683a.938.938 0 0 0-.526-.171l-2.724-.04H18a.937.937 0 0 0-.419.098l-4.556 2.276a1.9 1.9 0 0 1-2.543-.835 1.867 1.867 0 0 1-.166-.488l8.159-4.512 5.14 1.522c.212.063.44.048.643-.04l2.924-1.285 4.602 7.613-2.447 1.545z"></path></svg></div>',
    counterWithUnit: '100+',
    counterDescription: 'Startups supported'
  },
  {
    index: 2,
    title: 'Pitch simulation',
    description: `Experience a realistic pitch simulation where you'll be grilled with questions and receive tips on how you can improve your pitch delivery.`,
    counterIcon: '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="injected-svg" data-src="https://static.elfsight.com/icons/app-number-counter-muscle.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M13.434 1c.945.021 2.674.435 3.639 2.973.608 1.6.22 3.266-1.094 4.689a2.58 2.58 0 0 1-2.571.75c-1.142-.306-1.97.345-2.375.78 1.423 3.46 1.52 5.437 1.39 7.861a7.318 7.318 0 0 1 3.959-1.167c1.243 0 2.442.309 3.514.9a8.371 8.371 0 0 1 6.53-3.113c2.21 0 3.585.743 4.699 2.208.896 1.178 1.68 4.687 1.68 6.6 0 1.944-1.015 3.63-2.934 4.875-3.108 2.017-7.867 2.501-10.427 2.61-.53.023-1.06.034-1.582.034-3.073 0-5.895-.382-7.324-1.02-3.705-1.654-6.625-2.065-6.654-2.07a.904.904 0 0 1-.742-.632c-.495-1.624.42-7.204 1.008-10.385.75-4.05 1.865-8.97 2.667-10.832.52-1.21 1.486-2.455 2.65-3.417 1.315-1.086 2.723-1.67 3.967-1.643zm-.063 1.808h-.024c-1.785 0-4.074 2.118-4.87 3.967-.626 1.454-1.698 5.848-2.55 10.447-.867 4.685-1.174 7.752-1.121 9.015 1.133.22 3.567.797 6.47 2.092 2.556 1.142 12.858 1.594 17.611-1.49 1.42-.92 2.11-2.019 2.11-3.358 0-2.338-.793-7-4.571-7a6.57 6.57 0 0 0-5.064 2.37c.73.695 1.343 1.536 1.43 1.656a.904.904 0 0 1-1.469 1.055c-.259-.36-1.07-1.388-1.697-1.808l-.014-.01-.014-.01a5.446 5.446 0 0 0-3.216-1.04c-2.556 0-4.81 1.807-5.36 4.298a.904.904 0 1 1-1.765-.39 7.292 7.292 0 0 1 1.17-2.634c.157-1.14.809-4.998-1.26-9.534a.904.904 0 0 1 .056-.854c.585-.937 2.31-2.543 4.654-1.913a.789.789 0 0 0 .774-.232c.848-.918 1.094-1.867.732-2.82-.676-1.778-1.664-1.8-1.988-1.807h-.048zm6.474 21.973a.28.28 0 0 1 .03.125c0 .313-.169.6-.441.754-.775.435-1.722.652-2.84.652-1.118 0-2.065-.217-2.84-.652a.864.864 0 0 1-.441-.754.28.28 0 0 1 .406-.25c.958.48 1.916.719 2.875.719.958 0 1.916-.24 2.875-.72a.28.28 0 0 1 .376.126z"></path></svg></div>',
    counterWithUnit: '$3B+',
    counterDescription: 'Capital raised'
  },
  {
    index: 3,
    title: 'Ongoing support',
    description: 'Receive a second review of your updated deck and ongoing support through email, chat, or calls for all your fundraising questions.',
    counterIcon: '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="injected-svg" data-src="https://static.elfsight.com/icons/app-number-counter-like.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M22.068 5.006c1.328.005 2.494.716 3.12 1.903.535 1.017.66 2.328.363 3.79-.233 1.15-.718 2.379-1.447 3.67h7.082c2.424 0 3.713 2.882 2.094 4.688 1.394 1.555.66 4.039-1.356 4.588a2.813 2.813 0 0 1-1.874 3.75 2.815 2.815 0 0 1-2.614 3.849h-4.383c-3.396 0-6.658-1-9.806-1.875H12.15a2.817 2.817 0 0 1-2.65 1.875H2.937A.937.937 0 0 1 2 30.306V13.432c0-.518.42-.937.937-.937H9.5c1.222 0 2.264.784 2.65 1.875h2.811c3.58-2.47 4.087-4.814 4.459-6.535.154-.717.288-1.336.622-1.845.429-.653 1.106-.984 2.013-.984zM9.5 14.37H3.875v14.999H9.5c.516 0 .937-.42.937-.938V15.307a.938.938 0 0 0-.937-.937zm12.56-7.49c-.468-.001-.517-.002-.809 1.35-.396 1.835-1.06 4.907-5.483 7.856a.936.936 0 0 1-.515.158s-1.507-.013-2.942-.013v11.274c1.17 0 1.154-.022 1.313.022 3.076.853 6.264 1.84 9.428 1.84h4.383a.939.939 0 0 0 0-1.874H26.5a.937.937 0 0 1 0-1.875h2.812a.938.938 0 0 0 0-1.875H26.5a.937.937 0 0 1 0-1.875h4.687a.938.938 0 0 0 0-1.875H26.5a.937.937 0 1 1 0-1.875h4.687a.938.938 0 0 0 0-1.874h-8.77a.938.938 0 0 1-.775-1.465c2.914-4.285 2.181-6.438 1.887-6.996-.305-.58-.826-.9-1.467-.903zM7.625 25.62a.937.937 0 1 1 0 1.875.937.937 0 0 1 0-1.875z"></path></svg></div>',
    counterWithUnit: '100%',
    counterDescription: 'Happy clients'
  }
]);
</script>