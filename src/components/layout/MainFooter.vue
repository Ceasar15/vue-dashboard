<template>
  <v-card class="flex" flat tile style="width: 100%; background-color: #ccc;">
    <v-card-title
      class="teal"
      style="display: flex; justify-content: space-between"
    >
      <p class="subheading" style="color: #000;"
        >Get connected with us on all social networks!</p>
      <div>
        <v-btn icon class="mx-4 grey lighten-4">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon class="mx-4" dark>
          <v-icon size="24px"> mdi-twitter </v-icon>
        </v-btn>
        <v-btn icon class="mx-4" dark>
          <v-icon size="24px"> mdi-github </v-icon>
        </v-btn>
        <v-btn icon class="mx-4" dark>
          <v-icon size="24px"> mdi-email </v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text style="color: #000;" class="py-2 text-center">
      &#x24B8; {{ new Date().getFullYear() }} —
      <strong>Ceasar <v-icon size="24px">mdi-crown </v-icon> </strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {};
  },
};
</script>

<style>
</style>