<template>
  <div>
    <!-- Votre contenu existant -->
    My training
    <Transition appear @after-enter="triggerAfterAnimation" >
      <div>
        <h1 class="text-4xl animated-title inline-block " :class="{'loaded': isPageLoaded}" >Vue training manager</h1>
      </div>
    </Transition>

    <div>
      <select
        name="bodyParts"
        id="bodyParts"
        v-model="selectedBodyParts"
        class="m-4 h-12 p-4 pr-8"
      >
        <option value="">--Choisissez une partie du corps--</option>
        <option v-for="bodyParts in getBodyParts" :key="bodyParts" :value="bodyParts">
          {{ bodyParts }}
        </option>
      </select>
      <img v-if="selectedBodyParts.length > 1" :src="backgroundImageUrl" alt="" />
    </div>

    <div
      v-if="selectedBodyParts.length > 1"
      class="text-left bg-neutral-100 rounded-t-3xl p-4"
      :class="{
        '-mt-8 z-10 relative': selectedBodyParts.length > 1,
      }"
    >
      <span
        class="p-[0.75rem] ml-4 my-4 inline-block cursor-pointer border rounded-full border-[#ecb101] text-[#ecb101] transition ease-in-out delay-150 hover:bg-[#ecb101] hover:text-white"
        >{{ selectedBodyParts }}</span
      >

      <div v-for="exercice in getSingleBodyPartExercices" :key="exercice.id">
        <ExerciseItemPreview :exercice="exercice" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useBodyPartsStore } from "@/stores/bodyParts";
import ExerciseItemPreview from "@/components/ExerciseItemPreview.vue";
// import { useRouter } from "vue-router";

const store = useBodyPartsStore();
const selectedBodyParts = ref("");
const isPageLoaded = ref(false);

// const router = useRouter()

// setTimeout(()=>{
//   router.push({
//     name: 'SingleBodyPartView',
//     params: {
//       bodyPart: 'cardio'
//     }
//   })
// }, 2000)

const triggerAfterAnimation = ()=>{
  isPageLoaded.value = true
}

onMounted(async () => {
  await store.fetchBodyParts();
});

const getBodyParts = computed(() => store.getBodyParts);

const getSingleBodyPartExercices = computed(() => {
  store.fetchSingleBodyPartExercices(selectedBodyParts.value);
  return store.getSingleBodyPartExercices(selectedBodyParts.value);
});

const getImageUrl = computed(() => selectedBodyParts.value.replace(" ", "-"));

const backgroundImageUrl = computed(() => {
  try {
    return require(`../assets/${getImageUrl.value}.jpg`);
  } catch (e) {
    console.log("image not found", `../assets/${getImageUrl.value}.jpg`);
  }
});
</script>

<style>

.v-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-enter-active {
  transition: all 1s ease;
}


/* Animation du pseudo-élément */
.animated-title::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  background-color: #ecb101;
  transition: width 0.5s ease;
}

.animated-title.loaded::after {
  width: 100%;
}
</style>
