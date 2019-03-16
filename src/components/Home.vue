<template>
  <div>
    <button @click="Gotomenu" class="btn btn-success">去点餐</button>
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
