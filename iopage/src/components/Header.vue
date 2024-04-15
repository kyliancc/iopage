<script setup>
import router from '@/router/router.js'
</script>

<template>
    <div class="header-container">
        <div class="header-left">
            <div class="header-item">
                <div class="header-title">kyliancc</div>
            </div>
            <div class="header-item">
                <el-link @click="router.push('/')">Home</el-link>
            </div>
            <div class="header-item">
                <el-link @click="router.push('/about')">About</el-link>
            </div>
            <div class="header-item">
                <el-link @click="router.push('/feature')">Feature</el-link>
            </div>
            <div class="header-item">
                <el-link @click="router.push('/note')">Note</el-link>
            </div>
        </div>
        <div class="header-right">
            <div class="header-item"></div>
        </div>
    </div>
</template>

<style scoped>
.header-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
}

.header-left {
    display: flex;
    align-items: center;
}

.header-right {
    display: flex;
    align-items: center;
}

.header-title {
    margin: 0 20px;
    font-family: Inter, math;
    font-weight: bold;
    font-size: 18px;
}

.el-link {
    margin: 0 25px;
    font-size: 16px;
    font-family: Inter, math;
}
</style>