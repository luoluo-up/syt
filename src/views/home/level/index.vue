<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级</div>
            <ul class="hospital">
                <li :class="{ active: activeFlag === '' }" @click="changeLevel('')">全部</li>
                <li v-for="item in hospitalLevelAndRegion" :key="item.value"
                    :class="{ active: activeFlag === item.value }" @click="changeLevel(item.value)">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type'
import { reqHospitalLevelAndRegion } from '@/api/home'
// 存储医院等级和地区数据
const hospitalLevelAndRegion = ref<HospitalLevelAndRegionArr>([])
//控制医院等级高亮响应式数据
let activeFlag = ref<string>('');
// 组件挂载完毕发一次请求
onMounted(async () => {
    getHospitalLevelAndRegion()
})
// 获取医院等级和地区数据
const getHospitalLevelAndRegion = async () => {
    const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion("hostype")
    if (result.code === 200) {
        hospitalLevelAndRegion.value = result.result
    }
}
// 点击等级改变等级高亮
const changeLevel = (level: string) => {
    activeFlag.value = level
    // 触发父组件的getLevel方法
    $emit('getLevel', level)
}
let $emit = defineEmits(['getLevel'])
</script>
<style scoped lang="scss">
.level {
    color: #7f7f7f;

    h1 {

        font-weight: 900;
        margin: 10px 0;
    }

    .content {
        display: flex;

        .left {
            margin-right: 10px;
        }

        .hospital {
            display: flex;

            li {
                margin-right: 10px;

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
}
</style>