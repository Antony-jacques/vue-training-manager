import {
  fetchBodyPartsService,
  fetchSingleBodyPartExercicesService,
} from "@/shared/services.bodyParts.service";
import { defineStore } from "pinia";

export interface Exercise {
  id: number;
  bodyPart: string;
  name: string;
  equipment: string;
  gifUrl: string;
  target: string;
  instructions: string[];
  secondaryMuscles: string[];
}

export interface Workout {
  id: string;
  [key: string]: any;
}
interface State {
  data: {
    bodyParts: string[];
    singleBodyPartExercices: { [key: string]: any };
  };
  isLoading: boolean;
  filters: string;
}

export const useBodyPartsStore = defineStore({
  id: "bodyParts",

  // State
  state: (): State => ({
    data: {
      bodyParts: [],
      singleBodyPartExercices: {},
    },
    isLoading: false,
    filters: "all",
  }),

  getters: {
    getBodyParts: (state: State) => state.data.bodyParts,

    getSingleBodyPartExercices: (state: State) => {
      return (singleMuscle: string) => {
        singleMuscle = singleMuscle.replace(" ", "-");
        return state.data.singleBodyPartExercices[singleMuscle];
      };
    },

    getFilteredExercices: (state: State) => {
      return (singleMuscle: string) => {
        if (state.filters !== "all") {
          return state.data.singleBodyPartExercices[singleMuscle].filter((exercice: Exercise) => exercice.equipment === state.filters)

        } else {
          singleMuscle = singleMuscle.replace(" ", "-");
          return state.data.singleBodyPartExercices[singleMuscle];
        }
      };
    },
  },

  actions: {
    async fetchBodyParts() {
      if (this.data.bodyParts.length) {
        return;
      }

      this.data.bodyParts = await fetchBodyPartsService();
    },

    async fetchSingleBodyPartExercices(muscle: string) {
      if (muscle.replace(" ", "-") in this.data.singleBodyPartExercices) {
        return;
      }

      const response = await fetchSingleBodyPartExercicesService(muscle);

      const key: string = muscle.replace(" ", "-");

      this.data.singleBodyPartExercices[key] = response;
    },

    updateFilters(newFilter: string) {
      this.filters = newFilter;
    },
  },
});
