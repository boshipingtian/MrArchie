<script setup>
import {provide, ref} from 'vue'
import {useOsTheme, darkTheme, zhCN, dateZhCN} from 'naive-ui'
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
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme" preflight-style-disabled :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <n-global-style/>
    <n-message-provider>
      <div class="flex">
        <SlideNavigation/>
        <div class="w-full flex-auto">
          <router-view></router-view>
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
