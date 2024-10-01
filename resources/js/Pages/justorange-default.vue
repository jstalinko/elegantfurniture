<template>
    <Layout :props="props">
        <section id="hero-carousel py-20">
            <swiper
                :modules="SwiperModules"
                :slides-per-view="1"
                :centered-slides="true"
                :space-between="30"
                :grab-cursor="true"
                :autoplay="{ delay: 3000 }"
                :loop="true"
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                :navigation="true"
                class="mySwiper min-h-full md:min-h-[88vh] mt-5 md:mt-10"
            >
                <swiper-slide v-for="(item, index) in headlines" :key="index">
                 
                    <div class="hero">
                        <div
                            class="hero-content flex-col lg:flex-row min-w-full space-x-10"
                        >
                            <img
                                :src="imageUrl(item.main_image)"
                                class="w-full md:max-w-[600px] rounded-lg "
                                loading="lazy"
                            />
                            <div>
                                <Link :href="'/product/'+item.slug">
                                <h1 class="text-2xl md:text-5xl font-bold hover:underline">
                                    {{ item.name }}
                                </h1>
                            </Link>
                                <p class="py-6">
                                    {{ stripTags(item.description).substr(0,100) }}...
                                </p>
                                <a :href="'/wa-checkout/'+item.id" target="_blank" data-btn="click"  class="btn btn-primary rounded-full">
                                    <i class="mdi mdi-whatsapp"></i> Pesan
                                    Sekarang!
                                </a>
                            </div>
                        </div>
                    </div>
            
                </swiper-slide>
            </swiper>
        </section>
       
        <Product :products="items" :categories="props.categories"  />
        <Testimonial :testimonials="props.testimonials" />
    </Layout>
</template>

<script setup>
import Layout from "./Layout.vue";
import Product from "./Section/Product.vue";
import Testimonial from "./Section/Testimonial.vue";
import { ref, computed, onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, Navigation, Scrollbar, A11y } from "swiper/modules";
import { imageUrl, stripTags } from "../utils/helpers";

const prop = defineProps({ props: Object });
const items = ref(prop.props.products);
const headlines = computed(() => items.value.filter((v) => v.headline == true));

const SwiperModules = [Autoplay, Navigation, Scrollbar, A11y];

const detectLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const resp = fetch("/api/update", {
                    method: "POST",
                    body: JSON.stringify({
                        lat: latitude,
                        lon: longitude,
                    }),
                }).then((res) => res.json());
                console.log(resp);
            },
            (error) => {
                console.error("Error detecting location: ", error);
            }
        );
    }
};
onMounted(() => {
    detectLocation();
});
</script>
