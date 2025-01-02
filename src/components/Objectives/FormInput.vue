<template>
  <div>
    <h1>compo input</h1>
    <div v-if="formItem.type == 'text'">
      <input
        type="text"
        class="border"
        :value="store.formResponses[formItem.key]"
        @input="updateTextInputValue"
        :name="formItem.key"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useObjectivesStore } from '@/stores/objectivesStore';


const props = defineProps<{
  formItem: any
}>()

const store = useObjectivesStore()

const updateTextInputValue = (e: Event) => {
  store.updateTextInputValue((<HTMLInputElement>e.target).value, (<HTMLInputElement>e.target).name);
};

</script>

<style lang="scss" scoped>

</style>