<template>
  <div class="home">
    <Catalog />
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from "@/views/CatalogsView.vue";

export default {
  name: "HomeView",
  components: {
    Catalog,
  },
};
</script>
