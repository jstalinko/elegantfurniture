<template>
    <Layout :props="props">
        <div
            class="container max-w-7xl mx-auto min-h-screen bg-base-200 rounded-lg p-8"
        >
            <h2 class="text-2xl font-bold text-center mb-6">Hubungi Kami</h2>
            <div class="alert alert-success" v-if="responseSuccess">
                Terimakasih telah menghubungi kami, kami akan segera merespon
                anda.
            </div>
            <div class="alert alert-error" v-if="responseSuccess == false">
                Mohon maaf, saat ini sedang ada gangguan. Cobalah beberapa saat
                lagi
            </div>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label for="name" class="label">
                        <span class="label-text">Nama Lengkap</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        :class="{
                            'input input-bordered w-full border-red-500':
                                errors.name,
                            'input input-bordered w-full': !errors.name,
                        }"
                    />
                    <p v-if="errors.name" class="text-red-500 text-sm">
                        Nama lengkap dibutuhkan.
                    </p>
                </div>
                <div>
                    <label for="whatsapp" class="label">
                        <span class="label-text">No. Whatsapp</span>
                    </label>
                    <input
                        type="tel"
                        id="whatsapp"
                        v-model="form.whatsapp"
                        :class="{
                            'input input-bordered w-full border-red-500':
                                errors.whatsapp,
                            'input input-bordered w-full': !errors.whatsapp,
                        }"
                    />
                    <p v-if="errors.whatsapp" class="text-red-500 text-sm">
                        Nomor WhatsApp dibutuhkan.
                    </p>
                </div>
                <div>
                    <label for="address" class="label">
                        <span class="label-text">Alamat</span>
                    </label>
                    <input
                        type="text"
                        id="address"
                        v-model="form.address"
                        :class="{
                            'input input-bordered w-full border-red-500':
                                errors.address,
                            'input input-bordered w-full': !errors.address,
                        }"
                    />
                    <p v-if="errors.address" class="text-red-500 text-sm">
                        Alamat dibutuhkan.
                    </p>
                </div>
                <div>
                    <label for="message" class="label">
                        <span class="label-text">Pesan</span>
                    </label>
                    <textarea
                        id="message"
                        v-model="form.message"
                        :class="{
                            'textarea textarea-bordered w-full border-red-500':
                                errors.message,
                            'textarea textarea-bordered w-full':
                                !errors.message,
                        }"
                        rows="4"
                    >
                    </textarea>
                    <p v-if="errors.message" class="text-red-500 text-sm">
                        Pesan dibutuhkan.
                    </p>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="btn btn-primary">Kirim</button>
                </div>
            </form>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "./Layout.vue";
import { ref } from "vue";

const prop = defineProps({ props: Object });

const form = ref({
    name: "",
    whatsapp: "",
    address: "",
    message: "",
});

const errors = ref({
    name: false,
    whatsapp: false,
    address: false,
    message: false,
});
const responseSuccess = ref(null);

const handleSubmit = async () => {
    // Reset error flags
    errors.value.name = !form.value.name;
    errors.value.whatsapp = !form.value.whatsapp;
    errors.value.address = !form.value.address;
    errors.value.message = !form.value.message;

    // Check if all fields are filled
    if (
        !form.value.name ||
        !form.value.whatsapp ||
        !form.value.address ||
        !form.value.message
    ) {
        alert("Isi semua data!");
        return;
    }
    const csrfToken = document
        .querySelector('meta[name="csrf_token"]')
        .getAttribute("content");

    try {
        const resp = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify(form.value),
        }).then((res) => res.json());

        if (resp.success) {
            responseSuccess.value = true;
        } else {
            responseSuccess.value = false;
        }
    } catch (e) {
        responseSuccess.value = false;
    }
};
</script>

<style scoped>
.container {
    padding: 20px;
}
</style>
