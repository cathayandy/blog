<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store.js';
export default {
  data () {
    return {};
  },
  store,
};
</script>

<style>
</style>
