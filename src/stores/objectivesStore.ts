import { defineStore } from "pinia";

interface User {
  id: number;
  name: string;
}

interface ObjectivesState {
  userInfo: {
    name: string;
  };
  objectives: {
    frequency: number;
  };
  currentStep: number;
  users: User[];
  formResponses: any
}

export const useObjectivesStore = defineStore("objectives", {
  state: (): ObjectivesState => ({
    userInfo: {
      name: "toto",
    },
    objectives: {
      frequency: 1,
    },
    currentStep: 1,
    users: [
      {
        id: 1,
        name: "Jean",
      },
      {
        id: 2,
        name: "Paul",
      },
      {
        id: 3,
        name: "Quentin",
      },
    ],
    formResponses: {
      userName: '',
      age: null,
      gender: null,
      height: "",
      weight: "",
      activityLevel: null,
      activities: "",
      fitnessDuration: null,
      fitnessLevel: null,
      goals: [],
      priorities: [],
      trainingFrequency: null,
      medicalRestrictions: "",
      supplements: "",
      preferences: null,
      workoutTypes: [],
      sessionPreference: null,
      trainingStyle: null,
      trackProgress: null,
      motivation: "",
    },
  }),

  getters: {
    getCurrentStep(state: ObjectivesState) {
      return state.currentStep;
    },

    getUserById(state: ObjectivesState) {
      return (userId: number) => {
        console.log(state.users.find((user) => user.id === userId));
        return state.users.find((user) => user.id === userId);
      };
    },
  },

  actions: {
    sayHello() {
      alert(this.userInfo.name);
    },

    updateTextInputValue(newValvue: string, targetedKey: string) {
      console.log('newValvue', newValvue)
      console.log('targetedKey', targetedKey)
      console.log('this.formResponses[targetedKey]', this.formResponses[targetedKey])
      
      this.formResponses[targetedKey] = newValvue;
    },

  },
});
