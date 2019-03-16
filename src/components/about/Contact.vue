<template>
  <div>
    <div class="card text-dark bg-lighr mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
          <h3>联系我们</h3>
          <p>1576575085@qq.com</p>
          <router-link :to="{name:'userName'}">用户名</router-link>
          <router-link :to="{name:'phone'}">电话</router-link>
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>