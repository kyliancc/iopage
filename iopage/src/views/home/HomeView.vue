<script setup>
import router from '@/router/router.js'
</script>

<template>
    <div id="homeView">
        <div class="home-container1">
            <div class="home-main-container">
                <div class="main-top-container">
                    <div class="block title-block">
                        <div class="title">
                            <div class="title1">Welcome,</div>
                            <div class="title2">this is <span class="title-name">kyliancc</span>'s</div>
                            <div class="title3">personal page.</div>
                        </div>
                    </div>
                    <div class="block about-page-block">
                        <div class="block-title">About this site..</div>
                        <div class="block-text">
                            <br>
                            <span style="font-weight: bold">Home: </span>
                            <span>The home page.</span>
                            <hr>
                            <span style="font-weight: bold">About: </span>
                            <span>Something about me.</span>
                            <hr>
                            <span style="font-weight: bold">Feature: </span>
                            <span>Some features I've made.</span>
                            <hr>
                            <span style="font-weight: bold">Note: </span>
                            <span>Some notes I've written.</span>
                        </div>
                    </div>
                </div>

                <div class="recommend-container">
                    <div class="block recommend-item"></div>
                    <div class="block recommend-item"></div>
                    <div class="block recommend-item"></div>
                    <div class="block recommend-item"></div>
                    <div class="block recommend-item"></div>
                </div>
            </div>
            <div class="home-aside-container">
                <div class="block">
                    <div class="block-title">About me..</div>
                    <div class="about-text">
                        <p>- 16-year-old</p>
                        <p>- Computer Science, Automation lover</p>
                        <p>- Active in Central South University</p>
                        <hr>
                        <p>I'm a lazy guy, maybe..</p>
                        <p>I mainly do Artificial Intelligence.</p>
                        <p>Also do something about Web Frontend/Backend, even Embedded.</p>
                    </div>
                    <div class="about-link">
                        <el-button type="info" plain @click="router.push('/about')">Watch more</el-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
#homeView {
    margin-top: 60px;
}

.home-container1 {
    display: flex;
    padding: 50px 15%;
}

.home-main-container {
    flex: 5;
}

.home-aside-container {
    flex: 2;
}

.main-top-container {
    display: flex;
}

.title-block {
    flex: 2;
    background: radial-gradient(circle at 0 0, oldlace 0, snow 80%);
}

.about-page-block {
    flex: 1;
}

.block {
    border-radius: 4px;
    box-shadow: var(--el-box-shadow-lighter);
    background-color: white;
    margin: 20px;
    padding: 20px;
    font-family: Inter, math;
    overflow: hidden;
}

.block-title {
    font-family: Inter, math;
    font-weight: bold;
    font-size: 25px;
    margin: 10px;
}

.block-text {
    padding: 0 10px;
}

.title {
    display: flex;
    flex-direction: column;
    font-family: Inter, math;
    padding: 30px;
}

.title1 {
    margin-left: 8%;
    font-size: 45px;
}

.title2 {
    margin-left: 50%;
    margin-top: 10px;
    font-size: 20px;
}

.title2 .title-name {
    font-size: 35px;
}

.title3 {
    margin-left: 20%;
    margin-top: 35px;
    font-size: 30px;
}

.recommend-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.recommend-item {
    flex: 1 300px;
    height: 150px;
}

.about-link {
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
}
</style>