<template>
  <v-row>
    <v-col
      cols="12"
      class="text-grey-darken-1"
      style="display: flex; justify-content: space-between"
    >
      <v-title style="padding: 28px">
        <p class="ml-7" style="font-size: 1.5rem">Product-Detail</p>
      </v-title>
      <v-text>
        <v-btn>
          <v-icon left="True"> mdi-lightbulb-on </v-icon>
          <span class="text-black"> Favorite </span>
        </v-btn>
        <export-button></export-button>
        <v-btn class="ma-2" color="#0D47A1" @click="createProducts">
          <v-icon left="True" color="orange"> mdi-cart </v-icon>
          <span style="color: white; font-weight: 900"> Add To Cart</span>
        </v-btn>
      </v-text>
    </v-col>
  </v-row>
  <v-row class="ml-10" no-gutters>
    <div
      v-show="loadingI"
      style="
        height: 500px;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
      "
      class="ml-9"
    >
      <clip-loader
        :loading="loadingI"
        color="#0D47A1"
        size="86px"
      ></clip-loader>
    </div>
    <v-col cols="12" sm="6" md="6" class="imageContainer">
      <img class="detailImage" alt="product image" :src="products.image" />
    </v-col>
    <v-col cols="6" md="6">
      <p class="mx-4 font-medium-bold text-decoration-underline">Description</p>
      <v-card-title
        style="
          white-space: nowrap;
          width: 700px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        "
      >
        {{ products.title }}
      </v-card-title>
      <v-card-header class="universalColor">
        {{ products.description }}
      </v-card-header>
      <v-row align="center" class="ma-4">
        <div class="text-black" style="display: flex; align-item: center">
          <v-rating value="4.5" color="amber" dense size="20"></v-rating>
          <div
            class="ml-2"
            style="font-size: 14px; display: flex; align-items: center"
          >
            4.5 (58 reviews)
          </div>
        </div>
      </v-row>
      <v-card-title class="my-4">
        $ {{ products.price }}
        <del class="ml-3 universalColor font-weight-bold text-sm-body-2">
          $ 1,290.59
        </del>
        <div class="ml-3 text-red-darken-3 font-weight-bold text-md-body-2">
          50% Off
        </div>
      </v-card-title>
      <div class="ma-4 universalColor">
        <text class="font-weight-medium">Features: </text>
        <p>
          <v-icon dense color="green">mdi-check</v-icon> It is a long
          established fact that a reader will be distracted.
        </p>
        <p>
          <v-icon color="green">mdi-check</v-icon> Contrary to popular belief,
          Lorem Ipsum is not text.
        </p>
      </div>
      <div class="ma-4 universalColor">
        <text class="font-weight-medium text-capitalize"
          >Category: {{ products.category }}</text
        >
      </div>
      <div class="ml-4">
        <input class="quantity" type="number" placeholder="0" />
        <v-btn
          style="width: 200px; height: 40px; border-radius: 3px"
          class="addToCart"
          color="#0D47A1"
          @click="open_cart"
        >
          <v-icon color="orange" left="True"> mdi-cart </v-icon>
          <span style="color: white; font-weight: 900"> Add To Cart</span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
  <v-row class="my-6">
    <v-col cols="3">
      <v-card class="pa-2" tile outlined>
        <v-icon color="green" class="pa-6 text-h2">mdi-truck-fast</v-icon>
        <v-card-title class="pa-2">Fast Delivery</v-card-title>
        <v-card-text class="universalColor"
          >It is a long established fact that a reader will be distracted.
          Contrary to popular belief</v-card-text
        >
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="pa-2" tile outlined>
        <v-icon color="red" class="pa-6 text-h2">mdi-refresh</v-icon>
        <v-card-title class="pa-2">Returns in 30 Days</v-card-title>
        <v-card-text class="universalColor"
          >It is a long established fact that a reader will be distracted.
          Contrary to popular belief</v-card-text
        >
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="pa-2" tile outlined>
        <v-icon color="orange" class="pa-6 text-h2">mdi-headset</v-icon>
        <v-card-title class="pa-2">Online Support 24/7</v-card-title>
        <v-card-text class="universalColor"
          >It is a long established fact that a reader will be distracted.
          Contrary to popular belief</v-card-text
        >
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="pa-2" tile outlined>
        <v-icon color="#6D81F5" class="pa-6 text-h2">mdi-wallet</v-icon>
        <v-card-title class="pa-2">Secure Payment</v-card-title>
        <v-card-text class="universalColor"
          >It is a long established fact that a reader will be distracted.
          Contrary to popular belief</v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
  <v-row cols="12">
    <v-col cols="12" md="3" v-for="recom in finalCategory" :key="recom.name">
      <v-card class="pa-2" outlined tile>
        <v-img height="150" :src="recom.image"> </v-img>
        <v-card-title class="recomTitle">
          {{ recom.title }}
        </v-card-title>
        <v-card-title
          class="recomPrice"
          style="
            display: flex !important;
            justify-content: space-between !important;
          "
        >
          <div>
            $ {{ recom.price }}
            <span class="ml-2">
              <del class="discount"> $ 1,290.59 </del>
            </span>
          </div>
          <div class="my-2">
            <v-rating :value="4.5" color="amber" dense size="20"></v-rating>
          </div>
        </v-card-title>

        <v-btn class="ml-3" color="#0D47A1" @click.stop="open_dialog">
          <v-icon color="orange" left="True"> mdi-cart </v-icon>
          <span style="color: white; font-weight: 900"> Add To Cart</span>
        </v-btn>
      </v-card>
    </v-col>
    <v-col cols="6" md="3">
      <v-card class="pa-2" outlined tile>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </v-card>
    </v-col>
  </v-row>
  <v-row style="height: 150px">
    <v-col cols="12" md="3">
      <v-card class="pa-2" outlined tile>
        There are many variations of passages
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card class="pa-2" outlined tile>
        There are many variations of passages
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card class="pa-2" outlined tile>
        There are many variations of passages
      </v-card>
    </v-col>
  </v-row>
  <v-dialog
    class="productDialog"
    v-model="dialog"
    max-width="120"
    attach="true"
    style=""
  >
    <v-card>
      <v-card-text class="text-h6">
        Successfully added product to cart
      </v-card-text>
      <v-card-actions class="v-card-actions">
        <v-btn color="#81D4FA" text @click="delete_dialog_message">
          Okay
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import ExportButton from "@/components/common/ExportButton.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "AdminDetailProduct",
  components: { ExportButton, ClipLoader },
  props: {
    productID: Number,
  },
  data() {
    return {
      loadingI: true,
      products: {},
      categoryProducts: "",
      finalCategory: {},
      categoryName: {},
      dialog: false,
    };
  },
  methods: {
    open_cart() {
      this.dialog = true;
    },
    delete_dialog_message() {
      this.dialog = false;
    },
  },
  beforeMount() {
    axios
      .get("https://fakestoreapi.com/products/" + this.productID + "/")
      .then((response) => {
        this.loadingI = false;
        this.products = response.data;
        this.categoryName = this.products.category;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        this.loadingI = false;
        this.categoryProducts = response.data;
        const first = this.categoryProducts;
        console.log(1541, this.categoryName);
        const second = Object.fromEntries(Object.entries(first).slice(0, 3));
        this.finalCategory = second;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
.imageContainer {
  /* border: 2px solid chartreuse; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}
.detailImage {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
  /* border: 2px solid tomato; */
}
.gtgt {
  height: 100%;
  width: 100%;
}
.quantity {
  border: 1px solid black;
  width: 150px;
  height: 40px;
  border-radius: 3px;
  text-align: center;
  margin-right: 10px;
}
.universalColor {
  color: #a4abc5;
}
.quantity:focus {
  border: 1px solid black;
  outline: none;
}
.addToCart {
  text-decoration-color: aqua;
}
.recomTitle {
  font-size: 15px;
  color: #7081b9;
  font-weight: 500;
  white-space: nowrap;
  width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.recomPrice {
  color: #303e67;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 24px;
}
.recomPrice .discount {
  color: #8997bd;
  font-weight: 400;
  font-size: 13px;
}
</style>