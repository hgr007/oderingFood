<template>
  <div class="row">
    <!-- 菜单部分 -->
    <div class="col-sm-12">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入购物车</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>香蕉</strong>
            </td>
            <td>9寸</td>
            <td>38RMB</td>
            <td>
              <button @click="addToBasket" class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    name:'menu',
    data(){
        return{

        }
    },
    methods:{
        addToBasket(){
            
        }
    }
}
</script>
