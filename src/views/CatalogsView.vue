<template>
  <div class="container-fluid">
    <nav class="navbar bg-light mb-5">
      <div class="container">
        <!-- <a href="">logo</a> -->
        <img src="@/assets/logo.png" style="width: 30px" />
        <button
          type="button"
          class="btn btn-none position-relative"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i
            v-if="!this.$store.state.cart.length"
            class="bi bi-cart-plus"
            style="font-size: 30px"
          ></i>
          <i
            v-if="this.$store.state.cart.length"
            class="bi bi-cart-plus-fill"
            style="font-size: 30px"
          >
          </i>
          <span class="position-absolute badge rounded-pill bg-danger">
            {{ this.$store.state.cart.length }}
          </span>
        </button>

        <!-- Modal -->
        <cart-items
          @removeFromCart="removeFromCart"
          @minus="minus"
          @plus="plus"
          :cart="this.$store.state.cart"
        />
      </div>
    </nav>
    <div class="container d-flex">
      <div class="left-menu">
        <ul class="list-group mt-4">
          <li
            class="list-group-item d-flex justify-content-between align-items-center bg-primary text-white"
            @click="allBrands()"
          >
            All Brands
          </li>
          <li
            v-for="item in brands"
            :key="item.id"
            class="list-group-item d-flex justify-content-between align-items-center"
            @click="filter(item.id)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="content mx-4">
        <h6 class="content-title">Catalog</h6>
        <product-view
          @addToCart="addProductToCart"
          :product="filteredProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductView from "@/components/ProductView";
import CartItems from "@/components/CartItems";
export default {
  name: "CatalogView",
  props: {},
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProduct() {
      if (this.filterProduct.length) {
        return this.filterProduct;
      } else {
        return this.products;
      }
    },
  },
  components: {
    ProductView,
    CartItems,
  },
  data() {
    return {
      brands: [
        {
          id: 1,
          title: "Brand 1",
          sort: "100",
          code: "brand_1",
        },
        {
          id: 2,
          title: "Brand 2",
          sort: "200",
          code: "brand_2",
        },
        {
          id: 3,
          title: "Brand 3",
          sort: "200",
          code: "brand_3",
        },
        {
          id: 4,
          title: "Brand 4",
          sort: "200",
          code: "brand_3",
        },
      ],
      filterProduct: [],
    };
  },
  methods: {
    addProductToCart(product) {
      this.$store.commit("addProductToCart", product);
    },
    updateProductQuantity(id, quantity) {
      this.$store.commit("updateProductQuantity", { id, quantity });
    },
    removeFromCart(cartProduct) {
      this.$store.commit("removeFromCart", cartProduct);
    },
    minus(item) {
      if (item.quantity > 1) {
        this.updateProductQuantity(item.id, item.quantity - 1);
        console.log(item);
      }
    },
    plus(item) {
      this.updateProductQuantity(item.id, item.quantity + 1);
      console.log(item);
    },
    allBrands() {
      this.filterProduct = [];
    },
    filter(brand) {
      this.filterProduct = [];
      this.products.map((item) => {
        if (item.brand === brand) {
          this.filterProduct.push(item);
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.left-menu {
  width: 300px;
}
</style>
