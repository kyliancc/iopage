<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<template>
    <el-header>
        <Header />
    </el-header>

    <el-main>
        <RouterView />
    </el-main>
</template>
