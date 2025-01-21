<template>
    <div class="region">
        <div class="content">
            <div class="lef">地区：</div>
            <ul>
                <li :class="{ active: RegionFlag == '' }" @click="changeRegion('')">全部</li>
                <li :class="{ active: RegionFlag == item.value }" v-for="item in hospitalLevelAndRegionArr"
                    :key="item.value" @click="changeRegion(item.value)">{{
                    item.name
                }}</li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type'
import { reqHospitalLevelAndRegion } from '@/api/home'

// 存储医院等级和地区数据
let hospitalLevelAndRegionArr = ref<HospitalLevelAndRegionArr>([])
//地区高亮的响应式数据
let RegionFlag = ref<string>('')
// 组件挂载完毕发一次请求
onMounted(() => {
    getHospitalLevelAndRegion()
})
// 获取医院等级和地区数据
const getHospitalLevelAndRegion = async () => {
    const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("region")
    if (result.code === 200) {
        hospitalLevelAndRegionArr.value = result.result
    }
}
// 点击地区改变地区高亮
const changeRegion = (region: string) => {
    RegionFlag.value = region
}
</script>
<style scoped lang="scss">
.region {
    color: #7f7f7f;
    margin-top: 10px;

    .content {
        display: flex;
    }

    .left {
        margin-right: 10px;
        white-space: nowrap;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            margin-right: 10px;
            margin-bottom: 10px;

            &.active {
                color: #55a6fe;
            }
        }

        li:hover {
            color: #55a6fe;
            cursor: pointer;
        }
    }
}
</style>