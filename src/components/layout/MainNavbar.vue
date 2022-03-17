<template>

  <v-card>
    <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="grey lighten-4 mx-2" rounded="true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="grey lighten-4 mx-2" rounded="true">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon class="grey lighten-4 mx-2">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn class="grey lighten-4 mx-2">
        <v-img src="https://heasarc.gsfc.nasa.gov/xanadu/ximage/images.gif"></v-img>
      </v-btn>
      <v-btn fab src="https://heasarc.gsfc.nasa.gov/"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>


    </v-app-bar>
  </v-card>

</template>

<script>
export default {
  name: "MainNavbar",
  component: "",
  props: {
    profileImg: {
      type: String,
      default: require("../../assets/admin.png"),
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Google Font Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  transition: all 0.5s ease;
}

.main-navbar {
  position: fixed;
  top: 0px;
  background-color: rgba(255, 0, 0, 0.9);
  overflow: hidden;
}

.main-nav-icons {
  position: fixed;
  right: 50px;
  float: right;
  top: 40px;
  margin-left: 90px;
  color: #aaa3a3fa;
  /* background-color: rgba(230, 247, 0, 0.9); */
}

.main-nav-icons .bx {
  font-size: 18px;
}

.main-nav-dash {
  position: relative;
  float: left;
  left: 55px;
  right: 0;
  width: auto;
  height: auto;
  flex-direction: column;
  /* background-color: rgba(1, 228, 141, 0.9); */
}

.main-nav-date {
  position: relative;
  float: left;
  top: 15px;
  left: 160px;
  right: 0;
  width: auto;
  height: auto;
  flex-direction: column;
  /* background-color: rgba(54, 0, 201, 0.9); */
}
</style>