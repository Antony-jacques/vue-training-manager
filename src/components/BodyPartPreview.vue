<template>
  <img :src="require(`../assets/${getImageUrl}.jpg`)">
</template>

<script>
import { computed } from 'vue';

export default {
  props: ["bodyPart"],
  setup(props){

    const getImageUrl = computed(()=>{
       return  props.bodyPart.replace(' ', '-')
    }) 

    return { getImageUrl }
  }
}
</script>

<style>

</style>