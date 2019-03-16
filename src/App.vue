<template>
  <div id="app">
    <appHeader></appHeader>

    <!-- //组件的复用 -->
    <div class="container">
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
import Header from "./views/Header";
export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>


<style>
</style>
