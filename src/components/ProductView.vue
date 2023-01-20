<template>
  <div>
    <div class="catalog d-flex flex-wrap">
      <div
        v-for="product in product"
        :key="product.id"
        class="card mx-2 my-2"
        style="width: 18rem"
      >
        <img
          :src="require(`@/assets/${product.image}`)"
          class="card-img-top w-50 mx-auto"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.regular_price.currency }} :
            {{ product.regular_price.value }}
          </p>
          <button @click="addToCart(product)" class="btn btn-primary">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    product: {
      type: Array,
      required: [],
    },
  },
  methods: {
    addToCart(product) {
      this.$emit("addToCart", product);
    },
  },
};
</script>

<style></style>
