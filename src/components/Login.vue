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
        
    }
  }
};
</script>
