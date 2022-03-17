<template>
  <v-row>
    <v-col cols="12" class="text-grey-darken-1" style="display: flex; justify-content:space-between;">
      <v-title style="padding: 28px; ">
        <p class="ml-7" style="font-size:1.5rem">Orders</p>
      </v-title>
      <v-text>
        <v-btn>
          <v-icon left=True>
            mdi-printer
          </v-icon>
          <span class="text-black">
            Print
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
            color="#69F0AE"
        >
          <v-icon left=True>
            mdi-plus
          </v-icon>
          <span style="color: white; font-weight: 900;">
            Create Order
          </span>
        </v-btn>
      </v-text>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style scoped>

</style>