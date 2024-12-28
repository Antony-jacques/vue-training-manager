<template>
  <div>
    <h1>Objectives</h1>
    <h2>Bonjour {{ store.userInfo.name }}</h2>
    <h2>Frequency {{ store.objectives.frequency }}</h2>
    <h2>Step getter {{ store.getCurrentStep }}</h2>

    <div v-if="formItems">
      <div v-for="formItem in formItems" :key="formItem.stepNumber">
        <FormStep
          v-if="formItem.stepNumber == store.currentStep"
          :formItem="formItem"
        />
      </div>

      <button
        @click="store.currentStep--"
        v-show="store.currentStep != 1"
        class="border p-4"
      >
        Prev
      </button>
      <button
        @click="store.currentStep++"
        class="border p-4"
        v-show="store.currentStep !== formItems.length"
      >
        Next
      </button>
      <button @click="store.editUserInfos({ name: name })" class="border p-4">
        edit
      </button>
      <button @click="findUser(1)" class="border p-4">user 1</button>
      <button @click="findUser(2)" class="border p-4">user 2</button>
      <button @click="store.getUserById(3)" class="border p-4">user 3</button>
    </div>
  </div>
</template>

<script setup>
import formItems from "@/assets/data/formItems";
import FormStep from "@/components/Objectives/FormStep";
import { useObjectivesStore } from "@/stores/objectivesStore";

const store = useObjectivesStore();

const findUser = store.getUserById;
</script>
