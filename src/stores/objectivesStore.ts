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
  }),

  getters: {
    getCurrentStep(state: ObjectivesState) {
      return state.currentStep;
    },

    getUserById(state: ObjectivesState) {
      return (userId: number) => {
        console.log(state.users.find((user) => user.id === userId))
        return state.users.find((user) => user.id === userId);
      };
    },
  },

  actions: {
    sayHello() {
      alert(this.userInfo.name);
    },

    editUserName(newName: string) {
      this.userInfo.name = newName;
    },

    editObjectivesFrequency(newFrequency: number) {
      this.objectives.frequency = newFrequency;
    },
  },
});
