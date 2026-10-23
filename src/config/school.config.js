/**
 * KONFIGURASI UTAMA SEKOLAH (WHITE-LABEL CONFIG)
 * ===============================================
 * File ini adalah pusat pengendali seluruh identitas dan konten statis website.
 * Untuk membuat website sekolah baru, Anda cukup mengubah isi file ini
 * dan menimpa foto-foto terkait di folder public/assets.
 */

export const schoolConfig = {
  // 1. IDENTITAS SEKOLAH
  identity: {
    slug: "nusantara-cendekia", // Pengenal unik multi-tenant database
    name: "SMA Nusantara Cendekia",
    shortName: "Nusantara Cendekia",
    tagline: "Membina Karakter Unggul, Menembus Cakrawala Global, Berintegritas Luhur",
    npsn: "69988776",
    accreditation: "A (Unggul)",
    status: "Swasta",
    foundedYear: "2010",
    description:
      "Lembaga pendidikan berasrama unggulan di Kota Batu, Jawa Timur. Mengintegrasikan kurikulum nasional, penguatan literasi sains, dan kepemimpinan berwawasan global.",
    logo: "/assets/logo.png",
    heroImage: "/assets/foto_sekolah.jpg",
  },

  // 2. TEMA & WARNA UTAMA (DYNAMIC BRANDING)
  // Ganti kode HEX di bawah ini untuk mengubah nuansa warna di seluruh website.
  theme: {
    primaryColor: "#1b5f63", // Warna brand utama (tombol, navbar aksen, heading)
    primaryHover: "#144246", // Warna saat tombol di-hover
    accentColor: "#b91c1c",  // Warna aksen sekunder / highlight penting
    accentHover: "#991b1b",
    backgroundColor: "#ffffff",
    surfaceColor: "#f4f5f7",
  },

  // 3. KONTAK & LOKASI
  contact: {
    phone: "(0341) 591234",
    whatsappNumber: "6281234567890", // Format angka tanpa '+' untuk link wa.me
    whatsappDisplay: "+62 812-3456-7890",
    email: "info@nusantaracendekia.sch.id",
    address:
      "Jl. Cendekia Raya No. 88, Oro-Oro Ombo, Kec. Batu, Kota Batu, Jawa Timur 65316",
    mapsUrl:
      "https://maps.google.com/?q=Kota+Batu+Jawa+Timur",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.123456789!2d112.52!3d-7.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTInMDAuMCJTIDExMsKwMzEnMTIuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
    operationalHours: "Senin - Sabtu: 07.30 - 16.00 WIB",
  },

  // 4. MEDIA SOSIAL RESMI
  socialMedia: {
    instagram: "https://instagram.com/nusantaracendekia",
    facebook: "https://facebook.com/nusantaracendekia",
    youtube: "https://youtube.com/@nusantaracendekia",
    tiktok: "https://tiktok.com/@nusantaracendekia",
  },

  // 5. PIMPINAN & SAMBUTAN RESMI
  principal: {
    name: "Drs. Hendra Pratama, M.Ed.",
    title: "Kepala Sekolah",
    photo: "/assets/kepsek.jpg",
    speechHeadline:
      "Membina Karakter Unggul, Menembus Cakrawala Global, Berintegritas Luhur",
    speechSummary:
      "Selamat datang di portal resmi SMA Nusantara Cendekia. Kami meyakini bahwa pendidikan sejati bukan sekadar mentransfer pengetahuan akademik, melainkan menanamkan adab, integritas moral, serta ketangguhan mental bagi siswa dalam menjawab tantangan masa depan.",
    speechParagraph2:
      "Melalui perpaduan kurikulum terpadu, sarana riset mandiri, serta pembinaan asrama 24 jam yang aman dan asri di Kota Batu, kami berkomitmen mendampingi setiap peserta didik mencapai potensi terbaiknya demi kemajuan bangsa.",
  },

  // 6. VISI, MISI & NILAI UTAMA
  visionMission: {
    vision:
      "Menjadi lembaga pendidikan berasrama unggulan bertaraf internasional yang melahirkan pemimpin berkarakter mulia, berwawasan global, dan menguasai sains teknologi.",
    mission: [
      "Menyelenggarakan pendidikan berasrama terpadu yang menanamkan budi pekerti luhur dan integritas moral.",
      "Mengembangkan potensi intelektual melalui kurikulum nasional dan pengayaan internasional berstandar mutu tinggi.",
      "Membina program penguatan literasi ilmiah, riset sains terapan, dan kemandirian belajar.",
      "Membekali siswa dengan kecakapan kepemimpinan, kepedulian sosial, dan wawasan kebangsaan.",
    ],
    values: [
      {
        number: "01",
        title: "Integritas & Karakter",
        desc: "Mendasari setiap aktivitas akademik dan asrama dengan nilai kejujuran, etika, dan ketakwaan.",
      },
      {
        number: "02",
        title: "Keunggulan Akademik",
        desc: "Mendorong daya nalar kritis, riset sains, dan prestasi kompetitif tingkat nasional hingga global.",
      },
      {
        number: "03",
        title: "Kedisiplinan & Adab",
        desc: "Membiasakan budaya tertib, santun, dan penghormatan kepada guru serta sesama warga sekolah.",
      },
      {
        number: "04",
        title: "Wawasan Global",
        desc: "Menguasai bahasa asing dan keterampilan kolaborasi abad 21 untuk berkontribusi aktif di panggung internasional.",
      },
    ],
  },

  // 7. STATISTIK PENCAPAIAN
  statistics: [
    {
      id: 1,
      count: "1000+",
      label: "Siswa Aktif",
      sublabel: "Jenjang SMP & SMA Terakreditasi A",
    },
    {
      id: 2,
      count: "11.000+",
      label: "Alumni Terdaftar",
      sublabel: "Berkiprah di berbagai sektor nasional & global",
    },
    {
      id: 3,
      count: "25+",
      label: "Jaringan Kemitraan",
      sublabel: "Kerja sama universitas dalam & luar negeri",
    },
    {
      id: 4,
      count: "2.500+",
      label: "Lolos PTN Favorit",
      sublabel: "Diterima di kampus negeri & mancanegara",
    },
  ],

  // 8. INFORMASI PENDAFTARAN & PPDB
  ppdb: {
    tahunAjaran: "2026/2027",
    status: "DIBUKA",
    biayaPendaftaran: "Rp 350.000",
    gelombang1: "1 Oktober - 31 Desember 2026",
    gelombang2: "2 Januari - 30 April 2027",
    kuota: "120 Siswa Baru",
    rekeningTujuan: "Bank Mandiri No. Rekening: 144-00-9876543-2 a.n PPDB SMA Nusantara Cendekia",
  },

  // 9. FITUR & NAVIGASI AKTIF (TOGGLE FITUR)
  features: {
    enablePPDB: true,
    enableBoarding: true,
    enableCambridge: true,
    enableGallery: true,
  },
};
