<template>

  <MainNavbar />
  <SideNavBar/>
  <router-view />
  <MainFooter />

</template>

<script>
import SideNavBar from './components/layout/SideNavBar'
import MainNavbar from './components/layout/MainNavbar'
import MainFooter from "@/components/layout/MainFooter";


export default {
  name: 'App',

  components: {
    SideNavBar,
    MainNavbar,
    MainFooter,
  },

  data: () => ({
    //
  }),
}
</script>
