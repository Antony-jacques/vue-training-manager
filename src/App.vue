<template>
  <div class="mt-32">
    <nav class="flex justify-center bg-[#9fd3c7] fixed top-0 w-full">
      <div class="site-logo mr-8 p-2">Logo</div>
      <router-link to="/" class="p-2">Home</router-link>
      <router-link to="/target" class="p-2">Target</router-link>
      <router-link to="/about" class="p-2">About</router-link>
      <router-link to="/define-your-objectives" class="p-2">Objectives</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 1222px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
