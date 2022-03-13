<template>
  <div class="p-10">
    <!--Card 1-->
    <div class="max-w-sm mt-[40px] rounded overflow-hidden shadow-lg">
      <div class="mr-[200px] text-gray-900 mb-2">Customers</div>

      <div class="mr-[200px] text-xl text mb-2 text-black-900 font-bold">
        45,230
      </div>
      <div
        class="
          inline-block
          px-3
          py-1
          text-sm
          font-semibold
          text-green-500
          mb-2
          mr-[250px]
        "
      >
      <i class="bx:up-arrow-alt"></i>
        <span>525%</span>
      </div>
      <div class="mr-[200px] px-4 pt-4 pb-2">
        <span
          class="rounded-full text-sm font-light-500 text-gray-700 mr-2 mb-2"
          >since last week</span
        >
      </div>
    </div>
  </div>

  <div>
    <span>Dashboard</span>
    <h3>Overview</h3>
  </div>
  <div>
    <h3>Users List</h3>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>

<style scoped>
</style>