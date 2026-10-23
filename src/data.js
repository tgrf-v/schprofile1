export const navLinks = [
  { name: 'BERANDA', href: '/' },
  {
    name: 'PROFIL',
    href: '/profil/sambutan',
    children: [
      { name: 'Sambutan Kepala Sekolah', href: '/profil/sambutan' },
      { name: 'Visi dan Misi', href: '/profil/visi-misi' },
      { name: 'Sejarah Sekolah', href: '/profil/sejarah' },
      { name: 'Guru & Tenaga Pendidik', href: '/profil/guru' },
    ]
  },
  {
    name: 'AKADEMIK',
    href: '/akademik/kurikulum',
    children: [
      { name: 'Kurikulum Pembelajaran', href: '/akademik/kurikulum' },
      { name: 'Ekstrakurikuler', href: '/akademik/ekskul' },
      { name: 'Prestasi Siswa', href: '/akademik/prestasi' },
    ]
  },
  { name: 'FASILITAS', href: '/fasilitas' },
  { name: 'BERITA & AGENDA', href: '/berita' },
  { name: 'GALERI', href: '/galeri' },
  { name: 'KONTAK', href: '/kontak' },
];

export const heroQuickActions = [
  { id: 1, label: 'PROFIL SEKOLAH', icon: 'Building2', href: '/profil/sambutan' },
  { id: 2, label: 'PRESTASI SISWA', icon: 'Award', href: '/akademik#prestasi' },
  { id: 3, label: 'EKSTRAKURIKULER', icon: 'Sparkles', href: '/akademik#ekskul' },
  { id: 4, label: 'FASILITAS', icon: 'Compass', href: '/fasilitas' },
  { id: 5, label: 'INFO PPDB', icon: 'GraduationCap', href: '/ppdb' },
  { id: 6, label: 'HUBUNGI KAMI', icon: 'CalendarDays', href: '/kontak' },
];

export const newsUpdates = [
  {
    id: 1,
    title: 'Dari Almamater, Kembali untuk Almamater: Sumbangan Buku Alumni SMA Nusantara Cendekia, Angkatan 14',
    date: '12 September 2024',
    category: 'Alumni & Prestasi',
    image: '/assets/news1.jpg',
    excerpt: 'Wujud dedikasi dan cinta kepada almamater tercinta melalui pengadaan referensi pustaka ilmiah oleh alumni angkatan 14.'
  },
  {
    id: 2,
    title: 'Mengenal Lebih Dekat Kehidupan Mahad melalui Program Jati Diri Santri',
    date: '05 September 2024',
    category: 'Agenda',
    image: '/assets/news2.jpg',
    excerpt: 'Program pembentukan karakter dan jati diri santri guna membekali jiwa kepemimpinan islami sejak dini di lingkungan sekolah.'
  },
  {
    id: 3,
    title: 'Seleksi Masuk Gelombang 1 Siswa Baru SMA Nusantara Cendekia',
    date: '15 Agustus 2024',
    category: 'Berita',
    image: '/assets/news3.jpg',
    excerpt: 'Penyambutan penuh kehangatan keluarga besar sekolah kepada para santri dan santriwati baru tahun ajaran baru.'
  },
  {
    id: 4,
    title: 'Khutbah Iftitah Pembukaan Tahun Pelajaran 2024 - 2025',
    date: '16 Juli 2024',
    category: 'Pengumuman',
    image: '/assets/news4.jpg',
    excerpt: 'Arahan dan nasihat pembuka tahun ajaran oleh pimpinan sekolah untuk seluruh dewan guru dan civitas akademika.'
  },
  {
    id: 5,
    title: 'Kunjungan Edukatif & Pembekalan Riset Santri ke Laboratorium Kampus Mitra',
    date: '28 Juli 2024',
    category: 'Agenda',
    image: '/assets/lab_komputer.jpg',
    excerpt: 'Penguatan wawasan sains santri melalui observasi laboratorium terapan bersama dosen tamu perguruan tinggi.'
  },
  {
    id: 6,
    title: 'Penerimaan Santri Baru (PPDB) Tahun Ajaran 2025/2026 Resmi Dibuka',
    date: '01 Agustus 2024',
    category: 'Video Profil',
    image: '/assets/gedung_sekolah.jpg',
    excerpt: 'Informasi jalur seleksi, beasiswa prestasi, dan tahapan pendaftaran santri baru terpadu.'
  }
];

