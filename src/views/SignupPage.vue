<template>
  <v-form>
    <v-container
      class="container"
      :style="{
        width: '100%',
      }"
    >
      <v-img
        width="400px"
        height="350px"
        position="center"
        style="margin-left: 540px"
        src="https://media.istockphoto.com/vectors/intestine-logo-concept-vector-id1279896016?k=20&m=1279896016&s=612x612&w=0&h=UFj0KpK0_75dm4OLHa6gOtpMztoocLpaMnIMqLI38mQ="
      >
      </v-img>
      <v-text
        class="text-black font-weight-bold text-high-emphasis text-size-bold"
        style="margin-left: 155px"
      >
        Register
      </v-text>
      <v-alert
        v-model="alert"
        type="error"
        light
        class="ml-90"
        style="width: 350px; margin-left: 150px"
      >
        Kindly check your inputs!
      </v-alert>
      <p v-for="error of v.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>
      <v-row style="margin-top: 20px; padding-left: 150px">
        <v-col cols="12" sm="5">
          <v-text-field
            v-model="form.first_name"
            label="First Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="5">
          <v-text-field
            v-model="form.last_name"
            label="Last Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="5">
          <v-text-field v-model="form.email" label="Email"></v-text-field>
        </v-col>

        <v-col cols="12" sm="5">
          <v-text-field v-model="form.username" label="Username"></v-text-field>
        </v-col>

        <v-col cols="12" sm="5">
          <v-text-field
            v-model="form.password1"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="5">
          <v-text-field
            v-model="form.password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
            :type="show2 ? 'text' : 'password'"
            label="Confirm Password"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" class="mt-0 mb-0" style="height: 80px">
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
            :loading="loading"
            :disabled="loading"
            class="ml-0 text-center"
            type="submit"
            x-large
            color="light-blue lighten-2"
            @click="submit"
          >
            Create Account
            <clip-loader
              :loading="loadingI"
              color="#0D47A1"
              size="10px"
              class="ml-3"
            ></clip-loader>
          </v-btn>
          <span style="margin-left: 29px; margin-top: 20px">
            Already have an account?
            <router-link to="signIn">SignIn</router-link>
          </span>
          <span style="margin-left: 29px; margin-top: 20px">
            Back to <router-link to="dashboard">Home</router-link>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers, sameAs } from "@vuelidate/validators";
import { mapActions } from "vuex";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "SignupPage",
  components: { ClipLoader },
  setup: () => ({ v: useVuelidate() }),
  data() {
    return {
      loader: null,
      dialog: false,
      alert: false,
      loading: false,
      show1: false,
      show2: false,
      loadingI: false,
      select: null,
      form: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password1: "",
        password2: "",
      },
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  validations() {
    return {
      first_name: {
        required: helpers.withMessage("This field cannot be empty1", required),
      },
      last_name: {
        required: helpers.withMessage("This field cannot be empty2", required),
      },
      username: {
        required: helpers.withMessage("This field cannot be empty3", required),
      },
      email: {
        required: helpers.withMessage("This field cannot be empty4", required),
      },
      password1: { required },
      password2: {
        sameAsPassword: helpers.withMessage(
          "Passwords do not match",
          sameAs(this.password)
        ),
      },
      checkbox: { required },
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      this.loadingI = !this.loadingI;
      await this.Register(this.form).then(() => {
        this.$router.push("/signin");
      }).catch((error) => {
        console.error(33, error);
      }).finally(() => {
        this.loadingI = !this.loadingI;
      });
    },
    // // const result = await this.v.$validate()

    setFirstName($event) {
      this.form.first_name = $event.target.value.toUpperCase();
      this.v.first_name.$touch();
    },
    setLastName($event) {
      this.form.last_name = $event.target.value.toUpperCase();
      this.v.last_name.$touch();
    },
    checkEmail($event) {
      this.email = $event.target.value.toLowerCase();
      this.v.email.$touch();
    },
    checkPhoneNumber($event) {
      this.phoneNumber = $event.target.value.toNumber();
      this.v.phoneNumber.$touch();
    },
    setUsername($event) {
      this.username = $event.target.value.toLowerCase();
      this.v.username.$touch();
    },
    checkPassword($event) {
      this.password1 = $event.target.value;
    },
    confirmPassword($event) {
      this.password2 = $event.target.value;
    },
    checkCheckBox($event) {
      this.checkCheckBox = $event.target.value;
    },
  },
};
</script>

<style>
</style>