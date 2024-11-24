<template>
  <div class="countor">
    <div class="countor-digit">{{ min }} : {{ seconds }}</div>
    <div>
      <button @click="startCountor" class="border cursor p-2 text-white">
        Start
      </button>

      <button @click="pauseCountor" class="border cursor p-2 text-white">
        Pause
      </button>
      <button @click="stopCountor" class="border cursor p-2 text-white">
        Stop
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const seconds = ref(0);
const min = ref(0);

const elapsedTime = ref(0);
const startTime = ref(0);

let intervalId: number | null = null;

const startCountor = () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      if (seconds.value === 60) {
        seconds.value = 0;
        min.value += 1;
      }
      seconds.value += 1;
    }, 100);
    console.log(intervalId);
  }
};

const pauseCountor = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const stopCountor = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    // seconds.value = 0;
    // min.value = 0;
  }
  seconds.value = 0;
  min.value = 0;
};
</script>

<style scoped>
/* Conteneur principal du compteur */
.countor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-family: Arial, sans-serif;
  margin-top: 2rem;
}

/* Affichage des chiffres du compteur */
.countor-digit {
  font-size: 2.5rem;
  font-weight: bold;
  color: #444;
  background-color: #f1f1f1;
  border: 3px solid #ddd;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Conteneur des boutons */
.countor > div {
  display: flex;
  gap: 1rem;
}

/* Styles communs pour tous les boutons */
button {
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
}

/* Effet sur clic */
button:active {
  transform: scale(0.96);
}

/* Bouton Start */
button:nth-child(1) {
  background-color: #4caf50; /* Vert */
}

button:nth-child(1):hover {
  background-color: #45a049;
}

/* Bouton Pause */
button:nth-child(2) {
  background-color: #f0ad4e; /* Orange */
}

button:nth-child(2):hover {
  background-color: #ec9a3f;
}

/* Bouton Stop */
button:nth-child(3) {
  background-color: #e3342f; /* Rouge */
}

button:nth-child(3):hover {
  background-color: #cc1f1a;
}
</style>
