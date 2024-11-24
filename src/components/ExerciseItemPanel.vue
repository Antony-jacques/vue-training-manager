<template>
  <div class="bg-white p-4 rounded-t-3xl">
    <div class="flex justify-end">
      <div
        class="close-btn p-8 hover:cursor-pointer"
        @click="emit('close-modal')"
      >
        X
      </div>
    </div>
    <img class="h-48 m-auto" :src="exercice.gifUrl" alt="" />
    <div>
      <h3 class="my-4 uppercase bold text-2xl">{{ exercice.name }}</h3>
    </div>
    <div class="flex justify-around">
      <h2
        class="border p-4 w-full text-center cursor"
        :class="{
          'bg-orange-100': activeTab === 'instructions',
        }"
        @click="activeTab = 'instructions'"
      >
        Instrtuctions
      </h2>
      <h2
        class="border p-4 w-full text-center cursor"
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
      <Transition>
        <div
          v-if="isSuccess"
          class="text-center border-4 border-lime-600 border-solid p-4"
        >
          <h3>Super ta série a été ajouté</h3>
        </div>
      </Transition>
      <div class="my-16">
        <TimeCounter />
      </div>
      <div v-for="savedWorkout in workouts">
        Previous workout(s) :
        {{
          savedWorkout.series[savedWorkout.series.length - 1]["reps"]
        }}
        repetitions -
        {{ savedWorkout.series[savedWorkout.series.length - 1]["weight"] }} kg
      </div>
      <div>
        <form @submit.prevent="saveWorkout(props.exercice)">
          <div>
            <div v-for="(set, index) in series">
              <label>Reps </label>
              <input
                type="number"
                class="border w-16 text-center"
                v-model="set.reps"
              />
              <label v-if="exercice.equipment !== 'body weight'">KG </label>
              <input
                type="number"
                class="border w-16 text-center"
                v-model="set.weight"
                v-if="exercice.equipment !== 'body weight'"
              />
              <button
                @click="removeSerie(index)"
                class="border cursor bg-red-600 p-2 text-white"
              >
                delete
              </button>
            </div>
          </div>
          <button
            type="button"
            class="border block p-2 text-white bg-amber-600"
            @click="addSeries"
          >
            New serie
          </button>
          <button type="submit" class="border block bg-lime-600 p-2 text-white">
            SAVE
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimeCounter from "./TimeCounter.vue";
import { Exercise } from "@/stores/bodyParts";
import { Ref, UnwrapRef, ref } from "vue";
import useWorkouts from "../composables/useWorkouts";
import { projecFirestore } from "@/firebase/config";

const props = defineProps<{
  exercice: UnwrapRef<Exercise>;
}>();

console.log("props", props);

const emit = defineEmits(["close-modal"]);

const activeTab = ref<"instructions" | "form">("form");

const {
  workouts,
  error,
  series,
  isSuccess,
  loadWorkouts,
  addSeries,
  removeSerie,
  saveWorkout,
} = useWorkouts();

console.log(workouts);

loadWorkouts(props.exercice.name);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
