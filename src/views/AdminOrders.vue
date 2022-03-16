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
    ></v-data-table>
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


<script>
export default {
  name: "AdminOrders",
  data() {
    return {
      dd: "ff",
    };
  },
};
</script>
<style scoped>

</style>