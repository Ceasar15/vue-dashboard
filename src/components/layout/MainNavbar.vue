<template>
    <div :class="['main-navbar', 'bg-white', stickyTop ? 'sticky-top' : '']">
    <d-navbar type="light" class="align-items-stretch flex-md-nowrap p-0">
      <div class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      </div>
      <d-navbar-nav class="border-left flex-row align-right">
        <li class="nav-item border-right dropdown notifications">
          <a class="nav-link nav-link-icon text-center" href="/logout">
            <div class="nav-link-icon__wrapper">
              <i class="material-icons">logout</i>
            </div>
          </a>
        </li>
      </d-navbar-nav>
    </d-navbar>
    </div>
    <h1>Here i am</h1>
</template>

<script>
export default {
    props: {
        stickyTop: Boolean,
    },
    setup(){
        return this.props.stickyTop = true;
    }
}
</script>

<style >

</style>