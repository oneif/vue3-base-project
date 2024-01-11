<template>
  home
  <el-button v-throttle type="primary" size="default" @click="a">aa</el-button>
  <SvgIcon name="logo" />
</template>
<script setup lang="ts">
const a = () => {
  console.log('123')
}
</script>
