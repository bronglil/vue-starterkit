<template>
  <div id="app">
    <counter-comp/>
  </div>
</template>

<script>
import  CounterComp from "./components/CounterComp.vue";

export default {
  name: 'App',
  components : {
    CounterComp, // Use the corrected component name
  }
}
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
