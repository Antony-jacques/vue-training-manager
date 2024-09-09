<template>
  <div class="container">
    <h2 class="mb-8">All {{ targetedMuscle }} exercises</h2>
    <div class="grid grid-cols-3 gap-x-4 gap-y-4">
      <div
        v-for="exercice in getSingleBodyPartExercices"
        :key="exercice.id"
        class="shadow-xl bg-cyan-800"
      >
        <div><img :src="exercice.gifUrl" alt="" class="w-full" /></div>
        <div class="flex justify-end p-4">
          <span
            class="p-[0.75rem] ml-4 border rounded-full border-[#ecb101] text-[#ecb101] transition ease-in-out delay-150 hover:bg-[#ecb101] hover:text-white"
            v-for="secondaryMuscle in exercice.secondaryMuscles"
            :key="secondaryMuscle"
            >{{ secondaryMuscle }}</span
          >
        </div>
        <p class="p-4 first-letter:uppercase">
          {{ exercice.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useBodyPartsStore } from "@/stores/bodyParts";

const props = defineProps<{
  bodyPart: string
}>()

onMounted(() => {
  store.fetchSingleBodyPartExercices(props.bodyPart);
});

const targetedMuscle = props.bodyPart;
const store = useBodyPartsStore();
const getSingleBodyPartExercices = computed(() =>
  store.getSingleBodyPartExercices(targetedMuscle)
);
</script>

<style></style>
