import { defineStore } from "pinia";

interface State {
  data: {
    bodyParts: string;
    singleBodyPartExercices: { [key: string]: any };
  };
  isLoading: boolean;
}

export const useBodyPartsStore = defineStore({
  id: "bodyParts",

  // State
  state: (): State => ({
    data: {
      bodyParts: "",
      singleBodyPartExercices: {},
    },
    isLoading: false,
  }),

  getters: {
    getBodyParts: (state: State) => state.data.bodyParts,
    getSingleBodyPartExercices: (state: State) => {
      return (singleMuscle: string) => {
        singleMuscle = singleMuscle.replace(" ", "-")
        return state.data.singleBodyPartExercices[singleMuscle];
      };
    },
  },

  actions: {
    saveBodyParts(fetchedItems: string) {
      this.data.bodyParts = fetchedItems;
    },

    async fetchBodyParts() {
      if (this.data.bodyParts.length) {
        return;
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
        this.data.bodyParts = response;
      } catch (error) {
        console.error(error);
      }
    },

    async fetchSingleBodyPartExercices(muscle: string) {
      if (muscle.replace(' ', '-') in this.data.singleBodyPartExercices) {
        return;
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
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}`,
          options
        );

        const response = await request.json();

        let key: string = muscle.replace(' ', '-');

        this.data.singleBodyPartExercices[key] = response;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
