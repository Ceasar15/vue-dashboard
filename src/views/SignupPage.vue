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
          src="https://media.istockphoto.com/vectors/intestine-logo-concept-vector-id1279896016?k=20&m=1279896016&s=612x612&w=0&h=UFj0KpK0_75dm4OLHa6gOtpMztoocLpaMnIMqLI38mQ="
      >

      </v-img>
      <v-text class="text-black font-weight-bold text-decoration-underline text-high-emphasis text-size-bold"
              style="margin-left: 155px;"
      >
        Register
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
            sm="5"
        >
          <v-text-field
              label="Last Name"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              label="Email"
              filled
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              label="Phone Number"
              filled
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              label="Password"
              outlined
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              label="Confirm Password"
              outlined
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="12"
            class="mt-0 mb-0"
            style="height: 80px;"
        >
          <v-checkbox
              v-model="checkbox"
              :error-messages="errors"
              value="1"
              label="I agree with the terms and conditions of the company"
              type="checkbox"
              required
          ></v-checkbox>
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
               Already have an account?   <a href="signIn">SignIn</a>
          </span>
          <span style="margin-left: 29px; margin-top: 20px">
              Back to <a href="dashboard">Home</a>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

    <Field name="field" :rules="isRequired" />



</template>

<script>
import {Field} from 'vee-validate'

export default {
  name: "SignupPage",
  components: {Field},
  // mixins: [validationMixin],
  data() {
    return {
      imageY: require("../../src/assets/development.png"),
      imageX: {backgroundImage: "url(https://vuejs.org/images/logo.png)"},
      name: '',
      email: '',
      select: null,
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      phoneNumber: '',
      checkbox: null,
    }
  }
  ,
  inject: ['getUser'],
  methods: {
    isRequired(value) {
          return value ? true: "This field is required."
    },
    submit() {
      this.$refs.observer.validate()
    }
    ,
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    }
  }
  ,
}
</script>

<style>
.container {
}
</style>