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
        <tbody v-for="item in GetItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
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
      GetItems: []
    };
  },
  components: {
    Items: AdminItems
  },
  created() {
    fetch("https://wd5254752724ripdnh.wilddogio.com/menu.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let menuArray = [];
        for (const key in data) {
          // console.log(key)
          // console.log(data[key])
          data[key].id = key;
          menuArray.push(data[key]);
        }
        this.GetItems = menuArray;
      });
  },
  methods: {
    deleteData(item) {
      fetch(
        "https://wd5254752724ripdnh.wilddogio.com/menu/" + item.id + "/.json",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        }
      )
        .then(res => res.json())
        //  .then(data => console.log(data))
        .then(data => this.$router.push({ name: "menu" }));
    }
  },
  //   beforeRouteEnter (to, from, next) {
  //     //  console.log("你好"+this.name) 页面渲染之前拿不到name的值
  //       next( vm =>{
  //           alert("hello"+vm.name)
  //       });
  //   }

  // beforeRouteLeave(to, from, next) {
  //   // ...
  //   if (confirm("确认离开吗？") === true) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // }
};
</script>
