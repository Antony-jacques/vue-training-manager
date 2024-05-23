<template>
  <h2>All {{ targetedMuscle }} exercises</h2>
</template>

<script>

export default {
  props: ["bodyPart"],
  setup(props){

    const targetedMuscle = props.bodyPart

    return { targetedMuscle }
  }
}
</script>

<style>

</style>