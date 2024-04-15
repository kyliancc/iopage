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
                <a @click="router.push('/')">Home</a>
            </div>
            <div class="header-item">
                <a @click="router.push('/about')">About</a>
            </div>
            <div class="header-item">
                <a @click="router.push('/feature')">Feature</a>
            </div>
            <div class="header-item">
                <a @click="router.push('/note')">Note</a>
            </div>
        </div>
        <div class="header-right">
            <div class="header-item"></div>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/global.scss";

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

.header-item > a {
    margin: 0 25px;
    font-size: 16px;
    font-family: Inter, math;
}
</style>