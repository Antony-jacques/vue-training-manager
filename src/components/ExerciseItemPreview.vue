<template>
  <div class="bg-white rounded-full">
    <div class="flex justify-between items-center p-4 m-4">
      <img class="h-12" :src="exercice.gifUrl" alt="" />
      <span>{{ exercice.name }} </span>
      <button @click="togglePanel = !togglePanel">Save</button>
    </div>
  </div>
  <div v-if="togglePanel"><ExerciseItemPanel :exercice="exercice" /></div>
  <Teleport to="body" v-if="togglePanel">
    <ExerciseItemModal
      :exercice="exercice"
      @close-modal="togglePanel = false"
    />
  </Teleport>
</template>

<script setup lang="ts">
import { Exercise } from "@/stores/bodyParts";
import { UnwrapRef, ref } from "vue";
import ExerciseItemPanel from "./ExerciseItemPanel.vue";
import ExerciseItemModal from "./ExerciseItemModal.vue";

const props = defineProps<{
  exercice: UnwrapRef<Exercise>;
}>();

const togglePanel = ref(false);
</script>

<style scoped></style>
