<template>
  <div
    class="
      p-10
      grid grid-cols-1
      sm:grid-cols-1
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      gap-5
    "
  >
    <!--Card 1-->
    <div class="max-w-[25%] mt-[40px] rounded overflow-hidden shadow-lg">
      <div class="mr-[200px] text-gray-900 mb-2">Customers</div>

      <div class="mr-[220px] text-xl text mb-2 text-black-900 font-bold">
        45,230
      </div>
      &nbsp;
      <div
        class="
          inline-block
          text-sm
          font-semibold
          text-green-500
          mb-2
          mr-[250px]
        "
      >
        <em class="font-bold bx bx-up-arrow-alt"></em>
        <span>525%</span>
      </div>
      <div class="mr-[190px] text-sm font-light-500 text-gray-700 mb-2">
        Since last week
      </div>
    </div>
    <div class="max-w-[25%] mt-[40px] rounded overflow-hidden shadow-lg">
      <div class="mr-[200px] text-gray-900 mb-2">Customers</div>

      <div class="mr-[220px] text-xl text mb-2 text-black-900 font-bold">
        45,230
      </div>
      &nbsp;
      <div
        class="
          inline-block
          text-sm
          font-semibold
          text-green-500
          mb-2
          mr-[250px]
        "
      >
        <em class="font-bold bx bx-up-arrow-alt"></em>
        <span>525%</span>
      </div>
      <div class="mr-[190px] text-sm font-light-500 text-gray-700 mb-2">
        Since last week
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
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
</style>