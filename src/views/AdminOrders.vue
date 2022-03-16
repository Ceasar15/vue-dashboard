<template>
  <v-row>
    <v-col cols="12" class="text-grey-darken-1" style="display: flex; justify-content:space-between;">
      <v-title style="padding: 28px; ">
        <p class="ml-7" style="font-size:1.5rem">Orders</p>
      </v-title>
      <v-text>
        <v-chip
            class="ma-4"
            color="black"
        >
          <v-btn>
          <v-icon left="true">
            mdi-printer
          </v-icon>
          <span class="text-black">
            Print
          </span>
          </v-btn>
        </v-chip>
        <v-chip
            class="ma-4"
            color="black"
        >
          Export
          <v-icon right="true">
            mdi-arrow-down-drop-circle-outline
          </v-icon>
        </v-chip>
        <v-chip
            class="ma-2"
            color="green darken-4"
        >
          <v-icon left="true">
            mdi-plus
          </v-icon>
          <span style="color:#015201">
            Create Order
          </span>
        </v-chip>
      </v-text>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="4">
      <v-card>
        <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search by any parameter..."
            filled
            hide-details
            outlined
            class="ml-2"
        ></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card>

        <v-select
            :items="status"
            prepend-icon="mdi-tag"
            menu-props="auto"
            hide-details
            label="Status"
            class="ml-2"
        ></v-select>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card>
        <v-select
            :items="status"
            prepend-icon="mdi-map-marker"
            menu-props="auto"
            hide-details
            label="Department"
            class="ml-2"
        ></v-select>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card>
        <v-select
            :items="status"
            prepend-icon="mdi-filter "
            menu-props="auto"
            hide-details
            label="Saved Filters"
            class="ml-2"
        ></v-select>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card>
        <v-select
            :items="status"
            prepend-icon="mdi-filter-variant"
            menu-props="auto"
            hide-details
            label="More Filters"
            class="ml-2"
        ></v-select>
      </v-card>
    </v-col>
  </v-row>
  <v-col class="orders-column" cols="12" style="border-radius: 44px;">
    <v-card
        class="pa-2 products-card"
        outlined
        tile
    >
      <v-col cols="12" class="text-grey-darken-1" style="display: flex; justify-content:space-between;">
        <v-text>
          <v-chip
          >
            <v-icon>
              mdi-format-list-bulleted
            </v-icon>
          </v-chip>
          Showing 11-20 out of 98 results
        </v-text>
        <v-text>
          <span style="margin-right: 8px">
            Results per page:
          </span>
          <v-chip

          >
            50
            <v-icon>
              mdi-arrow-down-thick
            </v-icon>
          </v-chip>
        </v-text>
      </v-col>
      <v-card-title>

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
              Order Status
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
                color="red"
                dark
                large
                class="ma-3"
            >
              <td style="padding: 1rem; font-weight: bold">Cancelled</td>
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
import {desserts, headers, testData, items, status} from "@/utils/desserts"

export default {
  name: "AdminOrders",
  data() {
    return {
      search: '',
      desserts: desserts,
      headers: headers,
      testData: testData,
      items: items,
      status: status,
      chip1: true,
      chip2: true,

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
  overflow-y: auto;
  /*height: 450px;*/
}

.products-card tr:nth-child(even) {
  background-color: #f2f2f2;
}

.products-card tr:hover {
  background-color: #ddd;
}
</style>