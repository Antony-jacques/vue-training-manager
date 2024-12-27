import { defineStore } from "pinia";

export const useObjectivesStore = defineStore('objectives', {
  state: () => ({
    userInfo: {
      name: "toto",
    }
  }),

  actions: {
    sayHello(){
      alert(this.userInfo.name)
    },

    editUserName(newName:string){
      this.userInfo.name=newName
    }
  }

});
