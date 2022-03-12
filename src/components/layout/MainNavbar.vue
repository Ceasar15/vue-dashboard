<template>
    <!-- <div class="main-nav-icons" style="left: 400px; ">
      <input type="text" placeholder="Search" />
    </div> -->
    <div class="main-nav-icons" style="left: 700px;">
      <i class="bx bx-search" />
    </div>
    <div class="main-nav-icons" style="left: 800px;" >
      <i class="bx bx-bell" />
    </div>
    <div class="main-nav-icons" style="left: 900px;">
        <span>
          <i class="bx bx-cog" />
        </span>
    </div>
    <div class="main-nav-icons" style="left: 1000px;">
      <img
        v-if="profileImg"
        :src="profileImg"
        alt="profileImg"
        width="50"
        height="50"

      />
    </div>
  <div class="main-nav-dash">
    <h1>Dashboard</h1>
  </div>
  <div class="main-nav-date">
    <input type="date" value="2022-02-12" />
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