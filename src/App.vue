<template>
  <MainNavbar></MainNavbar>
  <SideNavbar></SideNavbar>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import MainNavbar from "./components/layout/MainNavbar.vue";
import SideNavbar from "./components/layout/SideNavbar.vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    SideNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>