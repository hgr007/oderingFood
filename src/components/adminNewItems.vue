<template>
  <div>
    <form>
      <h3>添加新的物件</h3>
      <div class="form-group row">
        <label class="col-sm-1">品种</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newFood.name">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1">描述</label>
        <div class="col-sm-11">
          <textarea class="form-control" v-model="newFood.description" rows="5"></textarea>
        </div>
      </div>
      <p>
        <strong>选项1</strong>
      </p>
      <div class="form-group row">
        <label class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newFood.size1">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1">价格</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newFood.price1">
        </div>
      </div>
      <p>
        <strong>选项2</strong>
      </p>
      <div class="form-group row">
        <label class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newFood.size2">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1">价格</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newFood.price2">
        </div>
      </div>
      <div class="form-group row">
        <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewItems",
  data() {
    return {
      newFood: {}
    };
  },
  methods: {
    addMenuItem() {
      // console.log(this.newFood.name);
      let data = {
        name: this.newFood.name,
        description: this.newFood.description,
        options: [
          {
            size: this.newFood.size1,
            price: this.newFood.price1
          },
          {
            size: this.newFood.size2,
            price: this.newFood.price2
          }
        ]
      };
      this.http.post("menu.json", data)
        .then(res => this.$store.commit("pushToMenuItems", data));
    }
  }
};
</script>
