<template>
  <div class="bg-white p-4 rounded-t-3xl">
    <img class="h-48 m-auto" :src="exercice.gifUrl" alt="" />
    <div class="flex justify-around">
      <h2 class="border p-4 w-full text-center">Instrtuctions</h2>
      <h2 class="border p-4 w-full text-center">Enregistrement</h2>
    </div>
    <div>
      <ul>
        <li v-for="instruction in exercice.instructions" class="my-4 list-disc">
          {{ instruction }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Exercise } from "@/stores/bodyParts";
import { UnwrapRef } from "vue";

const props = defineProps<{
  exercice: UnwrapRef<Exercise>;
}>();

console.log("ExerciseItemPanel props", props);
</script>

<style scoped></style>
