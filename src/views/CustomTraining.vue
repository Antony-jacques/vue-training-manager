<template>
  My training
  <div>
    <select
      name="bodyParts"
      id="bodyParts"
      v-model="selectedBodyParts"
      class="m-4 h-12 p-4"
    >
      <option value="">--Choisissez une partie du corps--</option>
      <option v-for="bodyParts in getBodyParts" :value="bodyParts">
        {{ bodyParts }}
      </option>
    </select>
    <img v-if="selectedBodyParts.length > 1" :src="backgroundImageUrl" alt="" />
  </div>

  <div
    v-if="selectedBodyParts.length > 1"
    class="text-left bg-neutral-100 rounded-t-3xl p-4"
    :class="{
      '-mt-8 z-10 relative': selectedBodyParts.length > 1,
    }"
  >
    <span
      class="p-[0.75rem] ml-4 my-4 inline-block cursor-pointer border rounded-full border-[#ecb101] text-[#ecb101] transition ease-in-out delay-150 hover:bg-[#ecb101] hover:text-white"
      >{{ selectedBodyParts }}</span
    >

    <div v-for="exercice in getSingleBodyPartExercices">
      <ExerciseItemPreview :exercice="exercice" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useBodyPartsStore } from "@/stores/bodyParts";
import ExerciseItemPreview from "@/components/ExerciseItemPreview.vue";

const store = useBodyPartsStore();

onMounted(async () => {
  await store.fetchBodyParts();
  console.log("getBodyParts CustomTraining", getBodyParts.value);
});

const getBodyParts = computed(() => {
  return store.getBodyParts;
});

const selectedBodyParts = ref("");

const getSingleBodyPartExercices = computed(() => {
  store.fetchSingleBodyPartExercices(selectedBodyParts.value);
  return store.getSingleBodyPartExercices(selectedBodyParts.value);
});

const getImageUrl = computed(() => {
  return selectedBodyParts.value.replace(" ", "-");
});

const backgroundImageUrl = computed(() => {
  try {
    return require(`../assets/${getImageUrl.value}.jpg`);
  } catch (e) {
    console.log("image not found", `../assets/${getImageUrl}.jpg`);
  }
});
</script>

<style></style>
