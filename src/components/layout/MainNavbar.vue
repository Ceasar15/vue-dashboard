<template>
  <div style="width: 100%; display: flex; background-color: white">
    <div style="display: flex; align-items: center">
      <strong style="margin-left: 32px;" class="subheading">Dashboard</strong>
    </div>
    <v-col style="margin-left: 65.25rem">
      <div style="display: flex; justify-content:center; align-items:center">
      <v-btn icon class="grey mx-4 lighten-4" rounded="true">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon class="grey mx-4 lighten-4">
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn class="grey mx-4 lighten-4">
        <v-img
          src="https://heasarc.gsfc.nasa.gov/xanadu/ximage/images.gif"
        ></v-img>
      </v-btn>
      <v-btn class="grey mx-4 lighten-4" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </div>
    </v-col>
  </div>
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
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
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
  /* float: right; */
  top: 40px;
  margin-left: 90px;
  color: #aaa3a3fa;
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
}
</style>