<template>
  <div class="container">
    <Suspense>
      <template #default>
        <MuscleList />
      </template>
      <template #fallback>
        <MuscleListSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useBodyPartsStore } from "@/stores/bodyParts";
import MuscleList from "@/components/MusclesList.vue";
import MuscleListSkeleton from "@/components/MuscleListSkeleton.vue";

const store = useBodyPartsStore();
const getBodyParts = computed(() => {
  return store.getBodyParts;
});

</script>

<style></style>
