<script setup>
import {darkTheme} from 'naive-ui'
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
    <div class="h-screen bg-cyan-200 dark:bg-cyan-950 transition-all">
      <!--头像-->
      <n-h2>MrArchie</n-h2>
      <!--导航-->
      <div class="flex flex-col justify-center items-center">
        <div>
         <router-link to="/tools/cron">工具</router-link>
        </div>
      </div>
      <!-- 切换主题 -->
      <div class="flex justify-center items-center mt-3">
        <n-button @click="changeTheme">切换主题</n-button>
      </div>
    </div>
</template>

<style scoped>
</style>
