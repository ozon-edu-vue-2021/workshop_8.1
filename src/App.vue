<template>
  <div id="app">
    <img alt="Pets" src="./assets/pets.jpeg">
    <Pets/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Pets from './components/Pets.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Pets
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
