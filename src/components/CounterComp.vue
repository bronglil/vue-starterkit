<template>
  <div class="wrapper">
    <div class="container">
    <button  @click="increment">+</button>
    <div>{{ count }}</div>
    <button  @click="decrement">-</button>
  </div>
    <div class="publications">
      <span>{{ publishedBooks }}</span>
      <div>{{ fullName}}</div>
      <div v-if="first_name">{{ first_name}}</div>
      <div v-if="last_name">{{ last_name}}</div>
      <input v-model="fullNameInput" @input="updateFullName" placeholder="Enter Full Name" />
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
        count: 0,
        first_name: 'john',
        last_name: 'doe',
        books: [ ],
        fullNameInput: ''
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

    updateFullName() {
      [this.first_name, this.last_name] = this.fullNameInput.split(' ');
    }
  },
  mounted() {
      this.increment();
      this.books.push("vue3 - lad from homes")
      console.log("mounted", this.count);
  },
  computed: {
    fullName: {
          get(){
             return this.first_name || '' + ' ' + this.last_name || ''
          },

          setValue(newValue){
            [this.first_name, this.last_name] = newValue.split(' ')
          }
      },
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
  border: 1px solid black;
  padding: 10px;
}
</style>