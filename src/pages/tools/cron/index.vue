<script setup>
import {ref} from 'vue'
import cronParser from 'cron-parser'
import {useMessage} from 'naive-ui'

const Axios = inject('Axios')

// 测试cron-parse
// 默认当前时间和一周后的时间
const range = ref([new Date().getTime(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime()])
const cron = ref("0 0 0 * * ?")
const list = ref([])
const message = useMessage()

function getData() {
  if (cron.value === "") {
    message.error('请输入cron表达式')
    return
  }
  if (range.value[0] === null || range.value[1] === null) {
    message.error('请选择时间范围')
    return
  }
  list.value = []
  const interval = cronParser.parseExpression(cron.value, {
    currentDate: range.value[0],
    endDate: range.value[1],
    iterator: true
  })
  // 迭代数据，如果数据太多停止迭代，并提醒用户
  let count = 0
  while (interval.hasNext()) {
    const obj = interval.next()
    list.value.push(obj.value)
    count++
    if (count > 50) {
      message.warning('运行周期过多，建议在10周期内，请选择合适的日期')
      break
    }
  }
}

// 归一化函数
function normalize(originList, min, max) {
  const result = []
  let temp
  // 找到originList中的最大值和最小值
  let tempMin = originList[0]
  let tempMax = originList[0]
  for (const item of originList) {
    if (item < tempMin) {
      tempMin = item
    }
    if (item > tempMax) {
      tempMax = item
    }
  }
  for (const item of originList) {
    temp = (item - tempMin) / (tempMax - tempMin)
    result.push(min + temp * (max - min))
  }
  return result
}
</script>

<template>
  <div>
    <!--日期输入区域-->
    <div class="p-2 m-4 scroll-auto flex justify-between items-center">
    <span class="text-2xl">
      Cron 执行时间可视化
    </span>
      <div>
        <n-space>
          <n-input v-model:value="cron" type="text" placeholder="输入cron表达式"/>
          <n-date-picker v-model:value="range" type="datetimerange" clearable/>
          <n-button type="primary" @click="getData">添加</n-button>
        </n-space>
      </div>
    </div>

    <!-- 可视化区域 -->
    <div class="mx-4 p-2">
      <div>
        <div v-for="(item, index) in list">
          <!--根据这些日期的间隔，让div按照比例偏移-->
          <n-time :time="item.getTime()" />
        </div>
      </div>
    </div>

    <!-- 可视化区域 -->
    <!--<div class="mx-4 p-2">-->
    <!--  <div>{{ range[0] }}</div>-->
    <!--  <div class="h-4 bg-amber-300 mb-4"></div>-->
    <!--  <div class="p-2 flex justify-between hover:bg-gray-600 hover:transition-all duration-300">-->
    <!--    <n-scrollbar x-scrollable>-->
    <!--      <div class="flex">-->
    <!--        <div v-for="(item, index) in list" v-if="list && list.length !== 0">-->
    <!--          &lt;!&ndash;根据这些日期的间隔，让div按照比例偏移&ndash;&gt;-->
    <!--          <div class="h-10 w-1 bg-amber-300 m-1" style="margin-left: 1000px"></div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </n-scrollbar>-->
    <!--  </div>-->
    <!--</div>-->
  </div>
</template>

<style scoped>

</style>
