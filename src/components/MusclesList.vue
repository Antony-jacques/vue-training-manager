<template>
  <div class="grid grid-cols-3 gap-x-4 gap-y-4">
    <div v-for="item in store.getBodyParts" :key="item">
      <router-link
        :to="{ name: 'SingleBodyPartView', params: { bodyPart: item } }"
      >
        <BodyPartPreview :bodyPart="item" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useBodyPartsStore } from "@/stores/bodyParts";
import BodyPartPreview from "@/components/BodyPartPreview.vue";

const store = useBodyPartsStore();

await store.fetchBodyParts();

console.log(store)
</script>

<style></style>
