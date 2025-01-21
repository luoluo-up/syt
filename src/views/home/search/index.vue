<template>
    <div class="search">
        <el-autocomplete @select="goDetail" clearable placeholder="请输入医院名称" class="form" style="width: 600px;"
            v-model="hosname" :fetch-suggestions="fetchData" :trigger-on-focus="false" />
        <el-button type="primary" size="default" @click="" :icon="Search">搜索</el-button>
    </div>
</template>
<script setup lang="ts">
//引入elementplus图标
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { HospitalSearchResponseData, Hospital } from '@/api/home/type'
import { reqHospitalSearch } from '@/api/home'
//路由
const router = useRouter()
//搜索框的值 
let hosname = ref<string>('')
//搜索框的数据
const fetchData = async (keyword: string, cb: any) => {
    const result: HospitalSearchResponseData = await reqHospitalSearch(keyword)
    if (result.code === 200) {
        let showData = result.result.map((item: Hospital) => {
            return {
                value: item.name,
                hoscode: item.hoscode
            }
        })
        cb(showData)
    }
}
//点击某一个推荐项跳转到详情页
const goDetail = (item: any) => {
    router.push(`/hospital/${item.hoscode}`)
}
</script>
<style scoped lang="scss">
.search {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    width: 100%;

    :deep(.el-input__wrapper) {
        margin-right: 10px;
    }
}
</style>