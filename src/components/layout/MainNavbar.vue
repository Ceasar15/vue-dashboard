<template>
<nav class="main-navbar">
    <div class="main-dash">
      <h1>Dashboard</h1>
      <h1>Date</h1>
      <input type="date" placeholder="1-2-2012" />
    </div>
    <div>
      <input type="text" placeholder="Search" />
      <div>
        <i class="bx bx-grid-alt" :class="menuIcon" />
      </div>
      <div>
        <i class="bx bx-search" :class="menuIcon" />
      </div>
      <div>
        <i class="bx bx-bell" :class="menuIcon" />
      </div>
      <div>
        <i class="bx bx-cog" :class="menuIcon" />
      </div>
      <span>Settings Icon</span>
      <h1>Logg</h1>
    </div>
    <div>
      <img v-if="profileImg" :src="profileImg" alt="profileImg" />
      <div>
        {{ profileName }}
      </div>
    </div>
</nav>
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
    profileName: {
      type: String,
      default: "Admin Name",
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

.main-navbar{
    background-color: rgba(255, 0, 0, 0.9);
}

.main-dash{
    background-color: rgba(1, 228, 141, 0.9);
}

</style>