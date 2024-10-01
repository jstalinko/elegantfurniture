<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class Testimonial extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Andi Wijaya',
                'content' => 'Pelayanan sangat memuaskan dan ramah. Saya pasti akan kembali!',
                'alamat' => 'Jl. Merdeka No. 10, Jakarta',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Siti Aminah',
                'content' => 'Pengalaman luar biasa, harganya juga sangat terjangkau.',
                'alamat' => 'Jl. Sudirman No. 5, Bandung',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Budi Santoso',
                'content' => 'Pelayanan cepat, tapi kualitas bisa lebih ditingkatkan.',
                'alamat' => 'Jl. Diponegoro No. 7, Surabaya',
                'star' => 4,
                'active' => true,
            ],
            [
                'name' => 'Rina Susanti',
                'content' => 'Sangat puas dengan hasilnya, tidak ada kendala sama sekali.',
                'alamat' => 'Jl. Gatot Subroto No. 12, Medan',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Dewi Anggraeni',
                'content' => 'Harga terjangkau, pelayanan baik. Saya akan merekomendasikan ke teman-teman.',
                'alamat' => 'Jl. Imam Bonjol No. 15, Yogyakarta',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Ahmad Fauzi',
                'content' => 'Respon cepat, namun pelayanan bisa lebih ramah.',
                'alamat' => 'Jl. Ahmad Yani No. 20, Semarang',
                'star' => 3,
                'active' => true,
            ],
            [
                'name' => 'Lestari Dewi',
                'content' => 'Proses pengerjaan sangat cepat dan hasil memuaskan.',
                'alamat' => 'Jl. Malioboro No. 8, Yogyakarta',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Wahyu Pratama',
                'content' => 'Pelayanan baik, namun harga sedikit mahal.',
                'alamat' => 'Jl. Brawijaya No. 3, Bali',
                'star' => 4,
                'active' => true,
            ],
            [
                'name' => 'Fajar Hidayat',
                'content' => 'Sangat memuaskan! Kualitas pelayanan terbaik.',
                'alamat' => 'Jl. Kenari No. 11, Makassar',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Sri Wulandari',
                'content' => 'Pengalaman yang menyenangkan, akan kembali lagi.',
                'alamat' => 'Jl. Pemuda No. 9, Palembang',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Agus Setiawan',
                'content' => 'Pelayanan profesional dan cepat, sangat direkomendasikan.',
                'alamat' => 'Jl. Pahlawan No. 13, Jakarta',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Indah Permata',
                'content' => 'Tempat yang bagus, staf sangat membantu dan ramah.',
                'alamat' => 'Jl. Sisingamangaraja No. 17, Medan',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Yudi Kurniawan',
                'content' => 'Hasil kerja bagus, namun butuh peningkatan di bidang komunikasi.',
                'alamat' => 'Jl. Sultan Agung No. 14, Malang',
                'star' => 4,
                'active' => true,
            ],
            [
                'name' => 'Anita Sari',
                'content' => 'Cepat, efektif, dan efisien. Sangat memuaskan!',
                'alamat' => 'Jl. Pattimura No. 21, Balikpapan',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Hendra Gunawan',
                'content' => 'Pelayanan baik, tapi ada sedikit keterlambatan.',
                'alamat' => 'Jl. Pramuka No. 6, Palangkaraya',
                'star' => 3,
                'active' => true,
            ],
            [
                'name' => 'Desi Ratnasari',
                'content' => 'Luar biasa! Saya sangat puas dengan pelayanan yang diberikan.',
                'alamat' => 'Jl. Pemuda No. 18, Surabaya',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Bayu Firmansyah',
                'content' => 'Pelayanan ramah, hasilnya sangat baik dan tepat waktu.',
                'alamat' => 'Jl. Pangeran Diponegoro No. 25, Bandung',
                'star' => 5,
                'active' => true,
            ],
            [
                'name' => 'Ratna Kumalasari',
                'content' => 'Hasil kerja baik, namun sedikit overpriced menurut saya.',
                'alamat' => 'Jl. Hang Tuah No. 2, Batam',
                'star' => 4,
                'active' => true,
            ],
            [
                'name' => 'Bambang Suharto',
                'content' => 'Pengalaman yang baik, pelayanan cepat dan efisien.',
                'alamat' => 'Jl. Dipati Ukur No. 27, Bandung',
                'star' => 4,
                'active' => true,
            ],
            [
                'name' => 'Yulia Hartati',
                'content' => 'Sangat memuaskan, staf ramah dan profesional.',
                'alamat' => 'Jl. Adisucipto No. 9, Bali',
                'star' => 5,
                'active' => true,
            ],
        ];

        // Insert all data into the database
        foreach ($data as $testimonial) {
            \App\Models\Testimonial::create($testimonial);
        }
    }
}
