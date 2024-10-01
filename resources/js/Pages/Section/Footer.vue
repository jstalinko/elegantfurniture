<template>
    <section id="footer" class="mt-10">
        <footer class="footer bg-base-200 text-base-content p-10">
            <aside>
               <img :src="imageUrl(props.globals.setting.logo)" :alt="'Logo ' + props.globals.setting.site_name" loading="lazy" />
                <p>
                    {{ props.globals.setting.site_name }}
                    <br />
                    {{ props.globals.setting.site_description }}
                </p>
            </aside>

            <nav>
                <h6 class="footer-title">LINKS</h6>
                <Link class="link link-hover" href="/p/about">Tentang Kami</Link>
                <Link class="link link-hover" href="/p/contact">Hubungi Kami</Link>
                <a class="link link-hover" href="/sitemap.xml" target="_blank">Sitemap</a>
            </nav>
            <nav>
                <h6 class="footer-title">Produk Terlaris</h6>
                <Link class="link link-hover" v-for="(product,index) in props.globals.productForSearch.slice(0,5)" :key="index" :href="'/product/'+product.slug">{{product.name}}</Link>
            </nav>
        </footer>
        <footer class="footer bg-neutral text-neutral-content items-center p-4">
            <aside class="grid-flow-col items-center">
                <img :src="imageUrl(props.globals.setting.logo)" :alt="'Logo ' + props.globals.setting.site_name" loading="lazy" />
                <p>
                    Copyright © {{ new Date().getFullYear() }} {{ props.globals.setting.site_name }} | PROVIDED BY : PT JEPARA SOLUSI TEKNOLOGI
                </p>
            </aside>
            <nav class="grid-flow-col gap-4 justify-self-center">
    <a v-if="props.globals.setting.sosmed.facebook_url != null" :href="props.globals.setting.sosmed.facebook_url" target="_blank" role="link" aria-label="Hubungi kami via facebook dengan click link ini">
      <span class="mdi mdi-facebook text-xl md:text-3xl"></span>
    </a>
    <a v-if="props.globals.setting.sosmed.instagram_url != null" :href="props.globals.setting.sosmed.instagram_url" target="_blank" role="link" aria-label="Hubungi kami via instagram dengan click link ini">
      <span class="mdi mdi-instagram text-xl md:text-3xl"></span>
    </a>
    <a v-if="props.globals.setting.sosmed.whatsapp_url != null" :href="props.globals.setting.sosmed.whatsapp_url" target="_blank" aria-label="Hubungi kami via whatsapp dengan click link ini">
      <span class="mdi mdi-whatsapp text-xl md:text-3xl"></span>
    </a>
  </nav>
        </footer>
    </section>
</template>

<script setup>
import { imageUrl } from '../../utils/helpers';
import { Link } from '@inertiajs/vue3';

const prop = defineProps({props:Object});
</script>