export const karyaInspiratif = [
  {
    id: 1,
    title: 'Pesantren & Sekolah, Tempat Lahirnya Peradaban',
    date: '15 Mei 2024',
    author: 'Karya Siswa',
    image: '/assets/karya1.jpg',
    excerpt: 'Catatan refleksi santri mengenai pentingnya memadukan sains modern dengan adab dan akhlak mulia.'
  },
  {
    id: 2,
    title: 'Dari Teriknya Matahari hingga Qiyamullail: Kisah Perjuangan Guru Pembina',
    date: '25 November 2024',
    author: 'Guru Menulis',
    image: '/assets/karya2.jpg',
    excerpt: 'Dedikasi tanpa henti para pendidik dalam membimbing dan mendampingi siswa setiap saat.'
  },
  {
    id: 3,
    title: 'ALS : Adab, Lillah, dan Syukur sebagai Kunci Sukses Belajar',
    date: '20 Juli 2024',
    author: 'Karya Alumni',
    image: '/assets/karya3.png',
    excerpt: 'Pesan alumni yang kini berkuliah di universitas terkemuka tentang pondasi adab sebelum menuntut ilmu.'
  }
];

export const announcements = [
  {
    id: 1,
    title: 'KHUTBAH IFTITAH & SOSIALISASI TAHUN PELAJARAN BARU',
    date: '16 Juli 2024',
    category: 'Pengumuman',
    image: '/assets/news4.jpg'
  },
  {
    id: 2,
    title: 'Menyatukan Langkah, Meneguhkan Dedikasi Menyongsong Generasi Emas 2045',
    date: '11 Juli 2024',
    category: 'Milad Sekolah',
    image: '/assets/news2.jpg'
  },
  {
    id: 3,
    title: 'Siswa Kelas 10 Ikuti Seleksi Masuk Kuliah Dunia Melalui Kerjasama Global',
    date: '24 Juni 2024',
    category: 'Kerjasama Global',
    image: '/assets/news1.jpg'
  }
];

export const statistics = [
  {
    id: 1,
    count: '94532',
    label: 'Learners',
    sublabel: 'Pendaftar & Peserta Didik',
    color: '#2563eb',
    icon: 'FileText'
  },
  {
    id: 2,
    count: '11223',
    label: 'Graduates',
    sublabel: 'Santri & Alumni Terdaftar',
    color: '#d97706',
    icon: 'UserCheck'
  },
  {
    id: 3,
    count: '25678',
    label: 'Countries Reached',
    sublabel: 'Jaringan & Sebaran Wilayah',
    color: '#16a34a',
    icon: 'Globe2'
  },
  {
    id: 4,
    count: '2678',
    label: 'Campus Partnered',
    sublabel: 'Alumni Diterima di PTN & Luar Negeri',
    color: '#dc2626',
    icon: 'GraduationCap'
  }
];

