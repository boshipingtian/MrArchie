<script setup>
import {DarkModeOutlined, LightModeOutlined} from '@vicons/material'
import {darkTheme} from 'naive-ui'

const theme = inject('theme');
const modeBg = ref('#f5f6f6');
const darkIconColor = ref('#9ca3af');
const switchPosition = ref('0%');
const switchBgColor = ref('#ffffff');
const switchShadow = ref('#70707033');

/**
 * 切换主题
 * @param mode
 * @param e
 */
const changeTheme = (mode, e) => {
  document.querySelectorAll(".mode-item").forEach(item => {
    if(item.classList.contains('active')){
      item.classList.remove('active');
    }else{
      item.classList.add('active');
    }
  })
  theme.value = mode === 'dark' ? darkTheme : null;
  modeBg.value = mode === 'dark' ? '#18202f' : '#f5f6f6';
  switchPosition.value = mode === 'dark' ? '50%' : '0%';
  switchBgColor.value = mode === 'dark' ? '#293751' : '#ffffff';
  darkIconColor.value = mode === 'dark' ? '#ffffff' : '#9ca3af';
  switchShadow.value = mode === 'dark' ? '#161e2c' : '#70707033';
  localStorage.setItem('theme', mode ==='dark' ? 'dark' : 'light');
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    setTimeout(() => {
      const body = document.querySelector("body")
      body.style.backgroundColor = '#161e2a';
    }, 0)
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <div class="navigation dark:bg-[#1c2537]">
    <!--头像-->
    <router-link to="/">
      <n-h2 class="text-center">MrArchie</n-h2>
    </router-link>
    <!--导航-->
    <div class="flex flex-col justify-center items-center">
      <router-link to="/tools/cron">
        <n-h3>cron</n-h3>
      </router-link>
    </div>
    <!-- 切换主题 -->
    <div class="mode-container">
      <div class="mode-content" :style="{backgroundColor: modeBg}">
        <div class="mode-item" @click="changeTheme('light', $event)">
          <light-mode-outlined color="#1a2235"/>
          <span class="font-bold ml-1">Light</span>
        </div>
        <div class="mode-item active" @click="changeTheme('dark', $event)">
          <dark-mode-outlined color="#1a2235" :style="{color: darkIconColor}"/>
          <span class="font-bold ml-1">Dark</span>
        </div>
        <div class="switch-content" :style="{left: switchPosition, backgroundColor: switchBgColor}"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigation{
  height: calc(100vh - 40px);
  width: 240px;
  border-radius: 1rem;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 20px v-bind('switchShadow');
  position: relative;
}
.mode-container{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 60px;
}
.mode-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 0.8rem;
  overflow: hidden;
  border: none;
}

.mode-content .active {
  color: #9ca3af;
}
.mode-content .active svg {
  color: #9ca3af;
}

.switch-content {
  transition: 0.3s all;
  position: absolute;
  width: calc(50% - 6px);
  height: calc(100% - 6px);
  border-radius: 0.6rem;
  margin: 3px 3px;
  box-shadow: 0 0 20px rgba(112, 112, 112, 0.2);
}

.mode-item {
  width: 50%;
  height: 50px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.mode-item svg {
  height: 100%;
}

</style>
