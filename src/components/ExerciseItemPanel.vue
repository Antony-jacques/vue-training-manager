<template>
  <div class="bg-white p-4 rounded-t-3xl">
    <img class="h-48 m-auto" :src="exercice.gifUrl" alt="" />
    <div>
      <h3 class="my-4 uppercase bold text-2xl">{{ exercice.name }}</h3>
    </div>
    <div class="flex justify-around">
      <h2
        class="border p-4 w-full text-center"
        :class="{
          'bg-orange-100': activeTab === 'instructions',
        }"
        @click="activeTab = 'instructions'"
      >
        Instrtuctions
      </h2>
      <h2
        class="border p-4 w-full text-center"
        @click="activeTab = 'form'"
        :class="{
          'bg-orange-100': activeTab === 'form',
        }"
      >
        Enregistrement
      </h2>
    </div>
    <div class="instructions" v-show="activeTab === 'instructions'">
      <ul>
        <li v-for="instruction in exercice.instructions" class="my-4 list-disc">
          {{ instruction }}
        </li>
      </ul>
    </div>
    <div class="exercice-form" v-show="activeTab === 'form'">
      <h2>form</h2>
      <div v-for="workout in workouts">
        {{ workout.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Exercise } from "@/stores/bodyParts";
import { UnwrapRef, ref } from "vue";
import getWorkouts from "../composables/getWorkouts";

const props = defineProps<{
  exercice: UnwrapRef<Exercise>;
}>();

const activeTab = ref<"instructions" | "form">("instructions");

const { workouts, error, loadWorkouts } = getWorkouts();

loadWorkouts();
</script>

<style scoped></style>
