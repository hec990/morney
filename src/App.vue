<template>
  <div id="app">
    <router-view/>
    <hr>
    <Nav />
  </div>
</template>
<script lang="ts">
import Nav from "@/components/Nav.vue";
export default {
  components:{
    Nav,
  }
};
</script>


<style lang="scss">
*{margin: 0;padding: 0;box-sizing: border-box;}
a{text-decoration: none}


</style>
