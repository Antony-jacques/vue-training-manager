import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true, // Active les fonctions globales comme test, describe, etc.
    environment: 'jsdom', // Utilise l'environnement jsdom pour les tests front-end
  },
});
