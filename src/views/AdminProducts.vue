<template>
  <v-row>
    <v-col
      cols="12"
      class="text-grey-darken-1"
      style="display: flex; justify-content: space-between"
    >
      <v-title>
        <p class="ml-12" style=" margin-top: 10px; font-size: 1.5rem">Products</p>
      </v-title>
      <v-text>
        <v-btn>
          <v-icon left="True"> mdi-import </v-icon>
          <span class="text-black"> Import </span>
        </v-btn>
        <ExportButton></ExportButton>
        <v-btn class="ma-2" color="#0D47A1" @click="createProducts">
          <v-icon left="True" color="orange"> mdi-plus </v-icon>
          <span style="color: white; font-weight: 900"> Create Product </span>
        </v-btn>
      </v-text>
    </v-col>
  </v-row>
  <v-row class="ml-9" cols="12">
    <v-col cols="6">
      <SearchBar></SearchBar>
    </v-col>
    <v-col cols="3.5">
      <v-card>
        <v-select
          v-model="selectedCategory"
          :items="categoryA"
          prepend-inner-icon="mdi-filter-variant"
          menu-props="auto"
          hide-details
          label="Categories"
          class="ml-1"
          value="Choose a category"
          single-line
          v-on:input="directCategory"
        >
        </v-select>
      </v-card>
    </v-col>
    <v-col cols="2.5">
      <v-card>
        <v-select
          :items="sort"
          prepend-inner-icon="mdi-arrow-expand"
          menu-props="auto"
          hide-details
          label="Sort"
          class="ml-1 text-center"
          single-line
          value="Sort by Name or Price"
        ></v-select>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="ml-10" cols="12">
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
    <v-col v-for="product in products" :key="product.name" cols="12" md="3">
      <v-hover v-slot="{ isHovering, props }" close-delay="100">
        <v-card
          :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          :key="product.name"
          max-width="450"
          v-bind="props"
        >
          <router-link
            :to="{
              name: 'AdminDetailProduct',
              params: { productID: product.id },
            }"
          >
            <v-img height="300" :src="product.image">
              <v-chip class="ma-0" color="deep-orange accent-4"> 15% </v-chip>
            </v-img>
          </router-link>

          <v-card-title
            style="
              white-space: nowrap;
              width: 235px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: block;
            "
            class="recomTitle"
          >
            <router-link
              :to="{
                name: 'AdminDetailProduct',
                params: { productID: product.id },
              }"
              custom
              v-slot="{ href, navigate }"
            >
              <NavLink :href="href" @click="navigate(product.title)">
                {{ product.title }}
              </NavLink>
            </router-link>
          </v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense size="14"></v-rating>
              <div
                class="grey--text ms-4"
                style="font-size: 10px; display: flex; align-items: center"
              >
                {{ product.rating.rate }} ({{ product.rating.count }})
              </div>
            </v-row>
          </v-card-text>
          <v-card-title
            class="recomPriceProduct"
            style="
              display: flex !important;
              justify-content: space-between !important;
            "
          >
            <div>
              $ {{ product.price }}
              <span class="ml-3">
                <del
                  class="
                    discount
                    universalColor
                    font-weight-bold
                    text-sm-body-2
                  "
                >
                  $ 1,290.59
                </del>
              </span>
            </div>
          </v-card-title>
          <div class="ml-3" style="height: 50px">
            <v-btn
              style="width: 150px; height: 40px; border-radius: 3px"
              class="addToCart"
              color="#0D47A1"
              @click.stop="open_dialog"
            >
              <v-icon color="orange" left="True"> mdi-cart </v-icon>
              <span style="color: white; font-weight: 900"> Add To Cart</span>
            </v-btn>
          </div>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
  <div class="text-center mt-4">
    <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
  </div>
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
  <!--End Delete Dialog -->
  <div>
    <v-btn @click="get_in_category"> Change category </v-btn>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { sort, categoryA } from "@/utils/desserts";
import axios from "axios";
import SearchBar from "@/components/common/SearchBar.vue";
import ExportButton from "@/components/common/ExportButton.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "AdminProducts",
  components: { SearchBar, ExportButton, ClipLoader },
  data() {
    return {
      color: "green",
      color1: "orange",
      loadingI: true,
      cate: [],
      selectedCategory: [],
      filter: "",
      products: [],
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    createProducts() {
      this.$router.push("/admin-create-products");
    },
    viewDetailProduct() {
      this.$router.push("/admin-detail-product");
    },
    open_dialog() {
      this.dialog = true;
    },
    delete_dialog_message() {
      this.dialog = false;
    },
    async get_in_category() {
      try {
        const para = "jewelery";
        const baseUrl = "https://fakestoreapi.com/products/category/";
        const url = baseUrl + para;
        let he = await this.axios.get(url);
        this.products = he.data;
      } catch (e) {
        console.log("Error", e);
      }
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.products = response.data;
        this.loadingI = false;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed: {
    filterItems() {
      return this.products.filter(function (val) {
        return val.category == this.filter;
      });
    },
  },
  setup() {
    function fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          productsLoading = false;
          productss.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    onMounted(() => {
      fetchProducts();
    });
    const page = ref(1);
    const search = ref();
    const dialog = ref(false);
    const productss = ref(null);
    const categories = ref(null);
    var productsLoading = ref(true);

    return {
      page,
      search,
      dialog,
      sort,
      categoryA,
      categories,
      productss,
      productsLoading,
    };
  },
};
</script>
<style>
.v-select__selections {
  height: 20px;
  overflow: hidden;
}
.productDialog {
  left: 53%;
}

.v-card-actions {
  text-align: center;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
}
.quantityProducts {
  border: 1px solid black;
  width: 50px;
  height: 20px;
  border-radius: 3px;
  text-align: center;
  margin-right: 10px;
}
.recomPriceProduct {
  color: #303e67;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>