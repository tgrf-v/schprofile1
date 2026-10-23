import React, { useState } from 'react';
import AkademikLayout from '../../components/AkademikLayout';
import { Trophy, Calendar } from 'lucide-react';

const achievementsList = [
  {
    id: 1,
    title: 'Medali Emas - International Youth Robot Competition (IYRC)',
    level: 'Internasional',
    year: '2024',
    students: 'Tim Robotik Santri (M. Rayhan & Ahmad Fauzan)',
    organizer: 'International Robot Olympiad Committee - Daejeon, Korea Selatan',
    category: 'Sains & Robotika',
    badge: 'Medali Emas'
  },
  {
    id: 2,
    title: 'Juara 1 Tingkat Nasional - Olimpiade Sains Nasional (OSN) Bidang Matematika',
    level: 'Nasional',
    year: '2024',
    students: 'Aisyah Putri Azzahra',
    organizer: 'Balai Pengembangan Talenta Indonesia (BPTI) Kemendikbudristek',
    category: 'Akademik & Sains',
    badge: 'Juara 1'
  },
  {
    id: 3,
    title: 'Juara Umum Musabaqah Hifdzil Qur’an (MHQ) 30 Juz Tingkat Jawa Timur',
    level: 'Provinsi',
    year: '2024',
    students: 'Fathimah Zahra Al-Munawwarah',
    organizer: 'Lembaga Pengembangan Tilawatil Qur’an (LPTQ) Jatim',
    category: 'Keagamaan & Tahfidz',
    badge: 'Juara Umum'
  },
  {
    id: 4,
    title: '1st Place & Best Speaker - National English & Arabic Parliamentary Debate',
    level: 'Nasional',
    year: '2023',
    students: 'Delegasi Tim Debat SMA Nusantara Cendekia',
    organizer: 'Universitas Indonesia (UI) Youth Forum',
    category: 'Bahasa & Orasi',
    badge: 'Best Speaker'
  },
  {
    id: 5,
    title: 'Medali Perak - International Mathematics Olympiad (IMO) Selection Camp',
    level: 'Internasional',
    year: '2023',
    students: 'Muhammad Hafiz Pratama',
    organizer: 'Southeast Asian Mathematical Society (SEAMS)',
    category: 'Akademik & Sains',
    badge: 'Medali Perak'
  },
  {
    id: 6,
    title: 'Juara 1 Turnamen Futsal Pelajar & Santri Se-Kota Batu & Malang Raya',
    level: 'Kota/Kabupaten',
    year: '2024',
    students: 'Tim Futsal Putra SMA Nusantara Cendekia',
    organizer: 'Dispora Kota Batu & Kemenag',
    category: 'Olahraga',
    badge: 'Juara 1'
  },
  {
    id: 7,
    title: 'Karya Tulis Ilmiah Terbaik - National Young Scientist Competition',
    level: 'Nasional',
    year: '2023',
    students: 'Zulfa Amelia & Rania Syakira',
    organizer: 'Institut Teknologi Bandung (ITB) & BRIN',
    category: 'Sains & Riset',
    badge: 'Juara 1 Riset'
  },
  {
    id: 8,
    title: 'Pemenang Desain Grafis & Kaligrafi Kontemporer Tingkat Wilayah II',
    level: 'Provinsi',
    year: '2024',
    students: 'Ibrahim Malik',
    organizer: 'Festival Seni Pelajar Islami Jatim',
    category: 'Seni & Budaya',
    badge: 'Juara 1'
  }
];

export default function Prestasi() {
  const [selectedLevel, setSelectedLevel] = useState('Semua');

  const levels = ['Semua', 'Internasional', 'Nasional', 'Provinsi', 'Kota/Kabupaten'];

  const filteredPrestasi = achievementsList.filter((item) =>
    selectedLevel === 'Semua' ? true : item.level === selectedLevel
  );

  return (
    <AkademikLayout
      title="Prestasi Siswa"
      bannerImage="/assets/prestasi_piala.jpg"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-20">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Budaya Keunggulan
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Membina Potensi Insani untuk Berprestasi di Panggung Dunia Tanpa Menanggalkan Keagungan Adab.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Setiap capaian prestasi santri merupakan buah dari ketekunan ikhtiar, bimbingan intensif dewan guru, serta doa restu orang tua. Kami berkomitmen memberikan ekosistem pembinaan talenta terbaik di bidang sains, keagamaan, bahasa, dan teknologi.
            </p>
          </div>
        </section>

        {/* 2. STATISTIK PRESTASI (Minimalist Metric Lines) */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="pt-4 border-t border-gray-200">
            <span className="text-3xl sm:text-4xl font-bold font-philosopher text-[#1b5f63] block mb-1">
              120+
            </span>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Total Juara</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Torehan kumulatif</p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <span className="text-3xl sm:text-4xl font-bold font-philosopher text-[#1b5f63] block mb-1">
              14
            </span>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Internasional</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Ajang olimpiade &amp; robotika</p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <span className="text-3xl sm:text-4xl font-bold font-philosopher text-[#1b5f63] block mb-1">
              48
            </span>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Tingkat Nasional</p>
            <p className="text-[11px] text-gray-500 mt-0.5">OSN, riset, dan debat</p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <span className="text-3xl sm:text-4xl font-bold font-philosopher text-[#1b5f63] block mb-1">
              100%
            </span>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Kelulusan PTN/LN</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Kampus bereputasi tinggi</p>
          </div>
        </section>

        {/* 3. SEKSI DAFTAR PRESTASI (Editorial Split Layout) */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri 1/3 (Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                    Rekam Jejak
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                    Daftar Prestasi
                  </h2>
                  <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                    Filter capaian berdasarkan skala kejuaraan yang diikuti delegasi santri:
                  </p>
                </div>

                {/* Filter Tingkat */}
                <div className="flex flex-col gap-1.5">
                  {levels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`text-left px-3.5 py-2 text-xs font-semibold transition border-l-2 ${
                        selectedLevel === lvl
                          ? 'border-[#1b5f63] bg-emerald-50 text-[#1b5f63]'
                          : 'border-transparent text-gray-600 hover:text-[#1b5f63] hover:bg-gray-50'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Kolom Kanan 2/3 (Daftar Prestasi) */}
            <div className="md:col-span-8 space-y-6">
              {filteredPrestasi.map((item) => (
                <div
                  key={item.id}
                  className="pt-5 pb-6 border-b border-gray-100 space-y-2.5"
                >
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="font-bold text-[#1b5f63] uppercase tracking-wider">
                      {item.level}
                    </span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-500">{item.category}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-400">Tahun {item.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-maven leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs sm:text-sm text-gray-600 space-y-1 pt-1">
                    <p>
                      <strong className="text-gray-900 font-medium">Santri:</strong> {item.students}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Penyelenggara: {item.organizer}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-block bg-[#1b5f63] text-white text-[11px] font-bold px-2.5 py-1 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. KLINIK OLIMPIADE BINA PRESTASI */}
        <section className="p-8 sm:p-10 border border-gray-200 bg-gray-50/70">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
              Program Khusus
            </span>
            <h3 className="text-xl font-bold font-philosopher text-gray-900">
              Klinik Sains &amp; Inkubator Riset Terapan
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Santri berbakat memperoleh pendampingan langsung dari dosen tamu universitas mitra terkemuka (ITB, UI, UGM, UB), fasilitas riset khusus, dan pembiayaan penuh dalam perlombaan nasional dan internasional.
            </p>
          </div>
        </section>
      </div>
    </AkademikLayout>
  );
}
