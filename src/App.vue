<template>
  <MainNavbar></MainNavbar>
  <SideNavbar></SideNavbar>
  <keep-alive>
    <router-view></router-view> 
  </keep-alive>
</template>

<script>
import MainNavbar from "./layouts/MainNavbar.vue";
import SideNavbar from "./layouts/SideNavbar.vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    SideNavbar,
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>