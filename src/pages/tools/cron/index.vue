<script setup>
import { ref } from 'vue'

const data = ref([])

function getData() {
    axios.get("/corn/parse").then(res => {
        data.value = res.data
    })
}

</script>

<template>
    <div>
        {{ data }}
    </div>
    <n-button @click="getData">启动</n-button>
</template>

<style scoped>

</style>
