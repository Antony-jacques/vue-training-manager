import { defineStore } from "pinia";

export const useObjectivesStore = defineStore('objectives', {
  state: () => ({
    userInfo: {
      name: "toto",
    },
    objectives: {
      frequency: 1
    },
    currentStep: 1
  }),

  actions: {
    sayHello(){
      alert(this.userInfo.name)
    },

    editUserName(newName:string){
      this.userInfo.name=newName
    },

    editObjectivesFrequency(newFrequency: number) {
      this.objectives.frequency = newFrequency
    },

  }

});
