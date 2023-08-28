<template>
  <!-- started with vue3 -->
  <div>
    <div class="heading">{{ header ? header : "welcome" }}</div>
    <input
      class="custom-input"
      type="text"
      placeholder="Enter Item here"
      v-model="newItem"
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
      <br />
      <select class="custom-select" v-model="newItemPriority">
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>

      <br />
      <label>
        <input type="checkbox" v-model="newItemPriority" />
        New Item Priority
      </label>

      <br />
      <label>
        <input type="checkbox" v-model="iceCreamFalvoured" value="choclate" />
        Choclate
      </label>
      <label>
        <input type="checkbox" v-model="iceCreamFalvoured" value="vanila" />
        Vanila
      </label>
      <label>
        <input type="checkbox" v-model="iceCreamFalvoured" value="strawberry" />
        Strawberry
      </label>
      <label>
        <input type="checkbox" v-model="iceCreamFalvoured" value="mangoe" />
        Mangoe
      </label>
    </div>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        {{ item.id }}- {{ item.label }}
      </li>
    </ul>
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
        { id: 3, label: "banana" },
        { id: 4, label: "test" },
        { id: 5, label: "mangoes" },
      ],
      newItem: "",
      newItemPriority: "low",
      iceCreamFalvoured: [],
    };
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
