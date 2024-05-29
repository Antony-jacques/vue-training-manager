<template>
  <div class="flex h-[300px] border-4 border-indigo-600" :style="backgroundImageStyle">
    <div class="mt-auto">{{ bodyPart }}</div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ["bodyPart"],
  setup(props){

    const getImageUrl = computed(()=>{
       return  props.bodyPart.replace(' ', '-')
    }) 

    const backgroundImageUrl = computed(() => {
      try {
       return require(`../assets/${getImageUrl.value}.jpg`)

      } catch(e) {
        console.log('image not found', `../assets/${getImageUrl}.jpg`)
      }
       
    });

    const backgroundImageStyle = computed(() => {
      return {
        backgroundImage: `url(${backgroundImageUrl.value})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    });

    return { getImageUrl, backgroundImageUrl, backgroundImageStyle}
  }
}
</script>

<style>

</style>