<template>
  <!-- started with vue3 -->
  <div>
    <div class="heading">{{ header ? header : "welcome" }}</div>
    <input
      class="custom-input"
      type="text"
      placeholder="Enter Item here"
      v-model="newItem"
      v-on:keydown.enter="handleClick"
    />
    <div style="margin: 10px">
      <label class="radio-label">
        <input
          class="radio-input"
          v-model="newItemPriority"
          type="radio"
          value="low"
        />
        Low
      </label>
      <label class="radio-label">
        <input
          class="radio-input"
          v-model="newItemPriority"
          type="radio"
          value="high"
        />
        High
      </label>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">{{ item.label }}</li>
      </ul>
    </div>
    <button v-on:click="handleClick" class="primary btn">Save Changes</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Shopping List App",
      items: [
        { id: 1, label: "shoes" },
        { id: 2, label: "fruits" },
      ],
      newItem: "",
      newItemPriority: "low",
      iceCreamFalvoured: [],
    };
  },
  methods: {
    handleClick() {
      this.items.push({ id: this.items?.length + 1, label: this.newItem });
      this.resetFields();
    },
    resetFields() {
      this.newItem = "";
    },
  },
};
</script>

<style scoped>
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
