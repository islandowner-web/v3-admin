<template>
  <div>
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://oss.qlinyun.com/test/picture/Yw2Q2KFGdatjMfe7h8HSK56K3Eb8TJxM.png"
      ></el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">Admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import {} from 'vue'

const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600px;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
