<script setup>
import {ref} from "vue";

const expandLabel = (src, n) => {
    let result = [];
    for (let i = 0; i < n; i++) {
        result = result.concat(src);
    }
    return result;
}

const labels = ref(expandLabel([
        "Python", "Java", "C++", "JavaScript",
        "Qt", "SpringBoot", "Vue.js", "PyTorch",
        "DeepLearning", "MachineLearning", "Embedded", "Web", "STM32", "Frontend", "Backend", "AI",
        "Piano", "Microeconomics",
        "osu!", "galgame", "osu!mania"
], 2));

const topMin = 20;
const topMax = 90;
const leftMin = 5;
const leftMax = 70;
const opacityMin = 0.1;
const opacityMax = 0.8;
const sizeMin = 12;
const sizeMax = 30;

const getLearnLabelStyle = () => {
    let top = (topMax - topMin) * Math.random() + topMin;
    let left = (leftMax - leftMin) * Math.random() + leftMin;
    let opacity = (opacityMax - opacityMin) * Math.random() + opacityMin;
    let size = (sizeMax - sizeMin) * Math.random() + sizeMin;
    return "top: " + top + "%; left: " + left + "%; opacity: " + opacity + "; font-size: " + size + "px;";
}
</script>

<template>
    <div id="aboutView">
        <div class="about-container">
            <div class="about-row row1">
                <div class="block about-block11">
                    <div class="about-title1">{{ $t('about.title.title1') }}</div>
                    <div class="about-title2">{{ $t('about.title.title2') }}</div>
                </div>
                <div class="block about-block12">
                    <div class="block-title">{{ $t('about.intro.title') }}</div>
                    <div class="about-text">
                        <p>{{ $t('about.intro.intro1') }}</p>
                        <p>{{ $t('about.intro.intro2') }}</p>
                        <p>{{ $t('about.intro.intro3') }}</p>
                        <p>{{ $t('about.intro.intro4') }}</p>
                        <p>{{ $t('about.intro.intro5') }}</p>
                    </div>
                </div>
                <div class="block about-block13">
                    <div class="block-title">{{ $t('about.basic.title') }}</div>
                    <div class="about-text">
                        <p>{{ $t('about.basic.basic1') }}</p>
                        <p>{{ $t('about.basic.basic2') }}</p>
                        <p>{{ $t('about.basic.basic3') }}</p>
                        <p>{{ $t('about.basic.basic4') }}</p>
                        <p>{{ $t('about.basic.basic5') }}</p>
                    </div>
                </div>
            </div>
            <div class="about-row row2">
                <div class="block about-block21">
                    <div class="block-title">{{ $t('about.comment.title') }}</div>
                    <div class="about-text">
                        <p>{{ $t('about.comment.comment1') }}</p>
                        <p>{{ $t('about.comment.comment2') }}</p>
                        <p>{{ $t('about.comment.comment3') }}</p>
                        <p>{{ $t('about.comment.comment4') }}</p>
                        <p>{{ $t('about.comment.comment5') }}</p>
                        <p>{{ $t('about.comment.comment6') }}</p>
                    </div>
                </div>
                <div class="block about-block22">
                    <div class="block-title">{{ $t('about.label.title') }}</div>
                    <div class="learn-container">
                        <span v-for="label in labels" class="learn-item" :style="getLearnLabelStyle()">
                            {{ label }}
                        </span>
                    </div>
                </div>
                <div class="block about-block23">
                    <div class="block-title">{{ $t('about.personality.title') }}</div>
                    <div class="personality-container">
                        <div class="personality-img-box" style="width: 200px; height: 200px; margin: 20px">
                            <img alt="intp" src="@/assets/intp.svg" style="width: 100%; height: 100%; object-fit: cover">
                        </div>
                        <div style="margin: 20px 0 10px; font-size: 28px">INTP-A</div>
                        <div style="margin: 5px 0 20px; font-size: 20px">{{ $t('about.personality.job') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/global.scss";

.about-container {
    padding: 50px 15%;
    font-size: 18px;
}

.about-row {
    display: flex;
    flex-wrap: wrap;
}

.about-text {
    margin: 0 40px 30px
}

.about-block11 {
    flex: 2 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at 0 100%, oldlace 0, snow 60%);
}

.about-block12 {
    flex: 6 200px;
}

.about-block13 {
    flex: 3 180px;
}

.about-block21 {
    flex: 5 250px;
}

.about-block22 {
    position: relative;
    flex: 6 320px;
    min-height: 300px;
}

.about-block23 {
    flex: 2 200px;
}

.about-title1 {
    position: relative;
    margin-top: 10px;
    font-size: 40px;
    right: 10%;
}

.about-title2 {
    position: relative;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 65px;
    left: 5%;
}

.personality-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.learn-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-weight: bold;
}

.learn-item {
    position: absolute;
}
</style>