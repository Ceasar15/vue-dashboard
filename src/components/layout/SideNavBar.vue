<template>
  <v-card :class="isOpened ? 'open' : ''">
    <div class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
      <div class="logo-details" style="margin: 6px 14px 0 14px">
        <img
          v-if="menuLogo"
          :src="menuLogo"
          alt="menu-logo"
          class="menu-logo icon"
        />
        <em v-else class="bx icon" :class="menuIcon" />
        <div class="logo_name">
          {{ menuTitle }}
        </div>
        <em
          class="bx"
          :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
          id="btn"
          @click="isOpened = !isOpened"
        />
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
          max-height: calc(100% - 60px);
        "
      >
        <div id="my-scroll" style="margin: 6px 14px 0 14px">
          <ul class="nav-list" style="overflow: visible">
            <div
              style="font-size: 19px; margin-left: 20px; text-align: left"
              class="text-grey-darken-1"
            >
              Main
            </div>
            <span v-for="(menuItem, index) in menuItems" :key="index">
              <li>
                <router-link :to="menuItem.link">
                  <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                  <span class="links_name">{{ menuItem.name }}</span>
                </router-link>
                <span class="tooltip">{{
                  menuItem.tooltip || menuItem.name
                }}</span>
              </li>
            </span>
            <div
              style="font-size: 19px; margin-left: 20px; text-align: left"
              class="text-grey-darken-1"
            >
              Side Channels
            </div>
            <span v-for="(channelItem, index) in channelItems" :key="index">
              <li>
                <router-link :to="channelItem.link">
                  <i
                    class="bx"
                    :class="channelItem.icon || 'bx-square-rounded'"
                  />
                  <span class="links_name">{{ channelItem.name }}</span>
                </router-link>
                <span class="tooltip">{{
                  channelItem.tooltip || channelItem.name
                }}</span>
              </li>
            </span>
            <li v-if="isLoggedIn">
              <a @click="logout">
                <i class="bx bx-log-out" />
                <span class="links_name">LogOut</span>
              </a>
              <span class="tooltip">LogOut</span>
            </li>
            <li v-else>
              <a href="/signIn">
                <i class="bx bx-log-in" />
                <span class="links_name">Sign In</span>
              </a>
              <span class="tooltip">Sign In</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SideNavbar",
  props: {
    //! Menu settings
    isMenuOpen: {
      type: Boolean,
      default: true,
    },
    menuTitle: {
      type: String,
      default: "Menu",
    },
    menuLogo: {
      type: String,
      default: "",
    },
    menuIcon: {
      type: String,
      default: "bx:food-menu",
    },
    isPaddingLeft: {
      type: Boolean,
      default: true,
    },
    menuOpenedPaddingLeftBody: {
      type: String,
      default: "250px",
    },
    menuClosedPaddingLeftBody: {
      type: String,
      default: "78px",
    },
    //! Menu items
    channelItems: {
      type: Array,
      default: () => [
        {
          link: "/signIn",
          name: "Profile",
          tooltip: "Profile",
          icon: "bx-user",
        },
        {
          link: "#",
          name: "Setting",
          tooltip: "Setting",
          icon: "bx-cog",
        },
      ],
    },
    menuItems: {
      type: Array,
      default: () => [
        {
          link: "/dashboard",
          name: "Dashboard",
          tooltip: "Admindashboard",
          icon: "bx-grid-alt",
        },
        {
          link: "/admin-orders",
          name: "Orders",
          tooltip: "AdminOrders",
          icon: "bx-grid",
        },
        {
          link: "/admin-products",
          name: "Products",
          tooltip: "AdminProducts",
          icon: "bx-store",
        },
        {
          link: "/doesnotexist",
          name: "Analytics",
          tooltip: "AdminAnalytics",
          icon: "bx-chat",
        },
        {
          link: "#",
          name: "Categories",
          tooltip: "Analytics",
          icon: "bx-pie-chart-alt-2",
        },
        {
          link: "#",
          name: "Collections",
          tooltip: "Files",
          icon: "bx-folder",
        },
      ],
    },
    //! Profile detailes
    profileImg: {
      type: String,
      // default: require('./assets/logo.jpg'),
    },
    profileName: {
      type: String,
      default: "Hey Buddy",
    },
    profileRole: {
      type: String,
      default: "Full Stack vue developer",
    },
    isExitButton: {
      type: Boolean,
      default: true,
    },
    //! Styles
    bgColor: {
      type: String,
      default: "#272f44",
    },
    secondaryColor: {
      type: String,
      default: "#1d1b31",
    },
    homeSectionColor: {
      type: String,
      default: "#e4e9f7",
    },
    logoTitleColor: {
      type: String,
      default: "#fff",
    },
    iconsColor: {
      type: String,
      default: "#fff",
    },
    itemsTooltipColor: {
      type: String,
      default: "#e4e9f7",
    },
    menuItemsHoverColor: {
      type: String,
      default: "#fff",
    },
    menuItemsTextColor: {
      type: String,
      default: "#fff",
    },
    menuFooterTextColor: {
      type: String,
      default: "#fff",
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    // logout() {
    //   console.log("logout here");
    //   const token = VueCookies.get("token");
    //   const refresh_token = VueCookies.get("refresh_token");
    //   console.log(33, token);
    //   console.log(66, refresh_token);
    //   axios
    //     .post(
    //       "https://ecommerce-platform-j.herokuapp.com/logout/",
    //       { refresh_token: refresh_token },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       //Perform Success Action
    //       console.log(22, res);
    //       this.$router.push("/signIn");
    //     })
    //     .catch((error) => {
    //       // error.response.status Check status code
    //       console.log(44, error);
    //       this.alert = !this.alert;
    //     })
    //     .finally(() => {
    //       //Perform action in always
    //       console.log("finally");
    //     });
    // },
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/signIn");
    },
  },
  mounted() {
    this.isOpened = this.isMenuOpen;
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
    cssVars() {
      return {
        // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
        "--bg-color": this.bgColor,
        "--secondary-color": this.secondaryColor,
        "--home-section-color": this.homeSectionColor,
        "--logo-title-color": this.logoTitleColor,
        "--icons-color": this.iconsColor,
        "--items-tooltip-color": this.itemsTooltipColor,
          "--menu-items-hover-color": this.menuItemsHoverColor,
        "--menu-items-text-color": this.menuItemsTextColor,
        "--menu-footer-text-color": this.menuFooterTextColor,
      };
    },
  },
  watch: {
    isOpened() {
      window.document.body.style.paddingLeft =
        this.isOpened && this.isPaddingLeft
          ? this.menuOpenedPaddingLeftBody
          : this.menuClosedPaddingLeftBody;
    },
  },
};
</script>

