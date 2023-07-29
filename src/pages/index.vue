<script setup>
import {useOsTheme, darkTheme} from 'naive-ui'
const theme = inject('theme');
const changeTheme = () => {
  theme.value = theme.value === null ? darkTheme : null;
}

</script>

<template>
  <div>首页</div>
  <n-button @click="changeTheme">按钮</n-button>
</template>

<style scoped>

</style>
