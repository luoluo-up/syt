<template>
    <div class="top">
        <div class="content">
            <!-- 左侧 -->
            <div class="left" @click="$router.push('/home')">
                <img src="../assets/images/avatar.jpg" alt="" srcset="">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <!-- 右侧 -->
            <div class="right">
                <p class="help">帮助中心</p>
                <p>登录/注册</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.top {
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;

    .content {
        width: 1200px;
        height: 70px;
        display: flex;
        justify-content: space-between;

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
            }

            p {
                font-size: 20px;
                color: #55a6fe;
            }
        }

        .right {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #666666;

            .help {
                margin-right: 10px;
            }
        }
    }
}
</style>