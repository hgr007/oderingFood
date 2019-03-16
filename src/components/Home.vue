<template>
  <div>
    <div class="container">
      <div class="row">
        <div id="Home" class="col-sm-12 text-center">
          <div class="background">
            <h2>这里有你喜欢吃的东西</h2>
            <h1>欢迎来到点餐系统</h1>
            <button @click="Gotomenu" class="btn btn-success btn-block">去点餐</button>
          </div>
        </div>
      </div>
    </div>
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
<style scoped>
#Home {
  background: url("../assets/pizza.jpg");
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>

