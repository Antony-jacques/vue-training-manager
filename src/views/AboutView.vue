<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';


const route = useRoute()

document.title = route.meta.title as string;

</script>