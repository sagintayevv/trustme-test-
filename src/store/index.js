import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        type: "simple",
        id: 1,
        sku: "s1",
        title: "Product 1",
        regular_price: {
          currency: "USD",
          value: 29.12,
        },
        image: "logo.png",
        brand: 1,
      },
      {
        type: "simple",
        id: 2,
        sku: "s1",
        title: "Product 2",
        regular_price: {
          currency: "USD",
          value: 40.12,
        },
        image: "logo.png",
        brand: 2,
      },
      {
        type: "simple",
        id: 3,
        sku: "s1",
        title: "Product 3",
        regular_price: {
          currency: "USD",
          value: 45.12,
        },
        image: "logo.png",
        brand: 3,
      },
      {
        type: "simple",
        id: 4,
        sku: "s1",
        title: "Product 4",
        regular_price: {
          currency: "USD",
          value: 27.12,
        },
        image: "logo.png",
        brand: 4,
      },
      {
        type: "simple",
        id: 5,
        sku: "s1",
        title: "Product 4",
        regular_price: {
          currency: "USD",
          value: 27.12,
        },
        image: "logo.png",
        brand: 4,
      },
    ],
    cart: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
