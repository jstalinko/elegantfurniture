<template>
    <Layout :props="props">
        <div
            class="min-h-screen container mx-auto bg-base-200 rounded-lg mt-5 md:mt-10 gap-5 p-2 md:p-5"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <swiper
                        :style="{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }"
                        :loop="true"
                        :spaceBetween="10"
                        :navigation="true"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules"
                        class="mySwiper2"
                    >
                        <swiper-slide
                            ><img
                                :src="imageUrl(props.product.main_image)"
                                class="object-cover w-full rounded-lg"
                                :alt="'Gambar Produk ' + props.product.name"
                                loading="lazy" /></swiper-slide
                        ><swiper-slide
                            v-for="(previewImage, index) in 
                                props.product.preview_images
                            "
                            :key="index"
                            ><img
                                :src="imageUrl(previewImage)"
                                :alt="
                                    'Gambar Produk ' +
                                    props.product.name +
                                    ' ' +
                                    index
                                "
                                loading="lazy"
                                class="object-cover w-full rounded-lg"
                        /></swiper-slide>
                    </swiper>

                    <swiper
                        @swiper="setThumbsSwiper"
                        :loop="true"
                        :spaceBetween="1"
                        :slidesPerView="8"
                        :freeMode="true"
                        :watchSlidesProgress="true"
                        :modules="modules"
                        class="mySwiper mt-1 md:mt-2 cursor-pointer"
                    >
                        <swiper-slide class="hover:sepia"
                            ><img
                                :src="imageUrl(props.product.main_image)"
                                :alt="'Thumbs image ' + props.product.name"
                                class="w-24"
                                loading="lazy" /></swiper-slide
                        ><swiper-slide
                            v-for="(thumImage, index) in 
                                props.product.preview_images
                            "
                            :key="index"
                            class="hover:sepia"
                            ><img
                                :src="imageUrl(thumImage)"
                                :alt="'Thum Image ' + props.product.name"
                                loading="lazy"
                                class="w-24"
                        /></swiper-slide>
                    </swiper>
                </div>
                <div class="p-5">
                    <h1 class="text-2xl md:text-5xl">
                        {{ props.product.name }}
                    </h1>
                    <div class="flex justify-start gap-4 mt-3">
                        <Link :href="'/category/'+props.product.category.slug"  class="hover:underline">
                            <i class="mdi mdi-tag-outline"></i>
                            {{ props.product.category.name }}
                        </Link>
                        <span
                            ><i class="mdi mdi-calendar"></i>
                            {{
                                new Date(
                                    props.product.created_at
                                ).toLocaleDateString("id")
                            }}</span
                        >
                        <span
                            ><i class="mdi mdi-eye"></i>
                            {{ props.product.views }}x</span
                        >
                    </div>
                    <div class="no-flex">
                        <div
                            class="min-h-40 md:min-h-[400px] text-lg md:text-xl prose md:prose-lg mt-3">
                            <RenderMarkdown :source="props.product.description"/>
                        </div>

                        <span class="mt-10">
                            <i class="mdi mdi-tag"></i>
                            <span
                                class="badge badge-primary text-xs m-1"
                                v-for="(tag, itag) in 
                                    props.product.tags
                                "
                                :key="itag"
                                >
                                <Link :href="'/product/tag/'+tag">
                                {{ tag }}
                                </Link>
                                </span
                            >
                        </span>
                        <div class="mt-3">
                            <a
                            :href="'/wa-checkout/'+props.product.id" 
                            class="btn btn-primary w-full rounded-full">
                                <i class="mdi mdi-whatsapp"></i> Pesan Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="similiar" class="mt-5">
                <Product :products="props.similiars" :title="'Produk yang mungkin anda cari'" />
            </section>
        </div>
    </Layout>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Layout from "../Layout.vue";
import { ref,defineAsyncComponent } from "vue";
import { Link } from "@inertiajs/vue3";
import { imageUrl, wabutton } from "../../utils/helpers";
import Product from "../Section/Product.vue";
const RenderMarkdown = defineAsyncComponent(() => import('../Section/RenderMarkdown.vue'));


const prop = defineProps({ props: Object });

const thumbsSwiper = ref(null);
const modules = [FreeMode, Navigation, Thumbs];
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
</script>
