<template>
    <div>
        <!-- 首页轮播图 -->
        <Carousel />
        <!-- 首页搜索医院的表单区域 -->
        <Search />
        <!-- 底部展示医院的结构 -->
        <el-row :gutter="20">
            <el-col :span="20">
                <!-- 等级子组件 -->
                <Level @getLevel="getLevel" />
                <!-- 地区 -->
                <Region @getRegion="getRegion" />
                <!-- 展示医院信息的组件 -->
                <div class="hospital" v-if="hasHospitalArr.length > 0">
                    <Card class="item" v-for="item in hasHospitalArr" :key="item._id" :hospitalInfo="item" />
                    <!-- 分页器 -->
                    <el-pagination style="width: 100%;" v-model:current-page="pageNo" v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" :background="true"
                        layout="prev, pager, next, jumper,->,sizes,total" :total="total" @current-change="currentChange"
                        @size-change="sizeChange" />
                </div>
                <el-empty v-else description="暂无医院数据" />
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import type { Hospital } from '@/api/home/type'
// 引入组合式API函数
import { onMounted, ref } from 'vue'
import type { HospitalResponseData } from '@/api/home/type'
import { reqHospital } from '@/api/home'
//分页器需要的数据
//分页器当前页码
let pageNo = ref<number>(1)
// 一页展示几条数据
let pageSize = ref<number>(10)
// 存储已有的医院数据
let hasHospitalArr = ref<Hospital[]>([]);
// 存储医院总个数
let total = ref<number>(0)
// 存储医院的等级和地区数据
let hostype = ref<string>('')
let districtCode = ref<string>('')
//组件挂载完毕发一次请求
onMounted(() => {
    getHospitalInfo()
})

// 获取已有的医院数据接口
const getHospitalInfo = async () => {
    const res: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value)
    if (res.code == 200) {
        // 存储已有的医院数据
        hasHospitalArr.value = res.result.list
        // 存储医院总个数
        total.value = res.result.total
    }
}
// 分页器页码发生的回调
const currentChange = () => {
    getHospitalInfo()
}
// 分页器页容量发生的回调
const sizeChange = () => {
    getHospitalInfo()
}

// 获取等级子组件传递过来的数据
const getLevel = (level: string) => {
    hostype.value = level
    getHospitalInfo()
}
// 获取地区子组件传递过来的数据
const getRegion = (region: string) => {
    districtCode.value = region
    getHospitalInfo()
}
</script>
<style scoped lang="scss">
.hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        width: 48%;
        margin: 10px 0;
    }
}
</style>