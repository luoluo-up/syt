<template>
    <div class="search">
        <el-autocomplete clearable placeholder="请输入医院名称" class="form" style="width: 600px;" />
        <el-button type="primary" size="default" @click="" :icon="Search">搜索</el-button>
    </div>
</template>
<script setup lang="ts">
//引入elementplus图标
import { Search } from '@element-plus/icons-vue'
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