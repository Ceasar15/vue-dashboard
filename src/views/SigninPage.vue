<template>
  <v-form lazy-validation>
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
        src="https://media.istockphoto.com/vectors/web-ad-vector-id1322792803?k=20&m=1322792803&s=612x612&w=0&h=nOcC5ld1h2p25tTwin6JHAPTLBWIIygqRvq6QydAwOk="
      >
      </v-img>
      <v-text
        class="text-black font-weight-bold text-high-emphasis text-size-bold"
        style="padding-left: 170px; margin-left: 190px"
      >
        Login
      </v-text>
      <v-alert
        v-model="alert"
        type="error"
        light
        class="ml-90"
        style="width: 350px; margin-left: 350px"
      >
        Wrong Username/Password
      </v-alert>
      <v-row style="margin-top: 20px; margin-left: 190px; padding-left: 150px">
        <v-col cols="12" sm="7" align-self="center">
          <v-text-field
            style="width: 350px"
            v-model="form.username"
            label="Username"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="7">
          <v-text-field
            style="width: 380px"
            v-model="form.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            name="input-10-2"
            class="input-group--focused"
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
            <clip-loader
              :loading="loadingI"
              color="#0D47A1"
              size="10px"
            ></clip-loader>
          </v-btn>
          <span style="margin-left: 29px; margin-top: 20px">
            Don't have an account yet?
            <router-link to="signUp">SignUp</router-link>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>



<script>
import { mapActions } from "vuex";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "SigninPage",
  components: { ClipLoader },
  props: {},
  data() {
    return {
      show1: false,
      alert: false,
      loadingI: false,
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      this.loadingI = !this.loadingI;
      await this.LogIn(this.form)
        .then((result) => {
          console.log(result);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.alert = !this.alert;
          console.log(error);
        })
        .finally(() => (this.loadingI = !this.loadingI));
    },
  },
};
</script>

<style scoped>
</style>