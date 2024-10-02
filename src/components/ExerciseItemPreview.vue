<template>
  <div class="bg-white rounded-full">
    <div class="flex justify-between items-center p-4 m-4 ">
      <img class="h-12" :src="exercice.gifUrl" alt="" />
      <span>{{ exercice.name }} </span>
      <button>Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Exercise } from "@/stores/bodyParts";
import { UnwrapRef } from "vue";

const props = defineProps<{
  exercice: UnwrapRef<Exercise>;
}>();

</script>

<style scoped></style>
