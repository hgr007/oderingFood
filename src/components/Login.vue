<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img class="mx-auto d-block" src="../assets/icon.png" alt="#">
            <form @submit="Onsubmit">
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" v-model="password">
              </div>
              <button class="btn btn-block btn-success">登陆</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    Onsubmit() {
      axios
        .get("user.json") //拿到数据
        .then(res => {
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            users.push(user);
          }
          let reslut = users.filter(user => {
            return user.email == this.email && user.password == this.password;
          });
          // console.log(reslut)
          if (reslut != null && reslut.length > 0) {
            this.$store.dispatch("setUser", reslut[0].email);
            //判断返回回来的长度 是否大于零
            console.log(reslut[0].email)
            this.$router.push({ name: "home" });
          } else {
            alert("还没有注册！！去注册");
            // this.$router.push({ name: "register" });
            this.$store.dispatch("setUser", null);
          }
        });
    }
  }
};
</script>
