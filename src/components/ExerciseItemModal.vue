<template>
  <div
    class="modal-overlay fixed top-0 left-0 w-full h-full bg-slate-500/75 overflow-auto z-30"
    @click="emit('close-modal')"
  >
    <div class="modal-content bg-white p-4 mt-12 rounded-t-3xl" @click.stop>
      <div>
        <ExerciseItemPanel :exercice="exercice" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Exercise } from "@/stores/bodyParts";
import { UnwrapRef } from "vue";
import ExerciseItemPanel from "./ExerciseItemPanel.vue";

const props = defineProps<{
  exercice: UnwrapRef<Exercise>;
}>();

const emit = defineEmits(["close-modal"]);
</script>

<style scoped></style>
