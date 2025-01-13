<template>
    <div class="bottom">
        <div class="content">
            <div class="left">
                © 2024-2099 小洛神版权所有
            </div>
            <div class="right">
                <span>关于我们</span>
                <span>联系我们</span>
                <span>帮助中心</span>
                <span>意见反馈</span>
            </div>
            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>用户协议</span>
                <span>隐私协议</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.bottom {
    width: 100%;
    height: 50px;
    background: #f0f2f5;

    .content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;

        .right {
            span {
                margin: 0 5px;
            }
        }
    }
}
</style>