<script setup>
import {provide, ref} from 'vue'
import {useOsTheme, darkTheme, zhCN, dateZhCN } from 'naive-ui'
import SlideNavigation from "./components/SlideNavigation.vue";
import lightThemeOverrides from "./theme/lightThemeOverrides";
import darkThemeOverrides from "./theme/darkThemeOverrides";

const theme = ref(null);
const osTheme = useOsTheme()
theme.value = osTheme?.value === 'dark' ? darkTheme : null;
localStorage.setItem('theme', theme.value === null ? 'light' : 'dark');
provide('theme', theme)

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
</script>

<template>
  <!--:theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"-->
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme" preflight-style-disabled>
    <n-global-style />
    <n-message-provider>
      <n-layout has-sider>
        <n-layout-sider>
          <SlideNavigation />
        </n-layout-sider>
        <n-layout>
          <n-layout-header></n-layout-header>
          <n-layout-content>
            <router-view></router-view>
          </n-layout-content>
          <n-layout-footer></n-layout-footer>
        </n-layout>
      </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
