<template>
    <!-- 首页轮播图结构 -->
    <el-carousel height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../../assets/images/home/2.jpeg" alt="" srcset="">
        </el-carousel-item>
    </el-carousel>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
img {
    width: 100%;
    height: 350px;
}
</style>