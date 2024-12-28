<template>
  <div class="my-16 border bg-yellow-100 p-8">
    <h2>Form step: {{ formItem.stepNumber }}</h2>
    <h3>{{ formItem.question }}</h3>

    <div v-if="formItem.type == 'text'">
      <input :type="text" class="border" :value="store.userInfo.name" @input="updateName" />
      {{ name }}
    </div>

    <div v-if="formItem.type == 'radio' && formItem.answers">
      <div v-for="answer in formItem.answers">
        <input
          type="radio"
          :key="answers"
          :value="answer"
          :id="answer"
          name="health"
        />
        <label :for="answer">{{ answer }}</label>
      </div>
    </div>

    <div v-if="formItem.type == 'number'">
      <input type="number" @input="updateFrequency" :value="store.objectives.frequency" min="1" class="border" />
    </div>
  </div>
</template>

<script setup>
import formItems from "@/assets/data/formItems";
import { useObjectivesStore } from "@/stores/objectivesStore";
import { ref } from "vue";

const props = defineProps({
  formItem: {},
});

const name = ref("");
const store = useObjectivesStore();

const updateName = (e) => {
  store.editUserName(e.target.value);
};

const updateFrequency = (e) => {
  store.editObjectivesFrequency(e.target.value);
};
</script>

<style lang="scss" scoped></style>
