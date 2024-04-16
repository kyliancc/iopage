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
                    <div class="about-title1">About</div>
                    <div class="about-title2">me..</div>
                </div>
                <div class="block about-block12">
                    <div class="block-title">Introduction</div>
                    <div class="about-text">
                        <p>Hiiii, I'm kyliancc.</p>
                        <p>A 16-year-old high school student.</p>
                        <p>Computer Science & Automation enthusiast.</p>
                        <p>Now Active in Central South University.</p>
                        <p>Mainly do Artificial Intelligence.</p>
                    </div>
                </div>
                <div class="block about-block13">
                    <div class="block-title">Basic Information</div>
                    <div class="about-text">
                        <p>Gender: Male.</p>
                        <p>Pronoun: He/Him.</p>
                        <p>Birthday: March 27th, 2008.</p>
                        <p>Country: China.</p>
                        <p>16Personality: INTP-A.</p>
                    </div>
                </div>
            </div>
            <div class="about-row row2">
                <div class="block about-block21">
                    <div class="block-title">Comments</div>
                    <div class="about-text">
                        <p>I'm the guy who learns via the interest lol.</p>
                        <p>Sometimes I play piano and draw something.</p>
                        <p>I play galgames and rhythm games.</p>
                        <p>I like discovering and creating.</p>
                        <p>I'm a bit introverted, casual, and rebellious. XD</p>
                        <p>I'm trying to learn social sciences like Economics recently.</p>
                    </div>
                </div>
                <div class="block about-block22">
                    <div class="block-title">My Labels</div>
                    <div class="learn-container">
                        <span v-for="label in labels" class="learn-item" :style="getLearnLabelStyle()">
                            {{ label }}
                        </span>
                    </div>
                </div>
                <div class="block about-block23">
                    <div class="block-title">16Personality</div>
                    <div class="personality-container">
                        <div class="personality-img-box" style="width: 200px; height: 200px; margin: 20px">
                            <img alt="intp" src="@/assets/intp.svg" style="width: 100%; height: 100%; object-fit: cover">
                        </div>
                        <div style="margin: 20px 0 10px; font-size: 28px">INTP-A</div>
                        <div style="margin: 5px 0 20px; font-size: 20px">Logician</div>
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