<template>
  <aside
    :class="[
      'SideNavbar',
      'col-12',
      'col-md-3',
      'col-lg-2',
      'px-0',
      sidebarVisible ? 'open' : '',
    ]"
  >
    <div class="main-navbar">
      <nav
        class="
          navbar
          align-items-stretch
          navbar-light
          bg-white
          flex-md-nowrap
          border-bottom
          p-0
        "
      >
        <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px">
          <div class="d-table m-auto">
            <img
              id="main-logo"
              class="d-inline-block align-top mr-1"
              style="max-width: 25px"
              src="@/assets/logo.png"
              alt="Vue Dashboard"
            />
            <span v-if="!hideLogoText" class="d-none d-md-inline ml-1"
              >Vue Here Dashboard</span
            >
          </div>
        </a>
        <a
          class="toggle-sidebar d-sm-inline d-md-none d-lg-none"
          @click="handleToggleSidebar()"
        >
          <i class="material-icons">&#xE5C4;</i>
        </a>
      </nav>
      <nav>
        <h1>Orders</h1>
        <h3>Analytics</h3>
        <h4>Categories</h4>
      </nav>
    </div>
  </aside>
  <h1>Dashboard</h1>
  <h1>Orders</h1>
  <h3>Analytics</h3>
  <h4>Categories</h4>
  <h5>Collections</h5>
  <h6>Products</h6>
  <h7>Employers</h7>
</template>

<script>
export default {
  name: "SideNavbar",
  component: "",
  props: {
    /**
     * Whether to hide the logo text, or not.
     */
    hideLogoText: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sidebarVisible: false,
    };
  },
};
</script>

<style lang="scss">
.main-sidebar {
  .item-icon-wrapper {
    display: inline-block;
  }
  .dropdown-menu {
    display: block;
  }
}
</style>
