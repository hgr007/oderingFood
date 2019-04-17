<template>
  <div>
    <Header class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="d-block mx-auto"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </svg>
      </a>
      <a href="#" class="navbar navbar-brand">点餐系统</a>
      <ul class="navbar-nav">
        <router-link tag="a" to="/" class="nav-link">主页</router-link>
        <router-link tag="a" to="/menu" class="nav-link">菜单</router-link>
        <router-link to="/admin" class="nav-link" tag="a">管理</router-link>
        <router-link to="/about" class="nav-link" tag="a">关于我们</router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <router-link to="/login" class="nav-link" tag="a">登陆</router-link>
        <router-link to="register" class="nav-link" tag="a">注册</router-link>
      </ul>
    </Header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'appheader'
}
</script>

