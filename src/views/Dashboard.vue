<template>
  <v-alert
    v-model="welcome"
    type="success"
    light
    dismissible="true"
    class="ml-90 text-center welcomeAlert"
  >
    welcome {{ name }}, enjoy your stay here.
  </v-alert>
  <v-row>
    <v-col cols="12" md="12" class="text-grey-darken-1">
      <v-title style="padding: 28px">
        <p class="ml-5" style="font-size: 1.5rem">Overview</p>
      </v-title>
    </v-col>
    <v-col cols="3" md="3">
      <v-card class="pa-2" outlined tile>
        <v-card-title>Earnings</v-card-title>
        <DoughnutChart :chartData="testData" />

        <v-card-text>
          <div class="my-4 text-subtitle-1" style="font-weight: bold">
            <v-icon>mdi-currency-usd</v-icon>
            9,494
          </div>
          <div
            class="my-4 text-subtitle-1"
            style="color: green; font-weight: bold"
          >
            <v-icon>mdi-arrow-up</v-icon>
            <span>525 %</span>
          </div>
          <div>since last month</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="3">
      <v-card class="pa-2" outlined tile>
        <v-card-title>Orders</v-card-title>

        <BarChart :chartData="testData" />

        <v-card-text>
          <div class="my-4 text-subtitle-1" style="font-weight: bold">
            <v-icon>mdi-cart-outline</v-icon>
            4,564
          </div>
          <div
            class="my-4 text-subtitle-1"
            style="color: green; font-weight: bold"
          >
            <v-icon>mdi-arrow-up</v-icon>
            <span>91 %</span>
          </div>
          <div>since last month</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" md="6">
      <v-card class="pa-2" outlined tile>
        <v-card-title>Revenue</v-card-title>
        <LineChart :chartData="testData" />
        <v-card-text>
          <div class="my-4 grey--text" style="font-weight: bold">
            <v-icon>mdi-search-web</v-icon>
            456,998
            <div
              class="text-subtitle-1"
              style="color: orange; font-weight: bold"
            >
              <v-icon>mdi-cash-multiple</v-icon>
              <span> 26 %</span>
            </div>
          </div>

          <div>
            Revenue: increasing the number of customers, increasing average
            transaction size, increasing the frequency of transactions.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="3">
      <v-card class="pa-2" outlined tile>
        <v-card-title>Customers</v-card-title>
        <v-card-text>
          <div class="my-4 grey--text" style="font-weight: bold">
            <v-icon>mdi-human-male</v-icon>
            12,837
          </div>
          <div
            class="my-4 text-subtitle-1"
            style="color: red; font-weight: bold"
          >
            <v-icon>mdi-arrow-down</v-icon>
            <span>91 %</span>
          </div>

          <div>since last month</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="3">
      <v-card class="pa-2" outlined tile>
        <v-card-title>Views</v-card-title>
        <v-card-text>
          <div class="my-4 grey--text" style="font-weight: bold">
            <v-icon>mdi-camera</v-icon>
            829,424
          </div>
          <div
            class="my-4 text-subtitle-1"
            style="color: orange; font-weight: bold"
          >
            <v-icon>mdi-arrow-up</v-icon>
            <span>7 %</span>
          </div>

          <div>since last month</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="3">
      <v-card class="pa-2" outlined tile>
        <v-card-title>Growth</v-card-title>
        <v-card-text>
          <div class="my-4 grey--text" style="font-weight: bold">
            <v-icon>mdi-chart-areaspline</v-icon>
            Decrease
          </div>
          <div
            class="my-4 text-subtitle-1"
            style="color: red; font-weight: bold"
          >
            <v-icon>mdi-arrow-down</v-icon>
            <span>64 %</span>
          </div>

          <div>since last month</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" md="3">
      <v-card class="pa-2" outlined tile>
        <v-card-title>Visits</v-card-title>
        <v-card-text>
          <div class="my-4 grey--text" style="font-weight: bold">
            <v-icon>mdi-search-web</v-icon>
            456,998
          </div>
          <div
            class="my-4 text-subtitle-1"
            style="color: green; font-weight: bold"
          >
            <v-icon>mdi-arrow-up</v-icon>
            <span>26 %</span>
          </div>

          <div>since last month</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <!--  Table and Chart-->
  <v-row>
    <v-col class="products-column" cols="6" style="border-radius: 24px">
      <v-card class="pa-2 products-card" outlined tile>
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead id="table-head">
              <tr>
                <th class="table-headers text-center">ID</th>
                <th class="table-headers text-left">Name</th>
                <th class="table-headers text-left">Calories</th>
                <th class="table-headers text-left">Date</th>
                <th class="table-headers text-left">Price</th>
                <th class="table-headers text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in desserts" :key="item.name">
                <td class="text-center">
                  {{ index + 1 }}
                </td>
                <td style="padding: 1rem" class="text-pray-300">
                  {{ item.name }}
                </td>
                <td style="padding: 1rem">{{ item.calories }}</td>
                <td style="padding: 1rem">{{ item.date }}</td>
                <td style="padding: 1rem">{{ item.price }}</td>
                <td style="padding: 1rem">{{ item.quantity }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-col>
    <!--    Side Graph -->
    <v-col class="chat-side-graph" cols="6">
      <v-card class="pa-2" outlined tile style="">
        <v-list three-line>
          <template v-for="item in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
              style="color: black; font-weight: bold"
            ></v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="item"
              :inset="item.inset"
            ></v-divider>
            <v-list-item
              v-else
              :key="item.title"
              class="list-item"
              style="display: flex; align-items: center"
            >
              <v-list-item-avatar width="200">
                <v-img :src="item.avatar" width="50"> </v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  v-html="item.title"
                  style="margin: 7px; margin-bottom: 0px"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                  style="margin: 8px; margin-top: 0px"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item
                class="text-grey-darken-1 mr-text"
                v-html="item.time"
              >
              </v-list-item>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { DoughnutChart, LineChart, BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { desserts, headers, testData, items } from "@/utils/desserts";
Chart.register(...registerables);
// import the library
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

export default {
  name: "AdminDashboard",
  components: { DoughnutChart, LineChart, BarChart },

  data() {
    const name = this.$store.getters.StateUser || "Admin";
    return {
      isEditing: false,
      model: null,
      welcome: false,
      selection: 1,
      items,
      desserts,
      headers,
      testData,
      welcomeBuddy: "",
      name: name.toUpperCase(),
    };
  },
  methods: {},
  computed: {},
  setup() {
    const toast = () => {
      createToast("Welcome Admin, Enjoy your stay!", {
        type: "success",
        transition: "bounce",
        position: "top-center",
      });
    };
    return { toast };
  },
  mounted() {
    if (localStorage.alertTriggered == 'false') {
      localStorage.setItem("alertTriggered", "true");
      this.toast();
    }
  },
  watch: {
    welcome() {
      console.log("watcher");
    },
  },
};
</script>

<style scoped lang="css">
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

.table-headers {
  text-align: center;
  background-color: #0079af;
  width: 20%;
  padding: 1rem;
  font-weight: bold;
}

#table-head {
  position: relative;
  border-collapse: collapse;
}

th {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
}

.products-column {
  overflow-x: auto;
  height: 450px;
}

.products-card tr:nth-child(even) {
  background-color: #f2f2f2;
}

.products-card tr:hover {
  background-color: #ddd;
}

.chat-side-graph {
  overflow-x: auto;
  height: 450px;
}

.list-item:hover {
  background-color: #ddd;
}

.welcomeAlert {
  width: 450px;
  margin-left: 450px;
  position: absolute;
  right: -40px;
}
</style>