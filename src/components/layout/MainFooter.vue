<template>
  <aside class="SideNavbar">
      <h1>Dash</h1>
      <h1>Board</h1>
  </aside>
  <div>
    <VueSidebarMenuAkahon />
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

export default {
  name: 'SideNavbar',
  components: {VueSidebarMenuAkahon},
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
