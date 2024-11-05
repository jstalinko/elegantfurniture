<template>
    <Layout :props="props">
        <div class="min-h-screen mx-auto max-w-7xl text-center grid place-items-center">
           <div>
            <span class="mdi mdi-check-circle text-9xl text-success mt-5"></span>
            <h1 class="text-4xl font-bold text-center">Terimakasih atas minat anda kepada produk kami!</h1>
            <p class="text-xl ">
                Anda akan segera di alihkan untuk menghubungi kami lebih lanjut.
            </p>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import { onMounted } from 'vue';
const prop = defineProps({props:Object});


onMounted(()=> {
setTimeout(function(){
    window.location.href = prop.props.checkout_url;
},3000);
});
</script>
