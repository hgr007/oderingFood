<template>
  <div id="app">
    <!-- //组件的复用 -->
    <div class="container">
    <appheader></appheader>
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="oderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appheader from "./views/appheader";
export default {
  name: "app",
  components: {
    appheader
  }
};
</script>


<style>
</style>
