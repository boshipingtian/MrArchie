<script setup>
import {provide, ref} from 'vue'
import {useOsTheme, darkTheme} from 'naive-ui'
import SlideNavigation from "./components/SlideNavigation.vue";
import lightThemeOverrides from "./theme/lightThemeOverrides";
import darkThemeOverrides from "./theme/darkThemeOverrides";

const theme = ref(null);
const osTheme = useOsTheme()
theme.value = osTheme?.value === 'dark' ? darkTheme : null;
provide('theme', theme)
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <n-global-style />
    <SlideNavigation />
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
