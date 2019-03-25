<template>
  <form>
    <h3>添加新的物件</h3>
    <div class="form-group row">
      <lable class="col-sm-1">品种</lable>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="Item.name">
      </div>
    </div>
    <div class="form-group row">
      <lable class="col-sm-1">描述</lable>
      <div class="col-sm-11">
        <textarea class="form-control" v-model="Item.description" rows="5"></textarea>
      </div>
    </div>
    <p>
      <strong>选项1</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="Item.size1">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="Item.price1">
      </div>
    </div>
    <p>
      <strong>选项2</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="Item.size2">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="Item.price2">
      </div>
    </div>
    <div class="form-group row">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "Items",
  data() {
    return {
      Item: {}
    };
  },
  methods: {
    addMenuItem() {
      // console.log(this.Item)  可以拿到数据
      let data = {
        name: this.Item.name,
        description: this.Item.description,
        options: [
          {
            size: this.Item.size1,
            price: this.Item.price1
          },
          {
            size: this.Item.size2,
            price: this.Item.price2
          }
        ]
      };
      this.http
        .post("menu.json", data)
        .then(res => this.$router.push({ name: "menu" }));
    }
  }
};
</script>
