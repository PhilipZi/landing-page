<template>
  <div class="m-20 flex justify-center items-center">
    <article class="prose">
      <h1 class="text-3xl">
        Garlic bread with cheese: What the science tells us
      </h1>
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
      <!-- ... -->
    </article>
  </div>
  <div class="m-20 flex justify-center items-center">
    <div class="h-96 flex flex-nowrap justify-start">
      <input type="radio" name="slide" class="hidden" />
      <label
        v-if="randomNumber"
        v-for="i in 4"
        :key="i"
        class="w-20 rounded-3xl bg-auto cursor-pointer overflow-hidden mx-[10px] flex items-end duration-300 ease-in-out shadow-2xl"
        :class="{ 'w-[600px]': isChecked[i] }"
        @click.prevent="toggle(i)"
        :style="{
          'background-image': `url('https://picsum.photos/id/${
            i + randomNumber
          }/600/600')`,
        }"
      >
        <div class="text-white flex flex-nowrap">
          <div
            class="bg-[#223] rounded-[50%] w-[50px] flex justify-center items-center m-[15px]"
          >
            {{ i }}
          </div>
          <div
            class="flex justify-center flex-col overflow-hidden h-[80px] w-[520px] opacity-0 transform translate-y-30 transition-all duration-300 ease-in-out transition-delay-300"
            :class="{
              'opacity-100': isChecked[i],
              'translate-y-0': isChecked[i],
            }"
          >
            <h4 class="uppercase">Item {{ i }}</h4>
            <p class="text-[#b0b0ba] pt-[5px]">
              Some description for item {{ i }}
            </p>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const isChecked = ref({ 1: true, 2: false, 3: false, 4: false });
const randomNumber = ref(null);

const randomNumberFunction = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const toggle = (labelNumber) => {
  for (let i = 1; i <= 4; i++) {
    isChecked.value[i] = i === labelNumber;
  }
};

onMounted(() => {
  // Setze den Zufallswert einmalig beim Laden der Komponente
  randomNumber.value = randomNumberFunction(1, 100);
});
</script>
