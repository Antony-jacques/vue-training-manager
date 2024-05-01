import { defineStore } from "pinia";

export const useBodyPartsStore = defineStore({
  id: "bodyParts",

  // State
  state: ()=>({
    data: [],
    test: 'toto in store',
    isLoading: false,
  }),
  getters: {
    getBodyParts: (state) => state.data,
    getTest: (state) => state.test,
  },
  actions: {
    saveBodyParts(fetchedItems:[]) {
      this.data = fetchedItems
    },
    async fetchBodyParts(){
      if(this.data.length){
        return
      }
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises",
        params: { limit: "10" },
        headers: {
          "X-RapidAPI-Key": process.env.VUE_APP_EXERCISESDB_API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const request = await fetch(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          options
        );
  
        const response = await request.json();
        this.data = response;
  
      } catch (error) {
        console.error(error);
      }
    }
  },
})