// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {   //this is equalvalent to the global states/data
        products: []
    },
    getters: {  //this is equalvalent to the computed state.
       avaliableProducts(state){
            return state.products.filter((item) => item.inventory > 0)
       }
    },

    actions: {  //that is equalvalent to the methods.
        fetchProducts(){

        }
    },

    mutations: {  //this is for setting or updating the state
      setProducts(state, products){
          state.products = products;
      }
    }
})
