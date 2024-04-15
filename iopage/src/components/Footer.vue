<script setup>
import router from "@/router/router.js";
</script>

<template>
    <div class="footer-container">
        <div class="footer-links">
            <a @click="router.push('/')">Home</a>
            <a @click="router.push('/about')">About</a>
            <a @click="router.push('/feature')">Feature</a>
            <a @click="router.push('/note')">Note</a>
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