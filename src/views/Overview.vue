<template>
    <div>
    <span>Dashboard</span>
    <h3>Overview</h3>
    <h4> {{ c_here }}</h4>
    </div>
    <div>
        <h3>Users List</h3>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'OverView',
    setup(){
      const c_here = ref("Here")

      return {
          c_here
      }
    },
    data(){
        return { 
            o_here: 'here'
        }
    },
}


</script>

<style lang="scss" scoped>

</style>