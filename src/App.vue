<template>
  <v-app>
    <v-app-bar absolute
               elevation="10" app
               elevate-on-scroll
               scroll-target="#scrolling-techniques-7"
    >
      <MainNavbar></MainNavbar>
    </v-app-bar>

    <v-main>
      <SideNavBar></SideNavBar>
      <v-container fluid>
      <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <h1>Footer</h1>
    </v-footer>
  </v-app>
</template>

<script>
import SideNavBar from './components/layout/SideNavBar'
import MainNavbar from './components/layout/MainNavbar'

export default {
  name: 'App',

  components: {
    SideNavBar,
    MainNavbar

  },

  data: () => ({
    //
  }),
}
</script>
