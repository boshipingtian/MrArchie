<script setup>
import {provide, ref} from 'vue'
import {useOsTheme, darkTheme} from 'naive-ui'
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
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <n-global-style />
    <div class="flex">
      <SlideNavigation />
      <router-view></router-view>
    </div>
  </n-config-provider>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
