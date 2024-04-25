<script setup>
import noteIndex from '@/notes/index.json';
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import router from "@/router/router.js";

const route = useRoute();

const categoryId = ref(0);
const categoryName = ref('');
const items = ref([]);

const searchItems = () => {
    for (let i = 0; i < noteIndex.items.length; i++) {
        if (noteIndex.items[i].category === Number(categoryId.value)) {
            items.value.push(noteIndex.items[i]);
        }
    }
}

const getName = () => {
    for (let i = 0; i < noteIndex.categories.length; i++) {
        if (noteIndex.categories[i].id === Number(categoryId.value)) {
            categoryName.value = noteIndex.categories[i].name;
        }
    }
}

onMounted(() => {
    categoryId.value = route.params.id;
    searchItems();
    getName();
});
</script>

<template>
    <div class="note-category-container">
        <div class="note-category-title">
            {{ $t('note.view.categoryTitleFront') + $t('note.category.' + categoryId) + $t('note.view.categoryTitleEnd') }}
        </div>
        <div class="note-item-container">
            <a v-for="item in items" class="block note-item" @click="router.push('/note/item/' + item.id)">
                <img class="note-image" :alt="item.title" :src="item.coverPath">
                <div class="note-title">{{ item.title }}</div>
                <div class="note-description">{{ item.description }}</div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.note-category-container {
    padding: 50px 15%;
}

.note-category-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
}

.note-item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.note-item {
    flex: 1 400px;
    max-width: 600px;
    height: 250px;
}

.note-image {
    width: 100%;
    height: 50%;
    object-fit: cover;
}

.note-title {
    font-weight: bold;
    margin: 10px 20px;
}

.note-description {
    margin: 10px 30px;
}
</style>