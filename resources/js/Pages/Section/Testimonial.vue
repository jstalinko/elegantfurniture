<template>
    <section id="testimonials">
      <div class="min-h-screen container max-w-7xl mx-auto mt-10">
        <h1 class="mb-3 mt-3 font-bold text-xl md:text-3xl">
          Terpercaya lebih dari 1000+ Klien kami.
        </h1>
  
        <!-- Testimonial Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div
            v-for="(testimonial, index) in visibleTestimonials"
            :key="index"
            class="bg-base-300 shadow-lg rounded-lg p-6 flex flex-col justify-between"
          >
            <div class="mb-4">
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold">{{ testimonial.name }}</h2>
                <div class="flex items-center">
                  <i v-for="star in 5" :key="star" :class="starClass(testimonial.star, star)"></i>
                </div>
              </div>
              <p class="text-gray-500 text-xs">{{ testimonial.alamat }}</p>
            </div>
            <p class="text-gray-600 text-sm">"{{ testimonial.content }}"</p>
          </div>
        </div>
  
        <!-- Show More Button -->
        <div v-if="testimonials.length > maxTestimonials" class="flex justify-center mt-6">
          <button
            @click="loadMore"
            class="btn btn-primary btn-sm md:btn-md rounded-full"
            v-if="visibleTestimonials.length < testimonials.length"
          >
            Tampilkan Lainnya
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const prop = defineProps({ testimonials: Array });
  const maxTestimonials = ref(9); // Initial number of testimonials shown
  const visibleTestimonials = ref(prop.testimonials.slice(0, maxTestimonials.value));
  
  // Function to render filled/empty stars
  const starClass = (rating, star) => {
    return rating >= star ? "mdi mdi-star text-yellow-500" : "mdi mdi-star-outline text-yellow-500";
  };
  
  // Load more testimonials when button is clicked
  const loadMore = () => {
    maxTestimonials.value += 9;
    visibleTestimonials.value = prop.testimonials.slice(0, maxTestimonials.value);
  };
  </script>
  
  <style scoped>
  .mdi {
    font-size: 1.25rem; /* Adjust star size if needed */
  }
  </style>
  