<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="(items, index) of products" v-bind:key="index">
        {{ items?.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from "../../api";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    shop.getProducts((products) => {
      this.products = products;
    });
  },
};
</script>

<style scoped></style>
