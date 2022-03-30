<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "CategoriesBar",
  setup() {
    return {};
  },
};
</script>

<style>
</style>