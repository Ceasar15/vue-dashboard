<template>
  <v-card>
    <v-card-title>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details

      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        height="300px"

    ></v-data-table>
    <v-row>
      <v-col>
        <v-card>
          <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
          >
            ddfd
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-card>


  <div>
    <div class="flex flex-wrap -mx-1 overflow-hidden">
      <div class="my-1 px-1 w-1/6 overflow-hidden">Column Content</div>
      <div class="my-1 px-1 w-1/6 overflow-hidden">Column Content</div>
    </div>
    <div class="flex flex-wrap -mx-1 overflow-hidden">
      <div class="my-1 px-1 w-1/6 overflow-hidden">Column Content</div>
      <div class="my-1 px-1 w-1/6 overflow-hidden">Column Content</div>
    </div>
  </div>
</template>


<script >
import { desserts, headers, testData, items } from "@/utils/desserts"

export default {
  name: "AdminOrders",
  data() {
    return {
      search: '',
      desserts: desserts,
      headers: headers,
      testData: testData,
      items: items
    };
  },
};
</script>
<style scoped lang="css">
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

</style>