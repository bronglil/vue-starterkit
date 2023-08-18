<template>
  <div class="wrapper">
    <div class="container">
    <button  @click="increment">+</button>
    <div>{{ count }}</div>
    <button  @click="decrement">-</button>
  </div>
    <div class="publications">
      <span>{{ publishedBooks }}</span>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
        count: 0,
        name: 'john doe',
        books: [ ]
    }
  },
  methods: {
     increment(){
       this.count ++
      //  await nextTick()
    },
    decrement(){
        this.count --
    },
  },
  mounted() {
      this.increment();
      this.books.push("vue3 - lad from homes")
      console.log("mounted", this.count);
  },
  computed: {
      publishedBooks(){
        return this.books.length > 0 ? 'Yes' : 'No'
      }
  }
}

</script>


<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container > button {
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

.publications{
  margin-top: 20px;
}
</style>