import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import("@/views/home/index.vue")
        },
        {
            path: "/hospital",
            component: () => import("@/views/hospital/index.vue")
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    // 滚动行为：控制滚动条位置
    scrollBehavior() {
        return {
            top: 0,
            left: 0
        }
    }
})