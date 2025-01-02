<template>
  <div class="my-16 border bg-yellow-100 p-8">
    <h2 class="font-bold mb-8">{{ formItem.category }}</h2>
    <h3 class="font-bold mb-4">{{ formItem.question }}</h3>
    <h3>{{ formItem.key }}: {{ store.formResponses[formItem.key] }}</h3>

    <div v-if="formItem.type == 'text'">
      <input
        type="text"
        class="border"
        :value="store.formResponses[formItem.key]"
        @input="updateTextInputValue"
        :name="formItem.key"
      />
    </div>

    <FormInput :formItem=formItem />

    <div v-if="formItem.type == 'radio' && formItem.answers">
      <div v-for="answer in formItem.answers">
        <input
          type="radio"
          @input="updateTextInputValue"
          :key="answers"
          :value="answer"
          :id="answer"
          :name="formItem.key"
        />
        <label :for="answer">{{ answer }}</label>
      </div>
    </div>

    <div v-if="formItem.type == 'number'">
      <input
        type="number"
        @input="updateTextInputValue"
        :value="store.formResponses[formItem.key]"
        min="1"
        class="border"
        :name="formItem.key"
      />
    </div>
  </div>
</template>

<script setup>
import formItems from "@/assets/data/formItems";
import { useObjectivesStore } from "@/stores/objectivesStore";
import FormInput from "./FormInput.vue";

const props = defineProps({
  formItem: {},
});

const store = useObjectivesStore();

const updateTextInputValue = (e) => {
  store.updateTextInputValue(e.target.value, e.target.name);
};

</script>

<style lang="scss" scoped></style>
