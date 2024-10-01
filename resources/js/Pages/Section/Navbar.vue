<template>
    <div class="container max-w-7xl mx-auto sticky top-0 z-50">
        <div class="navbar bg-base-200 backdrop-blur-lg bg-opacity-80 rounded-full">
            <div class="flex-1">
                <Link class="btn btn-ghost rounded-full text-xl playwrite-de-grund" href="/">{{ props.globals.setting.site_name }}</Link>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control relative">
                    <input 
                        type="text" 
                        placeholder="Cari disini ..." 
                        class="input input-bordered w-32 md:w-[400px] rounded-full bg-transparent" 
                        v-model="searchQuery" 
                        @input="filterProducts" 
                        @focus="showSuggestions = true" 
                        @blur="setTimeout(() => showSuggestions = false, 100)" 
                    />
                    <ul v-if="showSuggestions && filteredProducts.length > 0" class="absolute z-50 mt-12 bg-base-200  rounded-md w-full max-h-60 overflow-y-auto">
                        <li 
                            v-for="(product, index) in filteredProducts" 
                            :key="product.id" 
                            class="px-4 py-2 hover:bg-base-100 cursor-pointer" 
                            @mousedown="selectProduct(product)"
                        >
                            <div class="flex justify-between">
                                <img :src="imageUrl(product.main_image)" class="w-12 object-cover hidden md:block">
                                <div class="text-xs md:text-lg">{{product.name}}</div>
                            </div> <!-- Adjust this based on the actual property of the product -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import { imageUrl } from '../../utils/helpers';

const prop = defineProps({props: Object});

const searchQuery = ref('');
const showSuggestions = ref(false);

const filteredProducts = computed(() => {
    if (!searchQuery.value) return [];
    const query = searchQuery.value.toLowerCase();
    return prop.props.globals.productForSearch.filter(product => 
        product.name.toLowerCase().includes(query) // Adjust the property to match your product's name field
    );
});

const filterProducts = () => {
    showSuggestions.value = filteredProducts.value.length > 0;
};

const selectProduct = (product) => {
    searchQuery.value = product.name; // Set the input to the selected product name
    showSuggestions.value = false; // Hide suggestions after selection
    router.visit('/product/'+product.slug,{method:'GET',preserveScroll:true});
};
</script>

<style scoped>
/* Add any additional styling you need here */
</style>
