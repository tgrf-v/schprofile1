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
    slug: "al-izzah", // Pengenal unik multi-tenant database
    name: "Al-Izzah International Islamic Boarding School",
    shortName: "Al-Izzah Batu",
    tagline: "Mencetak Generasi Berakhlak Qur'ani dan Unggul di Kancah Global",
    npsn: "20534211",
    accreditation: "A (Unggul)",
    status: "Swasta",
    foundedYear: "2006",
    description:
      "Lembaga pendidikan Islam modern berbasis asrama terpadu di Kota Batu, Jawa Timur. Mengintegrasikan kurikulum nasional, kurikulum internasional Cambridge, serta pembinaan tahfidz Al-Qur'an.",
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
    phone: "0341-590363",
    whatsappNumber: "6281234567890", // Format angka tanpa '+' untuk link wa.me
    whatsappDisplay: "+62 812-3456-7890",
    email: "info@alizzahbatu.sch.id",
    address:
      "Jl. Indragiri Gang Pangkur No. 87, Desa Sumberejo, Kec. Batu, Kota Batu, Jawa Timur 65318",
    mapsUrl:
      "https://maps.google.com/?q=Al-Izzah+International+Islamic+Boarding+School+Batu",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4172404533037!2d112.5204754758778!3d-7.85078567802436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788737eb0a75d5%3A0xe7bc5ebf11181f13!2sSMP%20-%20SMA%20Al-Izzah%20Batu!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
    operationalHours: "Senin - Sabtu: 07.30 - 16.00 WIB",
  },

  // 4. MEDIA SOSIAL RESMI
  socialMedia: {
    instagram: "https://instagram.com/alizzahbatu",
    facebook: "https://facebook.com/alizzahbatu",
    youtube: "https://youtube.com/@alizzahbatu",
    tiktok: "https://tiktok.com/@alizzahbatu",
  },

  // 5. PIMPINAN & SAMBUTAN RESMI
  principal: {
    name: "Dr. H. Ahmad Fauzi, M.Pd.",
    title: "Kepala Sekolah",
    photo: "/assets/kepsek.jpg",
    speechHeadline:
      "Mencetak Generasi Berakhlak Qur'ani dan Unggul di Kancah Global",
    speechSummary:
      "Selamat datang di portal resmi sekolah kami. Kami meyakini bahwa pendidikan sejati bukan sekadar mentransfer pengetahuan akademik, melainkan menanamkan adab, integritas moral, serta ketangguhan mental bagi santri dalam menjawab tantangan masa depan.",
    speechParagraph2:
      "Melalui perpaduan kurikulum nasional, kurikulum internasional Cambridge, serta pembinaan asrama 24 jam yang aman dan asri di Kota Batu, kami berkomitmen mendampingi setiap peserta didik mencapai potensi terbaiknya demi kemaslahatan agama dan bangsa.",
  },

  // 6. VISI, MISI & NILAI UTAMA
  visionMission: {
    vision:
      "Menjadi lembaga pendidikan Islam unggulan tingkat dunia yang melahirkan pemimpin berkarakter Qur'ani, berwawasan global, dan menguasai sains teknologi.",
    mission: [
      "Menyelenggarakan pendidikan Islam terpadu yang menanamkan akidah shahihah dan akhlakul karimah.",
      "Mengembangkan potensi intelektual melalui kurikulum nasional dan internasional Cambridge berstandar mutu tinggi.",
      "Membina program takhasus tahfidz Al-Qur'an yang mutqin dan bersanad.",
      "Membekali santri dengan kecakapan kepemimpinan, kemandirian, dan wawasan kebangsaan.",
    ],
    values: [
      {
        number: "01",
        title: "Ketauhidan & Akhlak",
        desc: "Mendasari setiap aktivitas akademik dan asrama dengan nilai ketakwaan kepada Allah SWT.",
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
        desc: "Menguasai dwibahasa (Arab dan Inggris) sebagai sarana berkontribusi aktif di panggung internasional.",
      },
    ],
  },

  // 7. STATISTIK PENCAPAIAN
  statistics: [
    {
      id: 1,
      count: "1000+",
      label: "Santri Aktif",
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
    kuota: "120 Santri Baru",
    rekeningTujuan: "Bank Syariah Indonesia (BSI) No. Rekening: 7100-2233-44 a.n PPDB Al-Izzah",
  },

  // 9. FITUR & NAVIGASI AKTIF (TOGGLE FITUR)
  features: {
    enablePPDB: true,
    enableBoarding: true,
    enableCambridge: true,
    enableGallery: true,
  },
};
