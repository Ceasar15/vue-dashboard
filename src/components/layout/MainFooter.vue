<template>
  <v-card class="flex" flat tile style="width: 100%; background-color: #ccc">
    <v-card-title
      class="teal"
      style="display: flex; justify-content: space-between"
    >
      <p class="subheading" style="color: #000">
        Get connected with us on all social networks!
      </p>
      <div>
        <v-btn
          icon
          class="mx-4 grey lighten-4"
          href="https://www.linkedin.com/in/ceasar-agbekuadzi-bb9303159/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-4"
          dark
          href="https://twitter.com/dot__ceasar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon size="24px"> mdi-twitter </v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-4"
          dark
          href="https://github.com/Ceasar15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon size="24px"> mdi-github </v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-4"
          dark
          href="mailto:ceasarkwadwo@gmail.com&subject=Let Us Connect."
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon size="24px"> mdi-email </v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text style="color: #000" class="py-2 text-center">
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