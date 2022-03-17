<template>
  <v-app>
    <v-app-bar style="height:80px; border:2px solid">
      <MainNavbar />
    </v-app-bar>
    <SideNavBar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <MainFooter />
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
    //
  }),
}
</script>
