<script setup>
import { ref } from 'vue'
import cronParser from 'cron-parser'

const data = ref({})
const Axios = inject('Axios')

function getData() {
  Axios.get('/posts/1').then(res => {
    console.log('res', res)
    data.value = res
  })
  console.log('data', data)
}


// 测试cron-parse
const interval = cronParser.parseExpression('*/5 * * * * *')
for (let i = 0; i < 10; i++) {
  console.log('interval', interval.next().toString())
}
const range = ref([new Date().getTime(), new Date().getTime()])
const value = ref("")

</script>

<template>
    <!--日期输入区域-->
    <div class="m-28 h-fit">
      <n-space>
        <n-input v-model:value="value" type="text" placeholder="输入cron表达式" />
        <n-date-picker v-model:value="range" type="datetimerange" clearable />
      </n-space>
    </div>
</template>

<style scoped>

</style>
