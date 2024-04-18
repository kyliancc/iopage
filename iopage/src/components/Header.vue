<script setup>
import {ref} from 'vue';
import router from '@/router/router.js';
import i18n from '@/i18n/i18n.js'

const translateHover = ref(false);
const translateTab = ref(false);

const translateMouseEnter = () => {
    translateHover.value = true;
};
const translateMouseLeave = () => {
    translateHover.value = false;
};

const switchTranslateTab = () => {
    translateTab.value = !translateTab.value;
};

const changeLanguage = (lang) => {
    i18n.global.locale = lang;
    switchTranslateTab();
}
</script>

<template>
    <div class="header-container">
        <div class="header-left">
            <div class="header-item">
                <div class="header-title">kyliancc</div>
            </div>
            <div class="header-item">
                <a @click="router.push('/')">{{ $t('page.home') }}</a>
            </div>
            <div class="header-item">
                <a @click="router.push('/about')">{{ $t('page.about') }}</a>
            </div>
            <div class="header-item">
                <a @click="router.push('/feature')">{{ $t('page.feature') }}</a>
            </div>
            <div class="header-item">
                <a @click="router.push('/note')">{{ $t('page.note') }}</a>
            </div>
        </div>
        <div class="header-right">
            <div class="header-item">
                <a @click="switchTranslateTab" @mouseenter="translateMouseEnter" @mouseleave="translateMouseLeave">
                    <img v-if="translateHover" class="translate-image" alt="translate" src="@/assets/translate-hover.svg">
                    <img v-else class="translate-image" alt="translate" src="@/assets/translate.svg">
                </a>
            </div>
        </div>
    </div>
    <div v-if="translateTab" class="translate-tab block">
        <a @click="changeLanguage('en')" class="lang-item">English</a>
        <a @click="changeLanguage('zh-CN')" class="lang-item">简体中文</a>
        <a @click="changeLanguage('ja')" class="lang-item">日本語</a>
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
    font-weight: bold;
    font-size: 18px;
}

.header-item > a {
    margin: 0 25px;
    font-size: 16px;
}

.translate-image:hover {
    fill: var(--kc-color-hover);
}

.translate-tab {
    position: fixed;
    top: 60px;
    right: 0;
    width: 100px;
    display: flex;
    flex-direction: column;
    padding: 5px;
}

.lang-item {
    text-align: center;
    margin: 5px 0;
}
</style>