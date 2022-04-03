<template>
  <v-col
    cols="12"
    class="text-grey-darken-1"
    style="display: flex; justify-content: space-between"
  >
    <v-title style="padding: 20px">
      <p class="" style="font-size: 1.5rem">Add Products</p>
    </v-title>
    <v-text>
      <v-btn>
        <v-icon left="True"> mdi-import </v-icon>
        <span class="text-black"> Import </span>
      </v-btn>
      <ExportButton></ExportButton>
      <v-btn class="ma-2" color="#0D47A1" @click="addProduct">
        <v-icon left="True"> mdi-attachment </v-icon>
        <span style="color: white; font-weight: 900"> Attachment </span>
      </v-btn>
    </v-text>
  </v-col>

  <v-row>
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
          class="ml-1"
          single-line
          value="Sort by Name or Price"
        ></v-select>
      </v-card>
    </v-col>
  </v-row>

  <v-form>
    <v-container class="grey lighten-5">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <v-card-title>Products</v-card-title>
            <v-text-field
              v-model="form.name"
              label="Product Name"
              single-line
            ></v-text-field>
            <v-card-title>Categories</v-card-title>
            <v-select
              label="Choose A Category"
              :items="categoryA"
              v-model="form.category"
              single-line
            >
            </v-select>
            <v-card-title>Gender</v-card-title>
            <v-select
              label="Choose A Gender"
              :items="categoryA"
              v-model="form.gender"
              single-line
            >
            </v-select>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-2" outlined tile>
            <v-card-title>Images</v-card-title>
            <v-file-input
              v-model="image"
              clearable
              :loading="loadingStatus"
              show-size
              label="File input"
              multiple
              @change="onFileChange"
            ></v-file-input>
            <v-container class="grey lighten-5" style="height: 265px">
              <v-row no-gutters>
                <v-col>
                  <v-card
                    style="width: 290px; height: 205px"
                    class="pa-2"
                    outlined
                    tile
                  >
                    <v-img
                      style="width: 100%; height: 100%; object-fit: fill"
                      v-if="form.image1"
                      :src="previewimage1"
                    />
                    <v-img
                      style="width: 100%; height: 100%; object-fit: fill"
                      class="center"
                      v-else
                      src="https://cdn.dribbble.com/users/264011/screenshots/4841271/gif-james_still_2x.gif?compress=1&resize=400x300"
                    />
                  </v-card>
                </v-col>
                <v-col order="12">
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                    style="width: 290px; height: 205px"
                  >
                    <v-img
                      style="width: 100%; height: 100%; object-fit: fill"
                      v-if="form.image2"
                      :src="previewimage2"
                    />
                    <v-img
                      style="width: 100%; height: 100%; object-fit: fill"
                      v-else
                      src="https://cdn.dribbble.com/users/264011/screenshots/4841271/gif-james_still_2x.gif?compress=1&resize=400x300"
                    />
                  </v-card>
                </v-col>
                <v-col order="1">
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                    style="width: 290px; height: 205px"
                  >
                    <v-img
                      style="width: 100%; height: 100%; object-fit: fill"
                      v-if="form.image3"
                      :src="previewimage3"
                    />
                    <v-img
                      style="width: 100%; height: 100%; object-fit: fill"
                      v-else
                      src="https://cdn.dribbble.com/users/264011/screenshots/4841271/gif-james_still_2x.gif?compress=1&resize=400x300"
                    />
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <v-row>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <v-row>
              <v-col cols="6">
                <v-card-title>Price</v-card-title>
                <v-text-field
                  style="width: 160px"
                  v-model="form.price"
                  type="number"
                  label="$ USD"
                  single-line
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-card-title>Discount</v-card-title>
                <v-text-field
                  style="width: 160px"
                  type="number"
                  label="In Percentage %"
                  v-model="form.discount"
                  single-line
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              class="ma-4"
              color="#A5D6A7"
              type="submit"
              @click="saveProducts"
            >
              Save
              <v-icon right="true"> mdi-arrow-down-drop-circle-outline </v-icon>
              <clip-loader
                :loading="loadingI"
                color="#0D47A1"
                size="10px"
                class="ml-3"
              ></clip-loader>
            </v-btn>
            <v-btn class="ma-4" color="#81D4FA">
              Draft
              <v-icon right="true"> mdi-content-copy </v-icon>
            </v-btn>
            <v-btn class="ma-4" color="#EF9A9A">
              Cancel
              <v-icon right="true"> mdi-close </v-icon>
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-2" style="height: 215px" outlined tile>
            <v-card-title>Description</v-card-title>
            <v-container style="height: 15px" fluid>
              <v-textarea
                v-model="form.description"
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
  </v-form>
</template>

<script>
import { categoryA } from "@/utils/desserts";
import { ref, reactive } from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";
import SearchBar from "@/components/common/SearchBar.vue";
import ExportButton from "@/components/common/ExportButton.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "AdminCreateProducts",
  components: { SearchBar, ExportButton, ClipLoader },
  data() {
    return {
      url: null,
      image: [],
      loadingI: false,
      files: [],
      loadingStatus: false,
      form: {
        name: "",
        description: "",
        price: "",
        discount: "",
        category: "",
        image1: null,
        image2: null,
        image3: null,
      },
      previewimage1: null,
      previewimage2: null,
      previewimage3: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files;
      this.form.image1 = file[0];
      this.form.image2 = file[1];
      this.form.image3 = file[2];
      this.previewimage1 = URL.createObjectURL(file[0]);
      this.previewimage2 = URL.createObjectURL(file[1]);
      this.previewimage3 = URL.createObjectURL(file[2]);
    },
    saveProducts() {
      this.loadingI = !this.loadingI;
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("description", this.form.description);
      formData.append("price", this.form.price);
      formData.append("discount", this.form.discount);
      formData.append("category", "ELT");
      formData.append("image1", this.form.image1);
      formData.append("image2", this.form.image2);
      formData.append("image3", this.form.image3);
      const token = VueCookies.get("accessToken");
      axios
        .post("https://ecommerce-platform-j.herokuapp.com/product/", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          this.$router.push("/admin-products");
        })
        .catch((error) => {
          console.log(44, error);
          this.alert = !this.alert;
        })
        .finally(() => {
          this.loadingI = !this.loadingI;
        });
    },
  },
  setup() {
    const productGender = ref("");
    const selectedCategory = reactive([]);

    return {
      categoryA,
      selectedCategory,
      productGender,
    };
  },
};
</script>

<style>
</style>