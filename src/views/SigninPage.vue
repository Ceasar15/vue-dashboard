<template>
  <v-form>
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
      <v-text class="text-black font-weight-bold text-decoration-underline text-high-emphasis text-size-bold" style="margin-left: 155px;"
      >
        Login
      </v-text>
      <v-row style="margin-top: 20px; padding-left: 150px;">
        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              label="First Name"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="12"
        >
          <v-text-field
              label="Last Name"
          ></v-text-field>
        </v-col>
        <v-col class="mt-0">
          <v-btn
              class="ml-0 text-center"
              type="submit"
              x-large
              color="light-blue lighten-2"
              @click="dashboard"
          >
            Create Account
          </v-btn>
          <span style="margin-left: 29px; margin-top: 20px">
               Already have an account?   <a href="signIn">Login</a>
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