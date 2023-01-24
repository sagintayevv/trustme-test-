import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {},
  mutations: {
    getProducts(state, payload) {
      state.products = payload;
    },
    addProductToCart(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    updateProductQuantity(state, { id, quantity }) {
      const existingProduct = state.cart.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    removeFromCart(state, product) {
      state.cart.splice(state.cart.indexOf(product), 1);
    },
  },
  actions: {
    async getProducts(context) {
      try {
        const result = await axios.get("http://localhost:3000/products");
        context.commit("getProducts", result.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
