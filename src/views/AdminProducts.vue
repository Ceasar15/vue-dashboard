<template>
  <v-row>
    <v-col cols="12" class="text-grey-darken-1" style="display: flex; justify-content:space-between;">
      <v-title style="padding: 28px; ">
        <p class="ml-7" style="font-size:1.5rem">Products</p>
      </v-title>
      <v-text>
        <v-btn>
          <v-icon left=True>
            mdi-import
          </v-icon>
          <span class="text-black">
            Import
          </span>
        </v-btn>
        <v-btn
            class="ma-4"
            color="black"
        >
          Export
          <v-icon right="true">
            mdi-arrow-down-drop-circle-outline
          </v-icon>
        </v-btn>
        <v-btn
            class="ma-2"
            color="#0D47A1"
        >
          <v-icon left=True>
            mdi-plus
          </v-icon>
          <span style="color: white; font-weight: 900;">
            Create Product
          </span>
        </v-btn>
      </v-text>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-card>
        <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search by any parameter..."
            filled
            hide-details
            outlined
            class="ml-2"
        ></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="3.5">
      <v-card>
        <v-select
            :items="categories"
            prepend-icon="mdi-filter-variant"
            menu-props="auto"
            hide-details
            label="Categories"
            class="ml-1"
            single-line
            value="Choose a category"
        ></v-select>
      </v-card>
    </v-col>
    <v-col cols="2.5">
      <v-card>
        <v-select
            :items="sort"
            prepend-icon="mdi-arrow-expand"
            menu-props="auto"
            hide-details
            label="Sort"
            class="ml-1"
            single-line
            value="Sort by Name or Price"
        ></v-select>
      </v-card>
    </v-col>
  </v-row>




<v-row>
  <v-col
      v-for="product in products"
      :key="product.name"
      class="ma-1"
      cols="2"
  >
    <v-card
        :key="product.name"
        max-width="374"
        class="ma-1"
    >
      <v-img
          height="200"
          src="https://www.ecommerce-admin.com/demo/images/items/2.jpg"
      >
        <v-chip class="ma-0" color="deep-orange accent-4">
          15%
        </v-chip>
      </v-img>
      <v-card-title>
        <!--      Bag and Jeans And A lot of Products-->
        {{ product.name }}
      </v-card-title>
      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <v-rating
              :value="4.5"
              color="amber"
              dense
              size="14"
          ></v-rating>
          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row>
      </v-card-text>
      <v-card-title>
        $ {{ product.price }}
        <strike class="ml-3 text-grey-darken-1">
          $ 840.65
        </strike>
      </v-card-title>
      <v-card-actions>
        <v-btn
            color="#E3F2FD"
            text
            @click="reserve"
        >
          Edit
        </v-btn>
        <v-btn
            color="#FF8A80"
            text
            @click="reserve"
        >
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>





</template>


<script>
import {sort, categories, products} from "@/utils/desserts"


export default {
  name: "AdminProducts",
  data() {
    return {
      sort: sort,
      categories: categories,
      products: products,
      selection: 1,
    };
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
};
</script>

<style>
.v-select__selections {
  height: 20px;
  overflow: hidden;
}
</style>