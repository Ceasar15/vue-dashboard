<template>
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

    >
      <template v-slot:default>
        <thead id="table-head">
        <tr>
          <th class="table-headers text-left">
            Name
          </th>
          <th class=" table-headers text-left">
            Calories
          </th>
          <th class="table-headers text-left">
            Date
          </th>
          <th class="table-headers text-left">
            Price
          </th>
          <th class="table-headers text-left">
            Quantity
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in desserts"
            :key="item.name"
        >
          <td style="padding: 1rem" class="text-pray-300">{{ item.name }}</td>
          <td style="padding: 1rem">{{ item.calories }}</td>
          <td style="padding: 1rem">{{ item.date }}</td>
          <td style="padding: 1rem">{{ item.price }}</td>
          <td style="padding: 1rem">{{ item.quantity }}</td>
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
  height: 450px;
}

.products-card tr:nth-child(even) {
  background-color: #f2f2f2;
}

.products-card tr:hover {
  background-color: #ddd;
}
</style>