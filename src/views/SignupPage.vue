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
      <p v-for="error of v.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>
      <v-row style="margin-top: 20px; padding-left: 150px;">
        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field :value="firstName" @input="setFirstName"
                        label="First Name"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field :value="lastName" @input="setLastName"
                        label="Last Name"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field :value="email" @input="checkEmail"
                        label="Email"
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field :value="username" @input="setUsername"
                        label="Username"
                        filled
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              :value="password"
              @input="checkPassword"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              outlined
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              :value="password2"
              @input="confirmPassword"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show2 = !show2"
              :type="show2 ? 'text' : 'password'"
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
              :error-messages="v.$errors"
              @input="checkCheckBox"
              value="1"
              label="I agree with the terms and conditions of the company"
              type="checkbox"
              required
          >
          </v-checkbox>
        </v-col>
        <v-col class="mt-0">
          <v-btn
              class="ml-0 text-center"
              type="submit"
              x-large
              color="light-blue lighten-2"
              @click="submit"
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

</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, email, helpers, numeric, maxLength, minLength, sameAs} from '@vuelidate/validators'

export default {
  name: "SignupPage",
  components: {},
  setup: () => ({v: useVuelidate()}),
  data() {
    return {
      imageY: require("../../src/assets/development.png"),
      imageX: {backgroundImage: "url(https://vuejs.org/images/logo.png)"},
      name: '',
      email: '',
      show1: false,
      show2: false,
      select: null,
      firstName: '',
      lastName: '',
      username: '',
      password:'',
      password2: '',
      phoneNumber: '',
      checkbox: false,
    }
  },
  validations() {
    return {
      firstName: {required: helpers.withMessage('This field cannot be empty', required)},
      lastName: {required: helpers.withMessage('This field cannot be empty', required)},
      email: {
        required: helpers.withMessage('This field cannot be empty', required),
        email: helpers.withMessage('This is not a valid email', email)
      },
      phoneNumber: {
        required: helpers.withMessage('This field cannot be empty', required),
        numeric,
        maxLengthValue: maxLength(10),
        minLengthValue: minLength(10),
      },
      password: {required},
      password2: {
        sameAsPassword: helpers.withMessage("Passwords do not match", sameAs(this.password)),
      },
      checkbox: { required }
    }
  },
  methods: {
    submit() {
      const result = this.v.$validate()
      console.log(11, result)
      if (!result) {
        // notify user form is invalid
        console.log(22, result)
      }
      console.log(55, result)
      this.$router.push('/signIn')
    },
    setFirstName($event) {
      this.firstName = $event.target.value.toUpperCase()
      this.v.firstName.$touch()
    },
    setLastName($event) {
      this.lastName = $event.target.value.toUpperCase()
      this.v.lastName.$touch()
    },
    checkEmail($event) {
      this.email = $event.target.value.toLowerCase()
      this.v.email.$touch()
    },
    checkPhoneNumber($event) {
      this.phoneNumber = $event.target.value.toNumber()
      this.v.phoneNumber.$touch()
    },
    setUsername($event) {
      this.username = $event.target.value.toLowerCase()
      this.v.username.$touch()
    },
    checkPassword($event){
      this.password = $event.target.value
    },
    confirmPassword($event){
      this.password2 = $event.target.value
    },
    checkCheckBox($event){
      this.checkCheckBox = $event.target.value
    }
  },
}
</script>

<style>
.container {
}
</style>