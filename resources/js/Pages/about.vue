<template>
    <Layout :props="props">
        <div class="container max-w-7xl mx-auto min-h-screen bg-base-200 rounded-lg">
            <h1 class="text-5xl text-center mt-5 mb-5 p-5">Tentang Kami</h1>
            <div class="prose md:prose-xl p-3 md:p-8  py-2 md:py-5">
                <RenderMarkdown :source="props.globals.setting.about"></RenderMarkdown>
            </div>
        </div>
    </Layout>
</template>
<script setup>
import Layout from './Layout.vue';
import RenderMarkdown from "./Section/RenderMarkdown.vue";
const prop = defineProps({props:Object});
</script>
