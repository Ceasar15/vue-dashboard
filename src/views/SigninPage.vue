<template>
  <v-form
  lazy-validation
  >
    <v-container class="container"
                 :style="{
                       'width': '100%',
                  }"
    >
      <v-img
          width="400px"
          height="350px"
          position="center"
          style="margin-left: 540px;"
          src="https://media.istockphoto.com/vectors/web-ad-vector-id1322792803?k=20&m=1322792803&s=612x612&w=0&h=nOcC5ld1h2p25tTwin6JHAPTLBWIIygqRvq6QydAwOk="
      >

      </v-img>
      <v-text class="text-black font-weight-bold text-decoration-underline text-high-emphasis text-size-bold" style="padding-left: 170px; margin-left: 190px;"
      >
        Login
      </v-text>
      <v-row style="margin-top: 20px; margin-left: 190px; padding-left: 150px;">
        <v-col
            cols="12"
            sm="7"
            align-self="center"
        >
          <v-text-field
              label="Username"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="7"
        >
          <v-text-field
              label="Password"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="mt-0">
          <v-btn
              class="ml-0 text-center"
              type="submit"
              x-large
              color="light-blue lighten-2"
              @click="dashboard"
          >
            Login
          </v-btn>
          <span style="margin-left: 29px; margin-top: 20px">
               Don't have an account yet?   <a href="signUp">SignUp</a>
          </span>
          <span style="margin-left: 29px; margin-top: 20px">
              Back to <a href="dashboard">Home</a>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

</template>

<script>
export default {
  name: "SigninPage",
  props: {},
  data() {
    return {
      'ff': 'sd'
    }
  },
}
</script>

<style scoped>

</style>