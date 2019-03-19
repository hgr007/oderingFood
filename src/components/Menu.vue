<template>
  <div class="row">
    <!-- 菜单部分 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入购物车</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length>0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.name">
            <tr>
              <td>
                <button class="btn btn-sm" @click="decreate(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm" @click="increate(item)">+</button>
              </td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <P>总价为：{{total + "RMB"}}</P>
        <button class="btn btn-success btn-block">去结算</button>
      </div>
      <div v-else>
        <h3>{{basketsText}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menu",
  data() {
    return {
      baskets: [],
      basketsText: "购物车没用东西",
      getMenuItems: {
        1: {
          name: "榴莲pizza",
          description: "这是喜欢吃榴莲朋友的最佳选择",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        2: {
          name: "芝士pizza",
          description: "芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        3: {
          name: "夏威夷pizza",
          description: "众多人的默认选择",
          options: [
            {
              size: 9,
              price: 36
            },
            {
              size: 12,
              price: 46
            }
          ]
        }
      }
    };
  },
  computed: {
    total() {
      let totalCOnst = 0;
      for (const index in this.baskets) {
        let myItem = this.baskets[index];
        totalCOnst += myItem.price*myItem.quantity;
      }
      return totalCOnst;
    }
  },
  methods: {
    addToBasket(item, option) {
      let basket = {
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      };
      if (this.baskets.length > 0) {
        //表示购物车里面里面有东西 需要实现过滤

        let reslut = this.baskets.filter(basket => {
          //注意 this的指向问题
          return basket.name === item.name && basket.price === option.price;
        });

        if (reslut != null && reslut.length > 0) {
          reslut[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decreate(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeBasket(item);
      }
    },
    increate(item) {
      item.quantity++;
    },
    removeBasket(item) {
      //当商品的数量没有的时候 把这个购物车移走
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  }
};
</script>
