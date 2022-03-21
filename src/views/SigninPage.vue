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
      <v-text class="text-black font-weight-bold text-high-emphasis text-size-bold"
              style="padding-left: 170px; margin-left: 190px;"
      >
        Login
      </v-text>
      <v-alert
          v-model="alert"
          type="error"
          light
          class="ml-90"
          style="width: 350px; margin-left: 350px;"
      >
        Wrong Username/Password
      </v-alert>
      <v-row style="margin-top: 20px; margin-left: 190px; padding-left: 150px;">
        <v-col
            cols="12"
            sm="7"
            align-self="center"
        >
          <v-text-field style="width: 350px;"
                        v-model="form.username"
                        label="Username"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="7"
        >
          <v-text-field
              style="width: 380px;"
              v-model="form.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              :type="show1 ? 'text' : 'password'"
              label="Password"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" class="mt-0">
          <v-btn
              class="ml-0 text-center"
              type="submit"
              x-large
              color="light-blue lighten-2"
              @click="submit"
          >
            Login
          </v-btn>
          <span style="margin-left: 29px; margin-top: 20px">
               Don't have an account yet?   <a href="signUp">SignUp</a>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

</template>



<script>
import axios from 'axios';
import VueCookies from 'vue-cookies'

export default {
  name: "SigninPage",
  props: {},
  data() {
    return {
      show1: false,
      alert: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async submit() {
      // const result = await this.v.$validate()
      axios.post('https://ecommerce-platform-j.herokuapp.com/api/token/', this.form)
          .then((res) => {
            //Perform Success Action
            console.log(res.data)
            VueCookies.set('token' , res.data.access, "1h")
            this.$router.push('/dashboard')
          })
          .catch((error) => {
            // error.response.status Check status code
            console.log(error)
            this.alert = !this.alert
          }).finally(() => {
        //Perform action in always
        console.log('finally')
      });
    },
  }
}
</script>

<style scoped>

</style>