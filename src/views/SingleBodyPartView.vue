<template>
  <h2>All {{ targetedMuscle }} exercises</h2>
  <p v-for="exercice in getSingleBodyPartExercices" :key="exercice.name" > {{ exercice.name }}</p>
</template>

<script>
import { computed, onMounted } from "vue";

import { storeToRefs } from 'pinia'
import { useBodyPartsStore } from '@/stores/bodyParts'


export default {
  props: ["bodyPart"],
  setup(props){

    onMounted(()=>{
      store.fetchSingleBodyPartExercices(props.bodyPart)
    })
    
    const test = props.bodyPart
    const targetedMuscle = props.bodyPart
    const store = useBodyPartsStore()
    const getSingleBodyPartExercices = computed(()=> store.getSingleBodyPartExercices(targetedMuscle))

    return { targetedMuscle, getSingleBodyPartExercices }
  }
}
</script>

<style>

</style>