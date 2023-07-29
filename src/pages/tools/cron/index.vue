<script setup>
import { ref } from 'vue'

const data = ref({})
const Axios = inject('Axios')
import cronParser from 'cron-parser'

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

</script>

<template>
    <div>
        {{ data?.title }}
    </div>
    <n-button @click="getData">启动</n-button>
</template>

<style scoped>

</style>
