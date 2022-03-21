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
          <v-text-field v-model="form.firstName"
                        label="First Name"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field v-model="form.lastName"
                        label="Last Name"
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field v-model="form.email"
                        label="Email"
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field v-model="form.username"
                        label="Username"
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            sm="5"
        >
          <v-text-field
              v-model="form.password"
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
              v-model="form.password2"
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
              v-model="form.checkbox"
              :error-messages="v.$errors"
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
import {required, helpers, sameAs} from '@vuelidate/validators'

export default {
  name: "SignupPage",
  components: {},
  setup: () => ({v: useVuelidate()}),
  data() {
    return {
      show1: false,
      show2: false,
      select: null,
      form:
          {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password:'',
            password2: '',
            checkbox: false,
          },
    }
  },
  validations() {
    return {
      firstName: {required: helpers.withMessage('This field cannot be empty1', required)},
      lastName: {required: helpers.withMessage('This field cannot be empty2', required)},
      username: {required: helpers.withMessage('This field cannot be empty3', required)},
      email: { required: helpers.withMessage('This field cannot be empty4', required)},
      password: {required},
      password2: {
        sameAsPassword: helpers.withMessage("Passwords do not match", sameAs(this.password)),
      },
      checkbox: { required }
    }
  },
  methods: {
    async submit() {
      const result = await this.v.$validate()
      console.log(11, result)
      if (!result) {
        // notify user form is invalid
        console.log(22, result)
      }
      console.log(55, result)
      console.log(this.form)

      // await this.$router.push('/signIn')
    },
    setFirstName($event) {
      this.form.firstName = $event.target.value.toUpperCase()
      this.v.firstName.$touch()
    },
    setLastName($event) {
      this.form.lastName = $event.target.value.toUpperCase()
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