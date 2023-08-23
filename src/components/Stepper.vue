<template>
  <div class="stepper">
    <div class="step" v-for="(step, index) in steps" :key="index">
      <div class="step-header">Step {{ index + 1 }}</div>
      <div class="step-content" v-if="currentStep === index">
        <slot :step="index"></slot>
        <div class="step-actions">
          <button @click="prevStep" :disabled="currentStep === 0">
            Previous
          </button>
          <button
            @click="nextStep"
            :disabled="currentStep === steps.length - 1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    initialStep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentStep: this.initialStep,
      steps: ["Step 1", "Step 2", "Step 3"],
    };
  },
  methods: {
    prevStep() {
      this.currentStep -= 1;
    },
    nextStep() {
      this.currentStep += 1;
    },
  },
};
</script>

<style scoped>
.stepper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.step-header {
  font-weight: bold;
}

.step-actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
