<script setup>
import noteIndex from '@/notes/index.json'
import router from "@/router/router.js";
</script>

<template>
    <div class="note-home-container">
        <div class="note-home-title">{{ $t('note.view.homeTitle') }}</div>
        <div class="note-category-list-container">
            <a v-for="category in noteIndex.categories" @click="router.push('/note/category/' + category.id)" class="block note-category-item">
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
.note-home-container {
    padding: 50px 15%;
}

.note-home-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
}

.note-category-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.note-category-item {
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