<style>
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

.menu-logo {
  width: 30px;
  margin: 0 10px 0 10px;
}

.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  min-height: min-content;
  /* overflow-y: auto; */
  width: 78px;
  background: var(--bg-color);
  /* padding: 6px 14px 0 14px; */
  z-index: 99;
  transition: all 0.5s ease;
}

.sidebar.open {
  width: 250px;
}

.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}

.sidebar .logo-details .icon {
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar .logo-details .logo_name {
  color: var(--logo-title-color);
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}

.sidebar .logo-details #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
  text-align: right;
}

.sidebar i {
  color: var(--icons-color);
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}

.sidebar .nav-list {
  margin-top: 20px;
}

.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}

.sidebar li .tooltip {
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: var(--items-tooltip-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}

.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}

.sidebar.open li .tooltip {
  display: none;
}

.sidebar input {
  font-size: 15px;
  color: var(--serach-input-text-color);
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: var(--secondary-color);
}

.sidebar.open input {
  padding: 0 20px 0 50px;
  width: 100%;
}
.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: var(--bg-color);
}

.sidebar li a:hover {
  background: var(--menu-items-hover-color);
}

.sidebar li a .links_name {
  color: var(--menu-items-text-color);
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}

.sidebar.open li a .links_name {
  opacity: 1;
  pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
  color: var(--bg-color);
}

.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}

.sidebar div.profile {
  position: relative;
  height: 60px;
  width: 78px;
  /* left: 0;
    bottom: 0; */
  padding: 10px 14px;
  background: var(--secondary-color);
  transition: all 0.5s ease;
  overflow: hidden;
}

.sidebar.open div.profile {
  width: 250px;
}

.sidebar div .profile-details {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.sidebar div img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}

.sidebar div.profile .name,
.sidebar div.profile .job {
  font-size: 15px;
  font-weight: 400;
  color: var(--menu-footer-text-color);
  white-space: nowrap;
}

.sidebar div.profile .job {
  font-size: 12px;
}

.sidebar .profile #log_out {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: var(--secondary-color);
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}

.sidebar.open .profile #log_out {
  width: 50px;
  background: var(--secondary-color);
  opacity: 0;
}

.sidebar.open .profile:hover #log_out {
  opacity: 1;
}

.sidebar.open .profile #log_out:hover {
  opacity: 1;
  color: red;
}

.sidebar .profile #log_out:hover {
  color: red;
}

.home-section {
  position: relative;
  background: var(--home-section-color);
  min-height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
}

.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}

.home-section .text {
  display: inline-block;
  color: var(--bg-color);
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
}

.my-scroll-active {
  overflow-y: auto;
}

#my-scroll {
  overflow-y: auto;
  height: calc(100% - 60px);
}

#my-scroll::-webkit-scrollbar {
  display: none;

}
@media (max-width: 420px) {
  .sidebar li .tooltip {
    display: none;
  }
}
</style>