<template>
  <div class="wrapper">
    <button @click="awesome = !awesome">Toggle</button>
    <h1 class="greenColor" v-if="awesome">Vue is awesome!</h1>
    <h1 class="redColor" v-else>Oh no 😢</h1>

    <div>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
      type: "D",
    };
  },
};
</script>

<style scoped>
.redColor {
  color: red;
}

.greenColor {
  color: green;
}

.wrapper {
  margin: 1px;
  padding: 10px;
  border: 1px solid black;
}
</style>
