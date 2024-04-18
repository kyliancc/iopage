<script setup>
import router from "@/router/router.js";
</script>

<template>
    <div class="footer-container">
        <div class="footer-links">
            <a @click="router.push('/')">{{ $t('page.home') }}</a>
            <a @click="router.push('/about')">{{ $t('page.about') }}</a>
            <a @click="router.push('/feature')">{{ $t('page.feature') }}</a>
            <a @click="router.push('/note')">{{ $t('page.note') }}</a>
        </div>
        <div class="footer-copyright">
            <span>Webpage designed by kyliancc</span>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/global.scss";

.footer-container {
    padding: 10px;
}

.footer-links {
    display: flex;
    justify-content: center;
}

.footer-links > a {
    margin: 20px 40px;
}

.footer-copyright {
    display: flex;
    justify-content: center;
    color: darkgray;
}
</style>