import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/HelloWorld',
        //     name: 'HelloWorld',
        //     component: () => import('@/components/HelloWorld.vue')
        // },
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home/Home.vue')
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: () => import('../components/HelloWorld.vue')
        },
    ]
})

export default router;