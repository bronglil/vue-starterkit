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
import store from "../../store/store";
import shop from "../../api";

export default {
  computed: {
    products() {
      return store.getters.avaliableProducts;
    },
  },
  created() {
    shop.getProducts((products) => {
      store.commit("setProducts", products);
    });
  },
};
</script>

<style scoped></style>
