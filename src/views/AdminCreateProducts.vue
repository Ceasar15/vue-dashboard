<template>
  <v-col cols="12" class="text-grey-darken-1" style="display: flex; justify-content:space-between;">
    <v-title style="padding: 28px; ">
      <p class="ml-7" style="font-size:1.5rem">Add Products</p>
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
          @click="addProduct"
      >
        <v-icon left=True>
          mdi-attachment
        </v-icon>
        <span style="color: white; font-weight: 900;">
            Attachment
          </span>
      </v-btn>
    </v-text>
  </v-col>

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
            v-model="selectedCategory"
            :items="categoryA"
            prepend-icon="mdi-filter-variant"
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

  <v-container class="grey lighten-5">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>

      <v-col
          cols="6"
          md="4"
      >
        <v-card
            class="pa-2"
            outlined
            tile
        >
          <v-card-title>Products</v-card-title>
          <v-text-field label="Product Name"
                        single-line
          ></v-text-field>
          <v-card-title>Categories</v-card-title>
          <v-select
              label="Choose A Category"
              :items="categoryA"
              v-model="productCategory"
              single-line
          >
          </v-select>
          <v-card-title>Gender</v-card-title>
          <v-select
              label="Choose A Gender"
              :items="categoryA"
              v-model="productGender"
              single-line
          >
          </v-select>

        </v-card>
      </v-col>
      <v-col
          cols="12"
          md="8"
      >
        <v-card
            class="pa-2"
            outlined
            tile
        >
          Select at most 3 images
          <input type="file"
                 id="avatar" name="avatar"
                 accept="image/png, image/jpeg" multiple>

        </v-card>
      </v-col>
    </v-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col
          cols="6"
          md="4"
      >
        <v-card
            class="pa-2"
            outlined
            tile
        >
          <v-row>
            <v-col cols="6">
              <v-card-title>Price</v-card-title>
              <v-text-field style="width: 160px;" type="number" label="$ USD"
                            single-line
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-card-title>Discount</v-card-title>
              <v-text-field style="width: 160px;" type="number"
                            label="In Percentage %"
                            single-line
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-title>Price</v-card-title>
          <v-text-field style="width: 160px;" type="number" label="$ USD"
                        single-line
          ></v-text-field>
          <v-card-title>Discount</v-card-title>
          <v-text-field style="width: 160px;" type="number"
                        label="In Percentage %"
                        single-line
          ></v-text-field>
          <v-btn
              class="ma-4"
              color="green"
          >
            Save
            <v-icon right="true">
              mdi-arrow-down-drop-circle-outline
            </v-icon>
          </v-btn>
          <v-btn
              class="ma-4"
              color="#E3F2FD"
          >
            Draft
            <v-icon right="true">
              mdi-content-copy
            </v-icon>
          </v-btn>
          <v-btn
              class="ma-4"
              color="red lighten-1"
          >
            Cancel
            <v-icon right="true">
              mdi-close
            </v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col
          cols="12"
          md="8"
      >
        <v-card
            class="pa-2"
            outlined
            tile

        >
          <v-card-title>Description</v-card-title>
          <v-container fluid>
            <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Describe your product..."
                single-line
            ></v-textarea>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import {categoryA} from "@/utils/desserts"
import {ref, reactive} from 'vue'

export default {
  name: 'AdminCreateProducts',
  components: {},
  setup() {
    const productCategory = ref('')
    const productGender = ref('')
    const selectedCategory = reactive([])

    return {
      categoryA,
      selectedCategory,
      productCategory,
      productGender
    }
  },

}

</script>

<style>

</style>