<template>
  <div>
    <!-- started with vue3 -->
    <div class="heading">
      {{ header ? header : "welcome" }}
      <button v-if="!editing" @click="editing = true" class="primary">
        Add Item
      </button>
      <button v-if="editing" @click="editing = false" class="danger">
        Cancel
      </button>
    </div>

    <div v-if="editing" class="header">
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
      </div>
      <button
        v-on:click="handleClick"
        v-bind:disabled="newItem.length === 0"
        class="primary btn"
      >
        Save Changes
      </button>
    </div>
    <a v-if="editing && newItem?.length > 0" :href="newItem" target="_blank"
      >Dynamic Link</a
    >
    <div class="items">
      <ul>
        <li v-for="item in items" v-bind:key="item.id">{{ item.label }}</li>
      </ul>
      <p v-if="items?.length === 0">Sorry we don't have item in list</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Shopping List App",
      items: [],
      editing: false,
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
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  list-style-type: none; /* Remove default bullet points */
  padding: 0;
  margin: 0;
  background-color: #f2f2f2; /* Set background color */
  border-radius: 5px;
  margin: 1rem 0;
}

/* Styling for the <li> elements */
li {
  padding: 10px;
  border-bottom: 1px solid #ccc; /* Add a border bottom for separation */
  color: #333; /* Set text color */
}

/* Styling for the last <li> element to remove the border bottom */
li:last-child {
  border-bottom: none;
}
.custom-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
}

.primary {
  background-color: #007bff;
  color: #fff;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}

.primary:disabled {
  opacity: 0.5; /* Reduce opacity to indicate disabled state */
  cursor: not-allowed; /* Change cursor to indicate not-allowed */
  background-color: #ccc;
  color: #999;
}

.danger {
  background-color: #dc3545;
  color: #fff;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
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
