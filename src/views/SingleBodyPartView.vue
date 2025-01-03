<template>
  <div class="container">
    <h2 class="mb-8">All {{ targetedMuscle }} exercises</h2>
    <div>
      <select @change="updateFilters" name="" id="">
        <option value="all">All</option>
        <option value="body weight">body weight</option>
      </select>
    </div>

    <div class="grid grid-cols-3 gap-x-4 gap-y-4">
      <div
        v-for="exercice in getFilteredExercices "
        :key="exercice.id"
        class="shadow-xl flex flex-col"
      >
        <div><img :src="exercice.gifUrl" alt="" class="w-full" /></div>
        <div class="flex justify-end p-4 flex-wrap">
          <span
            class="p-[0.75rem] ml-4 my-2 cursor-pointer border rounded-full border-[#ecb101] text-[#ecb101] transition ease-in-out delay-150 hover:bg-[#ecb101] hover:text-white"
            v-for="secondaryMuscle in exercice.secondaryMuscles"
            :key="secondaryMuscle"
            >{{ secondaryMuscle }}</span
          >
        </div>
        <p class="p-4 first-letter:uppercase mt-auto">
          {{ exercice.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useBodyPartsStore } from "@/stores/bodyParts";
import { useRoute } from "vue-router";

const props = defineProps<{
  bodyPart: string;
}>();

const route = useRoute();

onMounted(() => {
  store.fetchSingleBodyPartExercices(props.bodyPart);
});

const targetedMuscle = props.bodyPart;
const store = useBodyPartsStore();
const getSingleBodyPartExercices = computed(() =>
  store.getSingleBodyPartExercices(targetedMuscle)
);

const getFilteredExercices = computed(() =>
  store.getFilteredExercices(targetedMuscle)
);

const updateFilters = (e: Event) => {
  store.updateFilters((<HTMLSelectElement>e.target).value);
};
</script>

<style></style>
