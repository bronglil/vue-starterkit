<template>
  <div id="app">
    <!-- started with vue3 -->

    <ProductList />

    <!-- <input-Items /> -->

    <!-- <TodoApp />
    <GitHubCard username="john doe" /> -->
    <!-- <counter-comp />
    <ConditionalRendering /> -->
    <!-- <div>
      <stepper :initialStep="currentStep">
        <template v-slot="{ step }">
          <div v-if="step === 0">Step 1 content</div>
          <div v-if="step === 1">Step 2 content</div>
          <div v-if="step === 2">Step 3 content</div>
        </template>
      </stepper>
    </div> -->
    <!-- <ImageUploader /> -->
    <!-- <div>
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
    </div> -->
  </div>
</template>

<script>
// import CounterComp from "./components/CounterComp.vue";
// import ConditionalRendering from "./components/ConditionalRendering.vue";
// import Stepper from "./components/Stepper.vue";
// import ImageUploader from "@/components/ImageUploader.vue";
// import CustomInput from "../src/components/FormComponent.vue";
// import inputItems from "./components/inputItems.vue";
// import TodoApp from "./components/TodoApp.vue";
// import GitHubCard from "./components/GitHubCard.vue";
import ProductList from "./components/shoppingComps/ProductList.vue";

export default {
  name: "App",
  components: {
    //   CounterComp,
    //   ConditionalRendering,
    //   Stepper, // Use the corrected component name
    //   ImageUploader,
    //   CustomInput,
    // inputItems,
    // TodoApp,
    // GitHubCard,
    ProductList,
  },
  data() {
    return {
      // currentStep: 0,
      header: "Shopping List App",
      items: [
        { id: 1, label: "shoes" },
        { id: 2, label: "fruits" },
        { id: 3, label: "banana" },
        { id: 4, label: "test" },
        { id: 5, label: "mangoes" },
      ],
      newItem: "",
      newItemPriority: "low",
      iceCreamFalvoured: [],
      //   formData: {
      //     username: "",
      //     email: "",
      //   },
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 4rem;
  padding: 4rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1),
    /* Top shadow */ 0px -4px 6px rgba(0, 0, 0, 0.1),
    /* Bottom shadow */ 4px 0px 6px rgba(0, 0, 0, 0.1),
    /* Right shadow */ -4px 0px 6px rgba(0, 0, 0, 0.1); /* Left shadow */
}
.heading {
  font-size: 16px;
  font-weight: 500;
  margin: 10px 2px;
}
ul {
  list-style-type: none; /* Type of bullet point */
  padding-left: 20px; /* Indentation for the list */
}

li {
  margin-bottom: 5px; /* Space between list items */
}
.custom-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
}

/* Additional styling for when the input is focused */
.custom-input:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}

/* Styling for select dropdown */
.custom-select {
  appearance: none; /* Remove default arrow on select */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 200px; /* Replace with your arrow icon */
}

/* Apply custom styling when select is focused or hovered */
.custom-select:focus,
.custom-select:hover {
  border-color: blue;
}
</style>
