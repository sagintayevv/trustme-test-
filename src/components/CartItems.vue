<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Корзина</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h6 v-if="cart.length == 0">Корзина пуста</h6>
          <ul v-if="cart.length > 0" class="list-group">
            <li
              v-for="item in cart"
              :key="item.id"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ item.title }}
              <p class="align-items-end mb-0">
                Price: {{ item.regular_price.value }}
              </p>
              <div class="d-flex">
                <span @click="minus(item)">-</span>
                <p class="align-items-end mb-0">{{ item.quantity }}</p>
                <span @click="plus(item)">+</span>
              </div>
              <button @click="removeFromCart(item)" class="btn btn-primary">
                Удалить
              </button>
            </li>
            <li
              class="list-group-item d-flex justify-content-end align-items-center"
            >
              Total price: {{ cartTotalCost }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
    },
  },
  name: "CartItems",
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      let result = [];
      this.cart.map((item) => {
        result.push(item.regular_price.value * item.quantity);
        console.log(item.quantity);
      });
      result = result.reduce((sum, el) => {
        return sum + el;
      });
      return result;
    },
  },
  methods: {
    removeFromCart(product) {
      this.$emit("removeFromCart", product);
    },
    minus(index) {
      this.$emit("minus", index);
    },
    plus(index) {
      this.$emit("plus", index);
    },
  },
};
</script>

<style>
span {
  cursor: pointer;
}
</style>
