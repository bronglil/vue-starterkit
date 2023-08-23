<template>
  <div id="app">
    <counter-comp />
    <ConditionalRendering />
    <div>
      <stepper :initialStep="currentStep">
        <template v-slot="{ step }">
          <div v-if="step === 0">Step 1 content</div>
          <div v-if="step === 1">Step 2 content</div>
          <div v-if="step === 2">Step 3 content</div>
        </template>
      </stepper>
    </div>
    <ImageUploader />
  </div>
</template>

<script>
import CounterComp from "./components/CounterComp.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import Stepper from "./components/Stepper.vue";
import ImageUploader from "@/components/ImageUploader.vue";
export default {
  name: "App",
  components: {
    CounterComp,
    ConditionalRendering,
    Stepper, // Use the corrected component name
    ImageUploader,
  },
  data() {
    return {
      currentStep: 0,
    };
  },
};
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
