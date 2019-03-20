<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- AdminItems -->
      <Items></Items>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 菜单展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table default-table">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>香蕉</td>
            <td>
              <button class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import AdminItems from "./AdminItems";
export default {
  name: "admin",
  data() {
    return {
      name: "Henrry"
    };
  },
  components:{
    Items:AdminItems
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
