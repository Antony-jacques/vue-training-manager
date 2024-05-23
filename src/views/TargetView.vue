<template>
  <div v-for="item in getBodyParts" :key="item" class="mt-8">
    <router-link :to="{name: 'SingleBodyPartView', params: {bodyPart: item}}">
      <BodyPartPreview :bodyPart="item"/>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useBodyPartsStore } from '@/stores/bodyParts'
import BodyPartPreview from "../components/BodyPartPreview.vue";

export default defineComponent({
  name: "TargetView",
  components: { BodyPartPreview },
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
