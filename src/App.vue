<script setup>
import {provide, ref} from 'vue'
import {useOsTheme, darkTheme} from 'naive-ui'

const theme = ref(null);
const osTheme = useOsTheme()
theme.value = osTheme?.value === 'dark' ? darkTheme : null;
const themeFunc = () => {
  return theme.value = theme.value === null ? darkTheme : null;
}
provide('theme', theme)
</script>

<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-card> 当前操作系统的主题是 {{ osTheme }}。
      <n-button @click="themeFunc">切换</n-button>
    </n-card>
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
