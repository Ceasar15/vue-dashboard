<template>
  <v-app style="">
    <v-navigation-drawer height="200"
                         width="0"
                         app
                         class="mx-auto nav-side" v-if="!['SignupPage', 'SigninPage', 'help'].includes($route.name)"
    >
      <SideNavBar />
    </v-navigation-drawer>
    <v-navigation-drawer height="200"
                         width="0px"
                         app
    >
      <v-text>
        sdfsdsdfsdfsdfsdff
      </v-text>
    </v-navigation-drawer>
    <v-app-bar v-if="!['SignupPage', 'SigninPage', 'help'].includes($route.name)" class="ml-0"
               style="height:80px;"
               app>
      <MainNavbar/>
    </v-app-bar>
    <!--    <SideNavBar v-if="!['SignupPage', 'SigninPage', 'help'].includes($route.name)"/>-->
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer v-if="!['SignupPage', 'register', 'help'].includes($route.name)" app>
      <MainFooter/>
    </v-footer>
  </v-app>
</template>

<script>
import SideNavBar from './components/layout/SideNavBar'
import MainNavbar from './components/layout/MainNavbar'
import MainFooter from "@/components/layout/MainFooter";


export default {
  name: 'App',

  components: {
    MainNavbar,
    SideNavBar,
    MainFooter,
  },

  data: () => ({
    isOpened: false,
    dialog: true
  }),
  methods: {
    delete_dialog_message() {
      this.dialog = false
    }
  }


}
</script>
<style>

.nav-side {
  background-color: red;
  width: 250px;
}
</style>