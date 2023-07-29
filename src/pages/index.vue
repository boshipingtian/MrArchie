<script setup>
import {useOsTheme, darkTheme} from 'naive-ui'
const theme = inject('theme');
const changeTheme = () => {
  theme.value = theme.value === null ? darkTheme : null;
  localStorage.setItem('theme', theme.value === null ? 'light' : 'dark');
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

</script>

<template>
  <div>首页</div>
  <n-button @click="changeTheme">按钮</n-button>
</template>

<style scoped>

</style>
