<template>
  <div v-for="item in exercisesCategories.data" :key="item" class="mt-8">
    {{ item }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import fetchData from "@/composables/fetchData";

export default defineComponent({
  name: "TargetView",
  setup() {
    const { exercisesCategories } = fetchData();

    return { exercisesCategories };
  },
});
</script>

<style></style>
