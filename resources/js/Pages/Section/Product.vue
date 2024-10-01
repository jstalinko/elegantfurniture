<template>
  <section id="products">
      <div class="min-h-screen container max-w-7xl mx-auto mt-10 p-2">
          <h1 class="mb-3 mt-3 font-bold text-xl md:text-3xl">
              {{ title ?? "Furniture Berkualitas ditangan profesional." }}
          </h1>

          <section
              id="category"
              class="max-w-7xl  p-3 mx-auto mt-2 mb-2"
              v-if="categories != undefined"
          >
              <div role="tablist" class="tabs tabs-boxed  overflow-auto">
                  <a
                      role="tab"
                      :class="catActive == 'all' ? 'tab tab-active  text-xs md:text-md' : 'tab text-xs md:text-md'"
                      @click="catActive = 'all'"
                  >
                      Semua
                  </a>
                  <a
                      role="tab"
                      v-for="(tab, index) in categories"
                      :key="index"
                      :class="catActive == tab.id ? 'tab tab-active  text-xs md:text-md' : 'tab text-xs md:text-md'"
                      @click="catActive = tab.id"
                  >
                      {{ tab.name }}
                  </a>
              </div>
          </section>

          <section id="sort">
              <div class="flex justify-between mb-3">
                  <div>
                      <details class="dropdown">
                          <summary class="btn m-1">
                              <i class="mdi mdi-filter"></i> Filter
                          </summary>
                          <ul
                              class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                          >
                              <li><a role="button" @click="filter = 'termahal'"> Termahal</a></li>
                              <li><a role="button" @click="filter = 'termurah'"> Termurah</a></li>
                              <li><a role="button" @click="filter = 'populer'"> Terpopuler</a></li>
                              
                          </ul>
                      </details>
                  </div>
                  <div>
                      <div class="border-2 border-gray-400 p-2 rounded-full cursor-pointer" @click="filter=null" v-if="filter!=null">Filter : {{ filter }} <i class="mdi mdi-close" ></i></div>
                  </div>
              </div>
          </section>

          <!-- Products Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              <div
                  class="card bg-base-200 w-full hover:shadow-xl mb-3"
                  v-for="(item, index) in visibleProducts"
                  :key="index"
              >
                  <Link :href="'/product/' + item.slug">
                      <figure>
                          <img
                              :src="imageUrl(item.main_image)"
                              :alt="'Beli produk furniture ' + item.name"
                              loading="lazy"
                              class="rounded-lg object-cover"
                          />
                      </figure>
                  </Link>
                  <div class="card-body">
                      <Link :href="'/product/' + item.slug">
                          <h2
                              class="card-title text-sm md:text-xl hover:underline hover:cursor-pointer"
                          >
                              {{ item.name }}
                          </h2>
                      </Link>
                      <b class="font-bold text-xs">
                          {{ formatCurrency(item.price) }}
                      </b>
                      <p class="text-xs md:text-md">
                          If a dog chews shoes whose shoes does he choose?
                      </p>

                      <div class="card-actions justify-end">
                          <Link
                            class="badge badge-outline text-xs"
                              v-for="(tag, itag) in item.tags"
                              :key="itag"
                          :href="'/product/tag/'+tag"

                          >
                              #{{ tag }}
                      </Link>
                          
                          <a
                            :href="'/wa-checkout/'+item.id"
                            target="_blank"
                              class="btn btn-secondary btn-sm w-full rounded-full mt-2"
                              data-btn="click"
                          >
                              <i class="mdi mdi-whatsapp"></i> Pesan
                        </a>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Show More Button -->
          <div
              v-if="filteredProducts.length > maxProducts"
              class="flex justify-center mt-6"
          >
              <button
                  @click="loadMore"
                  class="btn btn-primary btn-sm md:btn-md rounded-full"
                  v-if="visibleProducts.length < filteredProducts.length"
              >
                  Tampilkan Lainnya
              </button>
          </div>
      </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Link } from "@inertiajs/vue3";
import { formatCurrency, imageUrl, wabutton } from "../../utils/helpers";

const prop = defineProps({
  products: Array,
  title: String,
  categories: Object,
});

const catActive = ref("all");
const filter = ref(null);
const maxProducts = ref(8);

// Computed property to filter and sort products
const filteredProducts = computed(() => {
  let filtered = [];

  // Filter products by category
  if (catActive.value === "all") {
      filtered = prop.products;
  } else {
      filtered = prop.products.filter(product => product.category_id === catActive.value);
  }

  // Sort products by the selected filter
  switch (filter.value) {
      case "termahal":
          return filtered.sort((a, b) => b.price - a.price);
      case "termurah":
          return filtered.sort((a, b) => a.price - b.price);
      case "populer":
      default:
          return filtered.sort((a, b) => b.views - a.views);
  }
});

// Computed property to get the visible products
const visibleProducts = computed(() => {
  return filteredProducts.value.slice(0, maxProducts.value);
});

// Load more products when the "Tampilkan Lainnya" button is clicked
const loadMore = () => {
  maxProducts.value += 8;
};
</script>
