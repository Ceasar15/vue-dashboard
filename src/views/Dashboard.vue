<template>
  <v-row>

    <v-col
        cols="3"
        md="3"
    >
      <v-card
          class="pa-2"
          outlined
          tile
      >
        <v-card-title>Earnings</v-card-title>
        <DoughnutChart :chartData="testData" />

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >

            <div class="grey--text ms-4">
              4,532
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>      </v-card>
    </v-col>
    <v-col
        cols="3"
        md="3"
    >
      <v-card
          class="pa-2"
          outlined
          tile
      >
        <v-card-title>Orders</v-card-title>

        <BarChart :chartData="testData" />

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >

            <div class="grey--text ms-4">
              4,532
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>      </v-card>
    </v-col>
    <v-col
        cols="6"
        md="6"
    >
      <v-card
          class="pa-2"
          outlined
          tile
      >
        <v-card-title>Revenue</v-card-title>
        <LineChart :chartData="testData" />
        <div class="grey--text ms-4">
          4,532
        </div>
<!--        <div>Small, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>-->
<!--        <div>Small, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>-->
<!--        <div>Small, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>-->


      </v-card>
    </v-col>
    <v-col
        cols="3"
        md="3"
    >
      <v-card
          class="pa-2"
          outlined
          tile
      >
        <v-card-title>Customers</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >

            <div class="grey--text ms-4">
              4,532
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>      </v-card>
    </v-col>
    <v-col
        cols="3"
        md="3"
    >
      <v-card
          class="pa-2"
          outlined
          tile
      >
        <v-card-title>Views</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >

            <div class="grey--text ms-4">
              4,532
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>      </v-card>
    </v-col>
    <v-col
        cols="3"
        md="3"
    >
      <v-card
          class="pa-2"
          outlined
          tile
      >
        <v-card-title>Growth</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >

            <div class="grey--text ms-4">
              4,532
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>      </v-card>
    </v-col>
    <v-col
        cols="3"
        md="3"
    >
      <v-card
          class="pa-2"
          outlined
          tile
      >
        <v-card-title>Visits</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >
            <div class="grey--text ms-4">
              4,532
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>      </v-card>
    </v-col>

  </v-row>
  <v-row>
  <v-col cols="9">
    <v-card
        class="pa-2"
        outlined
        tile
    >
      <v-simple-table
          fixed-header
          height="300px"
      >
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>


    </v-card>
  </v-col>
  <v-col cols="3">
    <v-card
        class="pa-2"
        outlined
        tile
    >
      .col-6<br>Subsequent columns continue along the new line.
    </v-card>
  </v-col>
  </v-row>

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
// import { defineComponent } from 'vue';
import { DoughnutChart, LineChart, BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const testData = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5],
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },
  ]
}

export default {
  name: "AdminDashboard",
  components: { DoughnutChart,LineChart,BarChart },

  data: () => ({
    testData: testData,
    loading: false,
    selection: 1,
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Eclair',
        calories: 262,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Cupcake',
        calories: 305,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Gingerbread',
        calories: 356,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Jelly bean',
        calories: 375,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Lollipop',
        calories: 392,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Honeycomb',
        calories: 408,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'Donut',
        calories: 452,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
      {
        name: 'KitKat',
        calories: 518,
        date: "23-4-12",
        price: 45,
        quantity:3
      },
    ],
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'date' },
      { text: 'Carbs (g)', value: 'price' },
      { text: 'Protein (g)', value: 'price' },
      { text: 'Iron (%)', value: 'quantity' },
    ],
  }),
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
};

</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
</style>