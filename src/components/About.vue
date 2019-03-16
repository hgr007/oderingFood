<template>
  <div class="about">
    <div class="contanier">
      <div class="row mb-5">
            <div class="col-4">
                  <!-- 导航 -->
                <div class="list-group mb-5">
                  <router-link :to="{name:'contact'}" class="nav-link " >
                    <a href="#" class=" list-group-item list-group-item-action">联系我们</a>
                  </router-link>
                  <router-link :to="{name:'delivery'}"  class="nav-link ">
                    <a href="#" class="list-group-item list-group-item-action">快递信息</a>
                  </router-link>
                  <router-link :to="{name:'history'}"  class="nav-link ">
                    <a href="#" class="list-group-item list-group-item-action">历史订单</a>
                  </router-link>
                  <router-link :to="{name:'oderingGuide'}" class="nav-link ">
                    <a href="#" class="list-group-item list-group-item-action">点餐文档</a>
                  </router-link>
              </div>
            </div>
                <div class="col-md-8">
                  <!-- 展示 -->
                  <router-view></router-view>
                </div>
      </div>
    </div>
  </div>
</template>
