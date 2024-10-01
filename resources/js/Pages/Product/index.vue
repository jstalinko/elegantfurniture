<template>
    <Layout :props="props">
       <Product :products="props.products" :title="props.globals.title"/>
    </Layout>
</template>
<script setup>
import Layout from "../Layout.vue";
import Product from "../Section/Product.vue";
defineProps({props:Object});
</script>
