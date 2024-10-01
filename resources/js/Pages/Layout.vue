<template>
<div>
    <Navbar :props="props"/>
    <HeadInfo :title="props.globals.title" :settings="props.globals.setting" :preloadImage="props.globals.preloadImages"/>
        <div>
            
            <slot>
                
            </slot>
        </div>
    <Footer :props="props"/>
</div>
</template>

<script setup>
import Navbar from "./Section/Navbar.vue";
import Footer from "./Section/Footer.vue";
import HeadInfo from "./Section/HeadInfo.vue";
const prop = defineProps({props:Object});
</script>