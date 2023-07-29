<script setup>
import { ref } from 'vue'

const data = ref({})
const Axios = inject('Axios')

function getData() {
  Axios.get('/posts/1').then(res => {
    console.log('res', res)
    data.value = res
  })
  console.log('data', data)
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
