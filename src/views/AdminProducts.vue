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


  <v-row class="ml-10">
    <v-col
        v-for="product in products"
        :key="product.name"
        class="ml-9"
        cols="2"
    >
      <v-card
          :key="product.name"
          max-width="450"
          class="my-3"
      >
        <v-img
            height="300"
            :src="product.image"
        >
          <v-chip class="ma-0" color="deep-orange accent-4">
            15%
          </v-chip>
        </v-img>
        <v-card-title>
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
            $ {{ product.discount }}
          </strike>
        </v-card-title>
        <v-card-actions>
          <v-btn
              color="#E3F2FD"
              text
              @click="reserve"
              plain
          >
            <v-icon>
              mdi-border-color
            </v-icon>
            Edit
          </v-btn>
          <v-btn
              color="#FF8A80"
              @click.stop="dialog = true">
            <v-icon>
              mdi-delete
            </v-icon>
            Delete
          </v-btn>
          <v-dialog
              v-model="dialog"
              max-width="290"
          >
            <v-card>
              <v-card-text class="text-h5">
                Are you sure you want to delete this product
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="red darken-1"
                    text
                    @click="dialog = false"
                >
                  Disagree
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>



</template>


<script>
import {sort, categories, products} from "@/utils/desserts"
import {ref} from 'vue'

export default {
  name: "AdminProducts",
  setup() {
    const count = ref(0)
    const delete_here = ref()
    return {
      count,
      delete_here
    }
  },
  data() {
    return {
      sort: sort,
      categories: categories,
      products: products,
      selection: 1,
      loading: false,
      page: 1,
      dialog: false
    };
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    async remove() {
      console.log("1Hello")
      this.loading = true
      console.log(this.loading)
      console.log("2Hello")
      await new Promise(resolve => setTimeout(resolve, 3000))
      this.loading = false
      console.log("4Hello")
      console.log(this.loading)
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