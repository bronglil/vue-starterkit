<!-- ParentComponent.vue -->
<template>
  <div>
    <custom-input
      v-model="formData.username"
      label="Username"
      placeholder="Enter your username"
    ></custom-input>
    <custom-input
      v-model="formData.email"
      label="Email"
      type="email"
      placeholder="Enter your email"
    ></custom-input>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";

export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      formData: {
        username: "",
        email: "",
      },
    };
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
