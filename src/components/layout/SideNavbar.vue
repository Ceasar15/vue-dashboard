<template>
  <aside class="SideNavbar" :class="{ collapse: sidebar.collapse }">
    <nav class="menu">
      <menu-list :items="sidebar.menus" active-class/>
    </nav>
    <footer class="footer">
      <a class="toggle icon-before icon-circle-left" title="Toggle navigation menu" @click="toggleCollapse"></a>
      <router-link class="copyright" :to="{ name: 'about' }" :title="'About ' + sidebar.copyright">&copy; {{ sidebar.copyright }}</router-link>
    </footer>
  </aside>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SideNavbar',
  components: "",
  computed: mapGetters({
    sidebar: 'SideNavbar'
  }),
  methods: mapActions({
    toggleCollapse: 'toggleSidebarCollapse'
  })
}


</script>

<style >

</style>
