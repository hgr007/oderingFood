<template>
  <div>
    <h1>HOME</h1>
    <button @click="Gotomenu" class="btn btn-success btn-block">去点餐</button>
  </div>
</template>
<script>
export default {
  methods: {
    Gotomenu() {
      this.$router.push("./menu");
    }
  }
};
</script>
