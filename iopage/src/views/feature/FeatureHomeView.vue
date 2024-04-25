<script setup>
import featureIndex from "@/features/index.json";
import router from "@/router/router.js";
</script>

<template>
    <div class="feature-home-container">
        <div class="feature-home-title">{{ $t('feature.view.homeTitle') }}</div>
        <div class="feature-category-container">
            <a v-for="category in featureIndex.categories" @click="router.push('/feature/category/' + category.id)" class="block feature-category-item">
                <div class="category-image-box">
                    <img :alt="category.name" :src="category.cover">
                </div>
                <div class="category-name">
                    {{ $t('note.category.' + category.id) }}
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.feature-home-container {
    padding: 50px 15%;
}

.feature-home-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
}

.feature-category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.feature-category-item {
    flex: 1 300px;
    display: flex;
    align-items: center;
    height: 100px;
}

.category-image-box {
    height: 70px;
    width: 70px;
    margin-left: 20px;
    border-radius: 4px;
    overflow: hidden;
}

.category-image-box > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.category-name {
    margin: 20px;
    font-weight: bold;
    font-size: 18px;
}
</style>