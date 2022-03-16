<template>
  <v-row>
    <v-col cols="6">
      <v-card>
        one
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card>
        two
      </v-card>
    </v-col>
  </v-row>
  <v-col class="orders-column" cols="12" style="border-radius: 44px;">
    <v-card
        class="pa-2 products-card"
        outlined
        tile
    >
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
      >
        <template v-slot:default>
          <thead id="table-head" class="text-center">
          <tr>
            <th class="table-headers">
              ID
            </th>
            <th class=" table-headers text-left">
              Created
            </th>
            <th class="table-headers text-left">
              Customer
            </th>
            <th class="table-headers text-left">
              Product
            </th>
            <th class="table-headers text-left">
              Start Time
            </th>
            <th class="table-headers text-left">
              End Time
            </th>
            <th class="table-headers text-left">
              Distribution
            </th>
            <th class="table-headers text-left">
              Status
            </th>
            <th class="table-headers text-left">
              Quantity
            </th>
            <th class="table-headers text-left">
              Price
            </th>
            <th class="table-headers text-left">
              Total
            </th>

          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.name"
              class="text-left pa-4"
          >
            <td class="pa-4 text-center">11</td>
            <td style="padding: 16px">{{ item.date }}</td>
            <td style="padding: 1rem">Dummy User</td>
            <td style="padding: 1rem">{{ item.name }}</td>
            <td style="padding: 1rem">{{ item.date }}</td>
            <td style="padding: 1rem">{{ item.date }}</td>
            <td style="padding: 1rem">Maldives</td>
            <v-chip
                color="blue"
                dark
                large
            >
              <td style="padding: 1rem">Pending</td>
            </v-chip>
            <td style="padding: 1rem; text-align: center">{{ item.quantity }}</td>
            <td style="padding: 1rem">78.90</td>
            <td style="padding: 1rem">236.7</td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-col>
</template>


<script>
import {desserts, headers, testData, items} from "@/utils/desserts"

export default {
  name: "AdminOrders",
  data() {
    return {
      search: '',
      desserts: desserts,
      headers: headers,
      testData: testData,
      items: items
    };
  },
};
</script>
<style scoped lang="css">
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

.table-headers {
  text-align: center;
  background-color: #9da6d1;
  width: 13%;
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

.orders-column {
  overflow-x: auto;
  /*height: 450px;*/
}

.products-card tr:nth-child(even) {
  background-color: #f2f2f2;
}

.products-card tr:hover {
  background-color: #ddd;
}
</style>