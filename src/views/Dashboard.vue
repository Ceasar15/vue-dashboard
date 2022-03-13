<template>
  <div class="p-10">
    <!--Card 1-->
    <div class="max-w-sm mt-[40px] rounded overflow-hidden shadow-lg">
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
    <div>
      <!-- Card 2 -->
      <p>Orders</p>
      <p>45,320</p>
      <p>1.23%</p>
      <p>since last month</p>
    </div>
    <div>
      <!-- Card 3 -->
      <p>Earnings</p>
      <p>$7,524</p>
      <p>7.85%</p>
      <p>since last month</p>
    </div>
    <div>
      <!-- Card 4 -->
      <p>Growth</p>
      <p>+35.52</p>
      <p>3.72%</p>
      <p>since last month</p>
    </div>
  </div>

<div>
    <p>Revenue</p>
    <p>Previous Week</p>
    <p>Current Week</p>
    <p>Graph Goes Here</p>

</div>
<div>
    <p>Top Selling Products</p>
    <em>Export Icon</em>
    <table class="table">
        <thead>
            <tr>
                <th>Product name</th>
                <th>Date Time</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row">Product 1</td>
                <td>9 April, 3020</td>
                <td>$230</td>
            </tr>
            <tr>
                <td scope="row">Product 2</td>
                <td>8 May, 2930</td>
                <td>$989</td>
            </tr>   
        </tbody>
    </table>
</div>
<div>
    <p>Total Sales</p>
    <p>Pie Chart</p>
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