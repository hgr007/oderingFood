<template>
  <div>
    <h1>这是管理页面</h1>
  </div>
</template>
<script>
export default {
  name: "admin",
  data() {
    return {
      name: "Henrry"
    };
  },
  //   beforeRouteEnter (to, from, next) {
  //     //  console.log("你好"+this.name) 页面渲染之前拿不到name的值
  //       next( vm =>{
  //           alert("hello"+vm.name)
  //       });
  //   }

  beforeRouteLeave(to, from, next) {
    // ...
    if (confirm("确认离开吗？") === true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
