<script setup>
import router from '@/router/router.js'
</script>

<template>
    <div id="homeView">
        <div class="home-container">
            <div class="home-main-container">
                <div class="main-top-container">
                    <div class="block title-block">
                        <div class="title">
                            <div class="title1">{{ $t('home.title.title1') }}</div>
                            <div class="title2">
                                {{ $t('home.title.title2Front') }}
                                <span class="title-name">kyliancc</span>
                                {{ $t('home.title.title2End') }}
                            </div>
                            <div class="title3">{{ $t('home.title.title3') }}</div>
                        </div>
                    </div>
                    <div class="block about-page-block">
                        <div class="block-title">{{ $t('home.aboutSite.title') }}</div>
                        <div class="block-text">
                            <span style="font-weight: bold">{{ $t('page.home') }}: </span>
                            <span>{{ $t('home.aboutSite.home') }}</span>
                            <hr>
                            <span style="font-weight: bold">{{ $t('page.about') }}: </span>
                            <span>{{ $t('home.aboutSite.about') }}</span>
                            <hr>
                            <span style="font-weight: bold">{{ $t('page.feature') }}: </span>
                            <span>{{ $t('home.aboutSite.feature') }}</span>
                            <hr>
                            <span style="font-weight: bold">{{ $t('page.note') }}: </span>
                            <span>{{ $t('home.aboutSite.note') }}</span>
                        </div>
                    </div>
                </div>

                <div class="recommend-container">
                    <a class="block recommend-item" href="#">
                        <img class="recommend-image" alt="recommend" src="@/assets/yali.png">
                        <div class="recommend-title">我喜欢你</div>
                        <div class="recommend-description">随便写点东西。</div>
                    </a>

                    <a class="block recommend-item" href="#">
                        <img class="recommend-image" alt="recommend" src="@/assets/yali.png">
                        <div class="recommend-title">Are programmers really under a HUGE pressure?</div>
                        <div class="recommend-description">At least I feel so.</div>
                    </a>
                    <a class="block recommend-item" href="#"></a>
                    <a class="block recommend-item" href="#"></a>
                    <a class="block recommend-item" href="#"></a>
                </div>
            </div>
            <div class="home-aside-container">
                <div class="block">
                    <div class="block-title">{{ $t('home.aboutMe.title') }}</div>
                    <div class="about-text">
                        <p>- {{ $t('home.aboutMe.about1') }}</p>
                        <p>- {{ $t('home.aboutMe.about2') }}</p>
                        <p>- {{ $t('home.aboutMe.about3') }}</p>
                        <hr>
                        <p>{{ $t('home.aboutMe.about4') }}</p>
                        <p>{{ $t('home.aboutMe.about5') }}</p>
                        <p>{{ $t('home.aboutMe.about6') }}</p>
                    </div>
                    <div class="about-link">
                        <a @click="router.push('/about')" style="text-decoration: underline">{{ $t('home.aboutMe.viewMore') }}</a>
                    </div>
                </div>
                <div class="block category-block">
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Microeconomics</span>
                        </div>
                    </a>
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Electronics</span>
                        </div>
                    </a>
                    <a class="category-item">
                    <div class="category-image">
                        <img alt="category" src="@/assets/senpai.png">
                    </div>
                    <div class="category-text">
                        <span>Artificial Intelligence</span>
                    </div>
                </a>
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Web Development</span>
                        </div>
                    </a>
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Mathematics</span>
                        </div>
                    </a>
                </div>
                <div class="block category-block">
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Microeconomics</span>
                        </div>
                    </a>
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Electronics</span>
                        </div>
                    </a>
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Artificial Intelligence</span>
                        </div>
                    </a>
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Web Development</span>
                        </div>
                    </a>
                    <a class="category-item">
                        <div class="category-image">
                            <img alt="category" src="@/assets/senpai.png">
                        </div>
                        <div class="category-text">
                            <span>Mathematics</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
@import "@/assets/global.scss";

.home-container {
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
    flex-wrap: wrap;
}

.title-block {
    flex: 2;
    background: radial-gradient(circle at 0 0, oldlace 0, snow 80%);
}

.about-page-block {
    flex: 1;
}

.title {
    display: flex;
    flex-direction: column;
    padding: 50px;
}

.title1 {
    margin-left: 5%;
    font-size: 45px;
}

.title2 {
    margin-left: 45%;
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
    height: 250px;
}

.recommend-item .recommend-image {
    height: 50%;
    width: 100%;
    object-fit: cover;
}

.recommend-item .recommend-title {
    font-weight: bold;
    margin: 10px 20px;
}

.recommend-item .recommend-description {
    margin: 10px 30px;
}

.about-text {
    padding: 0 30px;
}

.about-link {
    display: flex;
    justify-content: flex-end;
    padding: 0 20px 20px;
}

.category-item {
    display: flex;
    align-items: center;
    margin: 20px;
}

.category-image {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    overflow: hidden;
}

.category-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.category-text {
    margin: 15px;
    font-weight: bold;
}
</style>