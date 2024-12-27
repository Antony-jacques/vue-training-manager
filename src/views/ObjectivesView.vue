<template>
  <div>
    <h1>Objectives</h1>
    <h2>Bonjour {{ store.userInfo.name }}</h2>

    <div v-if="formItems">
      <FormStep v-for="formItem in formItems " :key="formItem.step" :formItem="formItem"/>

      <button @click="store.sayHello()" class="border p-4">sayHello</button>
      <button @click="store.editUserInfos({name: name})" class="border p-4">edit</button>
    </div>
  </div>
</template>

<script setup>
import formItems from "@/assets/data/formItems";
import FormStep from "@/components/Objectives/FormStep";
import { useObjectivesStore } from "@/stores/objectivesStore";

console.log(formItems);
const store = useObjectivesStore()

</script>

<style lang="scss" scoped></style>
