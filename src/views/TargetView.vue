<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-x-4 gap-y-4">
      <div v-for="item in getBodyParts" :key="item">
        <router-link
          :to="{ name: 'SingleBodyPartView', params: { bodyPart: item } }"
        >
          <BodyPartPreview :bodyPart="item" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useBodyPartsStore } from "@/stores/bodyParts";
import BodyPartPreview from "../components/BodyPartPreview.vue";

const store = useBodyPartsStore();
const getBodyParts = computed(() => {
  return store.getBodyParts;
});

onMounted(() => {
  store.fetchBodyParts();
});
</script>

<style></style>
