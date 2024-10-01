<template>
    <Head>
        <title v-if="title === undefined">
            {{ settings.site_name }} - {{ settings.site_description }}
        </title>
        <title v-if="title !== undefined">
            {{ title }} - {{ settings.site_name }}
        </title>

        <meta name="title" :content="settings.site_name" />
        <meta name="description" :content="settings.site_description" />
        <meta name="keywords" :content="settings.site_keywords" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Indonesia,English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" :content="settings.site_name" />

        <meta property="og:title" :content="settings.site_name" />
        <meta property="og:description" :content="settings.site_description" />
        <meta property="og:image" :content="imageUrl(settings.icon)" />
        <meta property="og:url" :content="settings?.site_url" />

        <meta name="twitter:title" :content="settings.site_name" />
        <meta name="twitter:description" :content="settings.site_description" />
        <meta name="twitter:url" :content="settings?.site_url"/>
        <meta name="twitter:card" content="summary" />

        <!-- preload -->
        <link
            v-if="preloadImage !== undefined"
            v-for="(image, index) in preloadImage"
            :key="index"
            rel="preload"
            :href="imageUrl(image.main_image)"
            as="image"
        />
    </Head>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { imageUrl } from "../../utils/helpers";

const prop = defineProps({
    title: String,
    settings: Object,
    preloadImage: Object,
});

</script>
