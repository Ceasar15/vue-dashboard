<template>
  <div>
    <v-card>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search by any parameter..."
        filled
        hide-details
        outlined
        class="ml-2"
      ></v-text-field>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  setup() {
    return {};
  },
};
</script>

<style>
</style>