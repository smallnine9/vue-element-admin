<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider>
    <RouterView />
  </el-config-provider>
</template>

<style>
#app {
  height: 100%;
}
</style>
