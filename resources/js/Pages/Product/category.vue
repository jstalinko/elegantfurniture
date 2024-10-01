<template>
    <Layout :props="props"> </Layout>
</template>
<script setup>
import Layout from "../Layout.vue";
defineProps({props:Object});
</script>
