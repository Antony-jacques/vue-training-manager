<template>
  <div v-for="item in exercisesCategories.data" :key="item" class="mt-8">
    {{ item }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  name: "TargetView",
  setup() {
    const exercisesCategories = reactive({
      data: []
    });

    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      params: { limit: "10" },
      headers: {
        "X-RapidAPI-Key": "1c410b4c8bmsh93caa8cffc22fcfp1e7c35jsn35199848365c",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const getExercises = async () => {
      try {
        const request = await fetch(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          options
        );

        const response = await request.json();
        exercisesCategories.data = response;
        console.log(exercisesCategories)

      } catch (error) {
        console.error(error);
      }
    };

    onMounted(getExercises)

    return { exercisesCategories, getExercises };
  },
});
</script>

<style></style>