export const partners = [
  { name: 'Universitas Cakrawala Buana', logo: '/assets/partner1.png' },
  { name: 'Institut Sains & Teknologi Graha Nusantara', logo: '/assets/partner2.png' },
  { name: 'Universitas Bintang Persada', logo: '/assets/partner3.png' },
  { name: 'Universitas Padma Kencana', logo: '/assets/partner4.png' },
  { name: 'Archipelago Global Academy', logo: '/assets/partner5.png' },
  { name: 'Universitas Surya Medika', logo: '/assets/partner6.png' },
  { name: 'Institut Pustaka Cendekia', logo: '/assets/partner7.png' },
  { name: 'Continental University of Technology', logo: '/assets/partner8.png' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Ananda Rayhan Putra Firdaus',
    position: 'Institut Teknologi Sepuluh Nopember Surabaya',
    quote: 'Kepemimpinan yang diwariskan melalui 7 pilar leadership culture, menjadi asas penting dilahirkannya sosok pemimpin masa depan umat.',
    avatar: '/assets/testi1.jpg'
  },
  {
    id: 2,
    name: 'Muhammad Nashwan Hanafi',
    position: 'Internasional Islamic University of Islamabad, Pakistan',
    quote: "Alhamdulillah, bersyukur sekali saya di didik di SMA Nusantara Cendekia, dilatih untuk siap dipimpin & memimpin, dilatih utk menjadi pemimpin yang berakhlak qur'ani, yang dimana ini sangat bermanfaat bagi saya ketika berada di dunia luar.",
    avatar: '/assets/testi2.jpg'
  },
  {
    id: 3,
    name: 'Emir Muhammad Firassiyan',
    position: 'STEI-K Institut Teknologi Bandung (ITB)',
    quote: "6 tahun di SMA Nusantara Cendekia memberikan fondasi ruhiyah dan kedisiplinan akademis yang kokoh, mengantarkan saya berani bersaing dan berkontribusi di kampus teknik terbaik bangsa.",
    avatar: '/assets/testi3.jpg'
  }
];

export const teachers = [
  {
    id: 1,
    name: 'Drs. Hendra Pratama, M.Ed.',
    role: 'Kepala Sekolah',
    subject: 'Manajemen Pendidikan & Kepemimpinan',
    image: '/assets/kepsek.jpg'
  },
  {
    id: 2,
    name: 'Siti Rahmawati, S.Pd., M.Si.',
    role: 'Wakil Kepala Bidang Kurikulum',
    subject: 'Matematika & Sains Terapan',
    image: '/assets/teachers.jpg'
  },
  {
    id: 3,
    name: 'Ustadz Muhammad Ilham, Lc., M.Ag.',
    role: 'Wakil Kepala Bidang Kesiswaan',
    subject: 'Pendidikan Agama & Bahasa Arab',
    image: '/assets/karya2.jpg'
  },
  {
    id: 4,
    name: 'Budi Santoso, S.Kom., M.T.',
    role: 'Koordinator Laboratorium & TIK',
    subject: 'Informatika & Robotika',
    image: '/assets/news1.jpg'
  }
];

export const facilities = [
  {
    id: 1,
    title: 'Laboratorium Komputer & Multimedia',
    desc: 'Dilengkapi 40 unit PC modern, koneksi internet berkecepatan tinggi, dan perangkat multimedia interaktif.',
    image: '/assets/lab_komputer.jpg'
  },
  {
    id: 2,
    title: 'Perpustakaan Digital & Pojok Baca',
    desc: 'Koleksi ribuan buku referensi, kitab, jurnal ilmiah, dan akses e-library untuk menumbuhkan minat literasi.',
    image: '/assets/perpustakaan.jpg'
  },
  {
    id: 3,
    title: 'Ruang Kelas Representatif Ber-AC',
    desc: 'Ruang kelas berpendingin udara dengan smart screen, proyektor, serta pencahayaan alami yang sehat.',
    image: '/assets/ruang_kelas.jpg'
  },
  {
    id: 4,
    title: 'Lapangan Olahraga Multifungsi',
    desc: 'Fasilitas olahraga outdoor berstandar untuk futsal, basket, voli, dan upacara peringatan.',
    image: '/assets/lapangan.jpg'
  },
  {
    id: 5,
    title: 'Masjid Jami\' & Sarana Ibadah',
    desc: 'Masjid yang luas dan asri sebagai pusat pembinaan ibadah harian, tahfidz, dan kajian keagamaan.',
    image: '/assets/musholla.jpg'
  },
  {
    id: 6,
    title: 'Unit Kesehatan Sekolah (UKS)',
    desc: 'Didampingi tenaga medis berpengalaman, obat-obatan esensial, dan ranjang istirahat yang higienis.',
    image: '/assets/uks.jpg'
  }
];

