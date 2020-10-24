<template>
  <div id="app">

    <!-- 顶部栏 -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        <!-- 菜单栏 -->
        <app-menu></app-menu>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          
          
          <!-- 主体 -->
          <router-view></router-view>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// 引入组件
import AppHeader from '@/components/AppHeader.vue'
import AppMenu from '@/components/AppMenu.vue'

export default {
  name: "App",
  // 注册组件
  components: {
    AppHeader,
    AppMenu,
  },
};
</script>

<style>
</style>
