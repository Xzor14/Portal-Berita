// Data berita terkini tahun 2025
const newsData2025 = {
    breakingNews: "Indonesia Resmi Luncurkan Satelit Nusantara-5, Tingkatkan Konektivitas 5G Nasional",
    
    categories: [
        { id: "nasional", name: "Nasional", icon: "fas fa-flag", color: "#3b82f6", count: 24 },
        { id: "internasional", name: "Internasional", icon: "fas fa-globe", color: "#10b981", count: 18 },
        { id: "ekonomi", name: "Ekonomi & Bisnis", icon: "fas fa-chart-line", color: "#f59e0b", count: 32 },
        { id: "teknologi", name: "Teknologi", icon: "fas fa-microchip", color: "#8b5cf6", count: 28 },
        { id: "olahraga", name: "Olahraga", icon: "fas fa-futbol", color: "#ef4444", count: 15 },
        { id: "hiburan", name: "Hiburan", icon: "fas fa-film", color: "#ec4899", count: 12 },
        { id: "kesehatan", name: "Kesehatan", icon: "fas fa-heartbeat", color: "#06b6d4", count: 9 }
    ],
    
    popularNews: [
        { id: 1, title: "Harga BBM Turun Lagi, Ini Daftar Terbaru", category: "ekonomi", time: "2 jam lalu", rank: 1 },
        { id: 2, title: "Gempa 5.8 SR Guncang Jawa Barat, Tidak Berpotensi Tsunami", category: "nasional", time: "4 jam lalu", rank: 2 },
        { id: 3, title: "Tes Kendaraan Listrik Nasional Mulai Diproduksi Massal", category: "teknologi", time: "6 jam lalu", rank: 3 },
        { id: 4, title: "Timnas U-23 Kalahkan Vietnam 3-1 di Kualifikasi Piala Asia", category: "olahraga", time: "8 jam lalu", rank: 4 }
    ],
    
    articles: [
        {
            id: 1,
            title: "Indonesia Pimpin KTT ASEAN 2025, Fokus pada Ekonomi Digital dan Keberlanjutan",
            excerpt: "Presiden Joko Widodo membuka KTT ASEAN ke-42 dengan menekankan pentingnya kolaborasi regional dalam menghadapi tantangan ekonomi digital dan transisi energi hijau.",
            content: `<p><strong>JAKARTA</strong> - Indonesia kembali memegang tampuk kepemimpinan ASEAN pada tahun 2025 dengan menggelar Konferensi Tingkat Tinggi (KTT) ASEAN ke-42 di Nusa Dua, Bali. Presiden Joko Widodo dalam pidato pembukaannya menekankan dua isu strategis yang menjadi fokus utama: percepatan ekonomi digital dan transisi energi hijau berkelanjutan.</p>
                     <p>"Di tengah ketegangan geopolitik global dan ancaman resesi, ASEAN harus solid dan inovatif. Ekonomi digital bukan lagi pilihan, tapi keharusan untuk tetap kompetitif di panggung dunia," tegas Presiden di hadapan para pemimpin negara anggota ASEAN.</p>
                     <p>KTT kali ini mengusung tema "ASEAN Matters: Epicentrum of Digital Growth and Green Economy". Beberapa poin penting yang disepakati antara lain:</p>
                     <ul>
                         <li>Pembentukan ASEAN Digital Payment System yang terintegrasi</li>
                         <li>Investasi bersama senilai $5 miliar untuk pengembangan AI dan blockchain</li>
                         <li>Komitmen mengurangi emisi karbon 45% pada 2030</li>
                         <li>Kerangka kerja bersama untuk pengelolaan sampah elektronik</li>
                     </ul>
                     <p>Menteri Luar Negeri Retno Marsudi menambahkan bahwa KTT ini juga membahas isu keamanan siber dan perlindungan data pribadi di era digital. "Kami menyusun panduan etika AI pertama di Asia Tenggara," ujarnya.</p>`,
            category: "internasional",
            author: "Aditya Pratama",
            date: "15 Januari 2025",
            readTime: "6 menit",
            image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            imageCaption: "Presiden Joko Widodo memimpin KTT ASEAN 2025 di Bali",
            tags: ["ASEAN", "ekonomi digital", "energi hijau", "diplomasi"],
            views: 12543,
            likes: 892,
            shares: 342,
            trending: true,
            featured: true,
            video: false
        },
        {
            id: 2,
            title: "Bank Indonesia Pertahankan Suku Bunga Acuan di 4,75%",
            excerpt: "BI mempertahankan BI 7-Day Reverse Repo Rate di level 4,75% untuk kuartal pertama 2025, sejalan dengan proyeksi inflasi yang terkendali.",
            content: `<p><strong>JAKARTA</strong> - Bank Indonesia (BI) memutuskan untuk mempertahankan suku bunga acuan (BI 7-Day Reverse Repo Rate) di level 4,75% dalam rapat Dewan Gubernur yang digelar hari ini. Keputusan ini sesuai dengan ekspektasi pasar dan merupakan bulan ketiga secara berturut-turut BI menjaga suku bunga tetap.</p>
                     <p>"Keputusan ini diambil dengan mempertimbangkan inflasi yang tetap terkendali dalam koridor target 2,5% ± 1% dan stabilitas nilai tukar rupiah yang terjaga," jelas Gubernur BI Perry Warjiyo dalam konferensi pers virtual.</p>
                     <p>Data terbaru menunjukkan inflasi bulan Desember 2024 berada di level 2,8%, turun dari 3,1% pada bulan sebelumnya. Sementara nilai tukar rupiah stabil di kisaran Rp15.200 per dolar AS dengan cadangan devisa mencapai $145 miliar.</p>
                     <p>Analis ekonomi Maybank Indonesia, Juniman, menilai keputusan BI tepat dengan kondisi saat ini. "Dengan proyeksi pertumbuhan ekonomi 2025 di kisaran 5,2-5,5%, BI punya ruang untuk menjaga suku bunga rendah guna mendorong kredit dan investasi," ujarnya.</p>
                     <p>BI juga mengumumkan beberapa kebijakan pendukung termasuk relaksasi rasio pinjaman terhadap nilai (LTV) untuk properti dan kendaraan bermotor, serta insentif bagi bank yang meningkatkan kredit kepada sektor UMKM.</p>`,
            category: "ekonomi",
            author: "Maya Sari",
            date: "14 Januari 2025",
            readTime: "5 menit",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            imageCaption: "Gedung Bank Indonesia di Jakarta",
            tags: ["BI", "suku bunga", "inflasi", "ekonomi"],
            views: 8921,
            likes: 543,
            shares: 198,
            trending: true,
            featured: false,
            video: false
        },
        {
            id: 3,
            title: "Startup AI Asal Indonesia Raised $50 Juta dari Investor Global",
            excerpt: "NeuraTech, startup kecerdasan buatan asal Bandung, berhasil mengumpulkan pendanaan Series B senilai $50 juta dari beberapa venture capital ternama.",
            content: `<p><strong>BANDUNG</strong> - NeuraTech, startup pengembang kecerdasan buatan asal Indonesia, mengumumkan telah menyelesaikan pendanaan Series B senilai $50 juta (sekitar Rp750 miliar). Pendanaan ini dipimpin oleh Sequoia Capital dengan partisipasi dari East Ventures, GDP Venture, dan investor strategis dari Jepang.</p>
                     <p>CEO NeuraTech, Andi Wijaya, mengungkapkan dana tersebut akan digunakan untuk ekspansi pasar ke Asia Tenggara dan pengembangan produk AI generatif untuk sektor pendidikan dan kesehatan. "Kami sedang mengembangkan platform AI tutor personal dan sistem diagnosa medis berbasis bahasa natural," paparnya.</p>
                     <p>NeuraTech didirikan tahun 2022 oleh tiga alumni ITB dan saat ini telah memiliki lebih dari 100 karyawan dengan kantor di Bandung, Jakarta, dan Singapura. Produk unggulan mereka, "TutorAI", sudah digunakan oleh lebih dari 500 sekolah dan 50 universitas di Indonesia.</p>
                     <p>Managing Partner Sequoia Capital Southeast Asia, Shailendra Singh, mengatakan investasi ini didasari potensi besar pasar AI di Indonesia. "NeuraTech memiliki tim teknis yang kuat dan pemahaman mendalam tentang kebutuhan pasar lokal. Mereka berpotensi menjadi unicorn berikutnya dari Indonesia," ujarnya.</p>
                     <p>Pendanaan ini merupakan salah yang terbesar untuk startup AI di Asia Tenggara pada kuartal pertama 2025 dan menandai semakin matangnya ekosistem teknologi Indonesia.</p>`,
            category: "teknologi",
            author: "Rizky Aditya",
            date: "13 Januari 2025",
            readTime: "4 menit",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            imageCaption: "Tim NeuraTech sedang melakukan pengembangan AI",
            tags: ["startup", "AI", "pendanaan", "teknologi"],
            views: 7543,
            likes: 432,
            shares: 167,
            trending: true,
            featured: false,
            video: true
        },
        {
            id: 4,
            title: "Pemerintah Luncurkan Program Vaksinasi Influenza Nasional Gratis",
            excerpt: "Kemenkes meluncurkan program vaksinasi influenza gratis untuk lansia dan kelompok rentan sebagai antisipasi musim pancaroba 2025.",
            content: `<p><strong>JAKARTA</strong> - Kementerian Kesehatan meluncurkan Program Vaksinasi Influenza Nasional (VIN) 2025 yang menyediakan vaksin gratis bagi warga berusia di atas 60 tahun, ibu hamil, dan penderita penyakit kronis. Program ini sebagai antisipasi peningkatan kasus influenza selama musim pancaroba.</p>
                     <p>"Berdasarkan data tahun-tahun sebelumnya, kasus influenza biasanya meningkat 40% pada bulan Januari-Maret. Dengan program ini, kami harap dapat mengurangi beban rumah sakit dan melindungi kelompok rentan," jelas Menteri Kesehatan Budi Gunadi Sadikin.</p>
                     <p>Program akan dilaksanakan di 10.000 puskesmas dan posyandu di seluruh Indonesia mulai 20 Januari hingga 28 Februari 2025. Vaksin yang digunakan adalah vaksin quadrivalent yang melindungi dari empat strain virus influenza.</p>
                     <p>Ketua Umum Perhimpunan Alergi Imunologi Indonesia, Prof. Dr. Iris Rengganis, menyambut baik program ini. "Vaksinasi influenza tidak hanya melindungi individu, tapi juga menciptakan herd immunity. Ini penting terutama di tengah ancaman varian baru virus pernapasan," paparnya.</p>
                     <p>Masyarakat dapat mendaftar melalui aplikasi PeduliLindungi atau langsung ke fasilitas kesehatan terdekat dengan menunjukkan KTP. Untuk daerah terpencil, Kemenkes akan menggelar vaksinasi keliling bekerja sama dengan TNI dan Polri.</p>`,
            category: "kesehatan",
            author: "Dr. Sinta Dewi",
            date: "12 Januari 2025",
            readTime: "3 menit",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            imageCaption: "Tenaga kesehatan menyiapkan vaksin influenza",
            tags: ["vaksin", "influenza", "kesehatan", "pemerintah"],
            views: 6321,
            likes: 387,
            shares: 154,
            trending: false,
            featured: false,
            video: false
        },
        {
            id: 5,
            title: "Harga BBM Turun Lagi, Pertamax Kini Rp12.500 per Liter",
            excerpt: "PT Pertamina (Persero) kembali menurunkan harga BBM nonsubsidi efektif mulai hari ini, menyusul tren penurunan harga minyak dunia.",
            content: `<p><strong>JAKARTA</strong> - PT Pertamina (Persero) kembali menyesuaikan harga BBM nonsubsidi dengan penurunan rata-rata Rp500 per liter efektif mulai hari ini, Senin 13 Januari 2025. Penyesuaian ini menyusul tren penurunan harga minyak mentah dunia dalam sepekan terakhir.</p>
                     <p>"Harga Pertamax turun dari Rp13.000 menjadi Rp12.500 per liter, Pertamax Turbo dari Rp14.000 menjadi Rp13.500 per liter, dan Dexlite dari Rp13.800 menjadi Rp13.300 per liter," jelas VP Corporate Communication Pertamina, Fajriyah Usman.</p>
                     <p>Penurunan harga ini merupakan yang ketiga kalinya sejak November 2024, sejalan dengan kebijakan pemerintah untuk menjaga daya beli masyarakat di tengah perlambatan ekonomi global. Harga BBM bersubsidi (Pertalite dan Solar) tetap tidak berubah.</p>
                     <p>Analis energi dari ReforMiner Institute, Komaidi Notonegoro, mengatakan penurunan harga sesuai mekanisme pasar. "Harga minyak dunia saat ini berada di level $72 per barel, turun dari puncak $85 pada Desember lalu. Ini dipengaruhi oleh meningkatnya produksi AS dan permintaan China yang melambat," jelasnya.</p>
                     <p>Pemerintah memperkirakan penurunan harga BBM ini dapat menekan inflasi 0,1-0,2% dan memberikan stimulus bagi sektor transportasi dan logistik. Asosiasi Pengusaha Truk Indonesia (Aptrindo) menyambut positif kebijakan ini yang dapat menurunkan biaya operasional angkutan barang.</p>`,
            category: "ekonomi",
            author: "Budi Santoso",
            date: "13 Januari 2025",
            readTime: "4 menit",
            image: "https://images.unsplash.com/photo-1588690154757-badf4644190f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            imageCaption: "SPBU Pertamina di Jakarta",
            tags: ["BBM", "Pertamina", "harga", "ekonomi"],
            views: 15432,
            likes: 876,
            shares: 432,
            trending: true,
            featured: false,
            video: false
        },
        {
            id: 6,
            title: "Tes Kendaraan Listrik Nasional Siap Diproduksi Massal",
            excerpt: "PT Industri Kendaraan Listrik Indonesia (IKLI) akan mulai produksi massal mobil listrik nasional pada Maret 2025 dengan target 50.000 unit per tahun.",
            content: `<p><strong>BEKASI</strong> - PT Industri Kendaraan Listrik Indonesia (IKLI) mengumumkan kesiapan memulai produksi massal kendaraan listrik nasional "Tesla Indonesia" mulai Maret 2025. Pabrik di KIIC Karawang telah siap beroperasi dengan kapasitas produksi 50.000 unit per tahun.</p>
                     <p>"Kami telah menyelesaikan semua uji coba dan sertifikasi. Produk pertama kami adalah SUV listrik dengan jarak tempuh 400 km sekali pengisian dan harga kompetitif di bawah Rp400 juta," papar Direktur Utama IKLI, Rachmat Kaimuddin.</p>
                     <p>Kendaraan listrik nasional ini menggunakan baterai lithium yang diproduksi oleh anak perusahaan, PT Baterai Listrik Indonesia, dengan komponen lokal mencapai 45%. Pemerintah memberikan insentif pajak dan subsidi infrastruktur pengisian daya.</p>
                     <p>Menteri Perindustrian Agus Gumiwang Kartasasmita mengatakan ini adalah tonggak sejarah industri otomotif Indonesia. "Kami tidak hanya mengejar ketertinggalan, tapi ingin memimpin pasar kendaraan listrik di ASEAN. Target kami, 20% penjualan kendaraan baru di 2030 adalah listrik," tegasnya.</p>
                     <p>IKLI telah menerima 15.000 pemesanan awal dari pemerintah, perusahaan ride-hailing, dan konsumen individu. Perusahaan juga sedang merancang varian taksi dan kendaraan komersial untuk mendukung program transportasi berkelanjutan.</p>`,
            category: "teknologi",
            author: "Dian Kusuma",
            date: "11 Januari 2025",
            readTime: "5 menit",
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            imageCaption: "Prototipe kendaraan listrik nasional di pabrik IKLI",
            tags: ["mobil listrik", "IKLI", "teknologi", "industri"],
            views: 9876,
            likes: 654,
            shares: 287,
            trending: true,
            featured: false,
            video: true
        },
        {
            id: 7,
            title: "Timnas U-23 Kalahkan Vietnam 3-1 di Kualifikasi Piala Asia",
            excerpt: "Timnas Indonesia U-23 meraih kemenangan penting 3-1 atas Vietnam dalam laga kualifikasi Piala Asia U-23 2026 di Stadion Utama Gelora Bung Karno.",
            content: `<p><strong>JAKARTA</strong> - Timnas Indonesia U-23 melangkah mulus ke babak berikutnya kualifikasi Piala Asia U-23 2026 setelah mengalahkan Vietnam 3-1 di Stadion Utama Gelora Bung Karno, Minggu (12/1/2025) malam. Kemenangan ini disambut meriah oleh 75.000 penonton yang memadati stadion.</p>
                     <p>Gol kemenangan Indonesia dicetak oleh Marselino Ferdinan (menit 23'), Witan Sulaeman (menit 57'), dan Egy Maulana Vikri (menit 82'). Sementara Vietnam hanya mampu membalas melalui Nguyen Van Tung di menit ke-68.</p>
                     <p>"Saya bangga dengan performa anak-anak. Mereka bermain dengan taktik yang baik dan mental pemenang. Ini adalah kemenangan penting untuk percaya diri tim," ujar pelatih Shin Tae-yong usai pertandingan.</p>
                     <p>Kapten tim, Rizky Ridho, mengaku persiapan intensif selama sebulan di Turki membuahkan hasil. "Kami berlatih keras dan hasilnya terlihat di lapangan. Semoga ini awal yang baik untuk kualifikasi berikutnya," katanya.</p>
                     <p>Dengan kemenangan ini, Indonesia finis di puncak Grup K dengan tujuh poin dari tiga pertandingan. Tim akan menghadapi juara Grup L, kemungkinan Australia atau Korea Selatan, pada babak play-off Maret mendatang.</p>`,
            category: "olahraga",
            author: "Rudi Hartono",
            date: "12 Januari 2025",
            readTime: "3 menit",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            imageCaption: "Pesta gol Marselino Ferdinan untuk Indonesia",
            tags: ["sepakbola", "timnas", "Piala Asia", "olahraga"],
            views: 23456,
            likes: 1543,
            shares: 765,
            trending: true,
            featured: false,
            video: true
        }
    ],
    
    videoNews: [
        {
            id: 1,
            title: "Live Report: Peluncuran Satelit Nusantara-5",
            duration: "8:45",
            views: "124K",
            date: "Hari ini",
            thumbnail: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
        },
        {
            id: 2,
            title: "Wawancara Eksklusif dengan Menkeu Sri Mulyani",
            duration: "12:30",
            views: "89K",
            date: "Kemarin",
            thumbnail: "https://images.unsplash.com/photo-1551135049-8a33b2fb2f5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
        },
        {
            id: 3,
            title: "Dokumenter: Perjuangan Nelayan di Era Perubahan Iklim",
            duration: "22:15",
            views: "56K",
            date: "2 hari lalu",
            thumbnail: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
        }
    ]
};

// Export data untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = newsData2025;
} else {
    window.newsData2025 = newsData2025;
}