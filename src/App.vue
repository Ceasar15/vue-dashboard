<template>
  <v-app style="">
    <v-navigation-drawer
      height="200"
      width="0"
      app
      class="mx-auto"
      v-if="!['SignupPage', 'SigninPage', 'help'].includes($route.name)"
    >
      <SideNavBar />
    </v-navigation-drawer>
    <v-navigation-drawer
      height="200"
      width="0px"
      app
      v-else
      class="mx-auto nav-side"
      :style="{
        'background-position': '0% 60%',
        'background-image':
          'url(https://media.istockphoto.com/vectors/black-friday-sale-shopping-girls-jumping-and-rejoicing-vector-id1279659353?k=20&m=1279659353&s=612x612&w=0&h=cTFIZ5-Cg0t3m55zk41Lz94hH3BcqiZTG31VBXqo840=',
      }"
    >
    </v-navigation-drawer>
    <v-app-bar
      v-if="!['SignupPage', 'SigninPage', 'help'].includes($route.name)"
      class="ml-0"
      style="height: 80px; display: flex; justify-content: space-between"
      app
    >
      <MainNavbar />
    </v-app-bar>
    <v-main style="height: auto">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer
      dark
      padless
      v-if="!['SignupPage', 'SigninPage', 'help'].includes($route.name)"
      app
      style="background-color: #ccc"
    >
      <MainFooter />
    </v-footer>
  </v-app>
</template>

<script>
import SideNavBar from "./components/layout/SideNavBar";
import MainNavbar from "./components/layout/MainNavbar";
import MainFooter from "@/components/layout/MainFooter";

export default {
  name: "App",
  components: {
    MainNavbar,
    SideNavBar,
    MainFooter,
  },

  data: () => ({
    isOpened: false,
    dialog: true,
  }),
  methods: {
    delete_dialog_message() {
      this.dialog = false;
    },
  },
};
</script>
<style>
.nav-side {
  width: 250px;
}
</style>