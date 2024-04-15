<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <div id="globalLayout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-container>
                <el-main>
                    <RouterView />
                </el-main>
                <el-footer>
                    <Footer />
                </el-footer>
            </el-container>

        </el-container>
    </div>
</template>

<style scoped>
.el-header {
    z-index: 1000;
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: var(--el-box-shadow-light);
    backdrop-filter: blur(10px);
}

.el-main {
    z-index: 1;
    background-color: whitesmoke;
    padding: 60px 0 0 0;
}

.el-footer {
    background-color: white;
}
</style>