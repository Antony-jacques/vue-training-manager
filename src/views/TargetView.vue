<template>
  <div v-for="item in getBodyParts" :key="item" class="mt-8">
    {{ item }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useBodyPartsStore } from '@/stores/bodyParts'

export default defineComponent({
  name: "TargetView",
  setup() {

    const store = useBodyPartsStore()
    const getBodyParts = computed(()=>{ return store.getBodyParts }) 

    onMounted(()=>{
      store.fetchBodyParts()
    })
    console.log(store)

    return { getBodyParts };
  },
});
</script>

<style></style>
