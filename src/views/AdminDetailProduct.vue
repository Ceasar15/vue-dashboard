<template>
  <div>
    <p>Details of Products</p>
    {{ productID }}
    {{ products.id }}
    {{ products.title }}
    {{ products.title }}
    {{ products.price }}
    {{ products.description }}
    {{ products.category }}
    {{ products.image }}
    {{ products.rating.rate }}
        {{ products.rating.count }}

    <v-img height="300" :src="products.image"> </v-img>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminDetailProduct",
  props: {
    productID: Number,
    detailProductID: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    console.log(this.productID);
    axios
      .get("https://fakestoreapi.com/products/" + this.productID + "/")
      .then((response) => {
        console.log(response.data);
        this.products = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>