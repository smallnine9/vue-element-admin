<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const menuList = [
    {
        title: 'dashboard',
        index: '1-1',
        route: '/dashboard/detail'
    },
    {
        title: '导航2',
        index: '1-2'
    },
    {
        title: '导航3',
        index: '1-3'
    },
    {
        title: '导航4',
        index: '1-4'
    }
]
const jumpTo = function (path) {
    router.replace(path)
}
</script>
<template>
    <div class="h-full">
        <el-container class="h-full">
            <el-aside class=" bg-black text-white">
                <app-logo></app-logo>
                <el-menu :router="true" @select="jumpTo" class="h-full bg-transparent text-inherit">
                    <el-menu-item v-for="item in menuList" :key="item.index" :index="item.route" class="text-inherit">
                        {{ item.title }}
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>header</el-header>
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>