export const extracurriculars = [
  {
    id: 1,
    name: 'Pramuka Inti & Kepanduan',
    desc: 'Membentuk kedisiplinan, kemandirian, kepemimpinan, dan kecintaan pada alam terbuka.',
    image: '/assets/pramuka.jpg'
  },
  {
    id: 2,
    name: 'Futsal & Olahraga Prestasi',
    desc: 'Latihan fisik, taktik beregu, dan pembinaan atlet muda untuk kompetisi antar sekolah.',
    image: '/assets/olahraga.jpg'
  },
  {
    id: 3,
    name: 'Seni Musik, Saman & Hadrah',
    desc: 'Mengasah kepekaan estetika seni budaya dan kearifan lokal yang santun.',
    image: '/assets/kesenian.jpg'
  },
  {
    id: 4,
    name: 'Klub Robotik & Sains (KIR)',
    desc: 'Riset ilmiah remaja, pemrograman mikrokontroler, dan eksperimen sains aplikatif.',
    image: '/assets/robotik.jpg'
  }
];

export const galleryItems = [
  {
    id: 1,
    title: 'Upacara Bendera Hari Senin Khidmat',
    category: 'Upacara',
    date: '19 Oktober 2026',
    location: 'Lapangan Utama Kampus',
    image: '/assets/upacara.jpg',
    description:
      'Pelaksanaan upacara bendera hari Senin yang diikuti dengan penuh ketertiban oleh seluruh santri, dewan asatidz, dan tenaga kependidikan. Agenda rutin mingguan ini bertujuan menumbuhkan nilai nasionalisme, kedisiplinan baris-berbaris, serta amanat pembinaan karakter dari pimpinan lembaga.'
  },
  {
    id: 2,
    title: 'Wisuda & Pelepasan Santriwati Berprestasi',
    category: 'Wisuda',
    date: '12 Oktober 2026',
    location: 'Auditorium Utama',
    image: '/assets/wisuda.jpg',
    description:
      'Prosesi sakral wisuda kelulusan santri yang berhasil menuntaskan seluruh kurikulum akademik dan target hafalan Al-Qur\'an. Momen haru ini dihadiri oleh para wali santri untuk merayakan pencapaian ananda sebelum melangkah ke perguruan tinggi unggulan nasional maupun internasional.'
  },
  {
    id: 3,
    title: 'Perolehan Medali & Piala Juara Umum Tingkat Kota',
    category: 'Prestasi',
    date: '05 Oktober 2026',
    location: 'Pusat Prestasi Sekolah',
    image: '/assets/prestasi_piala.jpg',
    description:
      'Penyerahan trofi dan piagam penghargaan bagi kontingen santri yang berhasil meraih predikat Juara Umum dalam perlombaan akademik dan kreativitas antarsekolah. Prestasi ini merupakan buah dari ketekunan latihan dan bimbingan guru secara berkesinambungan.'
  },
  {
    id: 4,
    title: 'Kegiatan Belajar Kolaboratif Abad 21',
    category: 'Akademik',
    date: '28 September 2026',
    location: 'Ruang Kelas Multimedia',
    image: '/assets/hero_banner.jpg',
    description:
      'Penerapan metode pembelajaran interaktif berbasis proyek di ruang kelas modern. Santri secara aktif berdiskusi kelompok, menganalisis studi kasus sains, dan mempresentasikan hasil temuan mereka menggunakan media visual digital.'
  },
  {
    id: 5,
    title: 'Latihan Kepemimpinan di Alam Terbuka',
    category: 'Kesiswaan',
    date: '20 September 2026',
    location: 'Bumi Perkemahan Wisata Batu',
    image: '/assets/pramuka.jpg',
    description:
      'Program penempaan mental dan kepemimpinan santri melalui kemah kepanduan serta penjelajahan alam. Aktivitas ini melatih ketangguhan mental, kepedulian sosial, kekompakan regu, dan kemandirian dalam suasana alam pegunungan Kota Batu yang sejuk.'
  },
  {
    id: 6,
    title: 'Praktikum Komputer & Pemrograman Dasar',
    category: 'Fasilitas',
    date: '14 September 2026',
    location: 'Laboratorium Komputer & TIK',
    image: '/assets/lab_komputer.jpg',
    description:
      'Sesi praktikum teknologi informasi di laboratorium komputer berkecepatan tinggi. Santri dibekali pemahaman logika pemrograman, desain grafis digital, serta etika berinternet sehat guna menjawab tantangan era digital global.'
  },
];

