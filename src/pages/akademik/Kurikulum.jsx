import React from 'react';
import AkademikLayout from '../../components/AkademikLayout';
import { CheckCircle2, Clock } from 'lucide-react';

const pilarKurikulum = [
  {
    number: '01',
    title: 'Kurikulum Merdeka Nasional',
    desc: 'Standar kurikulum nasional Kemendikbudristek dengan diferensiasi minat bakat serta penguatan Proyek Penguatan Profil Pelajar Pancasila (P5) berbasis riset terapan.'
  },
  {
    number: '02',
    title: 'Cambridge International Curriculum',
    desc: 'Penguatan materi Matematika, Sains, dan Bahasa Inggris berbasis silabus internasional Cambridge Assessment guna membuka peluang studi ke universitas top dunia.'
  },
  {
    number: '03',
    title: 'Diniyah & Tarbiyah Adab',
    desc: 'Kurikulum kepesantrenan terpadu yang mencakup Tahfidzul Qur\'an, pemahaman hadits tematik, fiqih ibadah aplikatif, dan pembiasaan adab islami selama 24 jam.'
  }
];

export default function Kurikulum() {
  return (
    <AkademikLayout
      title="Kurikulum Pembelajaran"
      bannerImage="/assets/gedung_sekolah.jpg"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-24">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote Pusat Perhatian) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Paradigma Akademik
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Harmonisasi Keunggulan Sains Abad ke-21 dengan Kedalaman Nilai Ilahiah dan Karakter Pemimpin Beradab.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Sistem kurikulum kami dirancang untuk membekali setiap santri dengan nalar kritis objektif, kecakapan bilingual aktif, serta integritas spiritual yang kokoh sebagai bekal bersaing di kancah peradaban global.
            </p>
          </div>
        </section>

        {/* 2. SEKSI 3 PILAR KURIKULUM (Editorial Split Layout) */}
        <section className="pb-16 sm:pb-20 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri 1/3 (Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Trilogi Pendidikan
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Tiga Pilar Kurikulum Terpadu
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Tiga kerangka kurikulum yang terintegrasi secara harmonis dalam membina nalar, rasa, dan ruhiyah santri.
                </p>
              </div>
            </div>

            {/* Kolom Kanan 2/3 (Minimalist Grid dengan Tipografi '01', '02', '03') */}
            <div className="md:col-span-8 space-y-8">
              {pilarKurikulum.map((item, idx) => (
                <div key={idx} className="pt-5 border-t border-gray-200">
                  <span className="text-xs font-mono font-bold text-[#1b5f63] block mb-2">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 font-maven mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SEKSI CAMBRIDGE & KELAS BILINGUAL (Editorial Split Layout) */}
        <section className="pb-16 sm:pb-20 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri 1/3 (Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Standar Dunia
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Cambridge International
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <div className="pt-2">
                  <img
                    src="/assets/cambridge.png"
                    alt="Cambridge Partner"
                    className="h-8 w-auto object-contain opacity-90"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

            {/* Kolom Kanan 2/3 */}
            <div className="md:col-span-8 space-y-6">
              <div className="overflow-hidden border border-gray-200">
                <img
                  src="/assets/ruang_kelas.jpg"
                  alt="Suasana Pembelajaran Interaktif"
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Pembelajaran bidang studi sains dan matematika disampaikan dalam pengantar bilingual dengan mengacu pada silabus resmi Cambridge Lower Secondary dan IGCSE. Santri dilatih untuk terbiasa berpikir analitis, berargumentasi ilmiah, dan menyusun laporan berbasis data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-[#1b5f63] pl-4 py-1">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">English Immersion</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Interaksi harian, presentasi riset, dan debat sains dalam Bahasa Inggris aktif.
                  </p>
                </div>
                <div className="border-l-2 border-[#1b5f63] pl-4 py-1">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Sertifikasi Resmi</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Ujian berkala untuk mengukur kompetensi standar internasional Cambridge Assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEKSI TAHFIDZ & TARGET SANTRI (Editorial Split Layout) */}
        <section className="pb-16 sm:pb-20 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri 1/3 (Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Tarbiyah Ruhiyah
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Tahfidz &amp; Adab 24 Jam
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Pengawalan hafalan Al-Qur'an bersanad dan pembentukan adab kepemimpinan harian di asrama.
                </p>
              </div>
            </div>

            {/* Kolom Kanan 2/3 (Grid 3 Indikator) */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold font-philosopher text-[#1b5f63] block mb-1">
                    5 - 30 Juz
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5">Target Hafalan</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Didampingi musyrif bersanad dengan sistem setoran harian dan muroja'ah rutin.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold font-philosopher text-[#1b5f63] block mb-1">
                    2 Bahasa
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5">Bilingual Aktif</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Pembiasaan bahasa Arab dan Inggris secara bergantian dalam keseharian asrama.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold font-philosopher text-[#1b5f63] block mb-1">
                    24 Jam
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5">Keteladanan Adab</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Pengawalan ibadah berjamaah, disiplin waktu, dan kepedulian sosial santri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SEKSI DISTRIBUSI WAKTU BELAJAR */}
        <section className="pb-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri 1/3 (Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Manajemen Waktu
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Ritme Harian Santri
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Distribusi seimbang antara pembelajaran sains, tahfidz, pengembangan minat, dan istirahat santri.
                </p>
              </div>
            </div>

            {/* Kolom Kanan 2/3 (Tabel Minimalis) */}
            <div className="md:col-span-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-gray-200">
                  <thead className="bg-[#1b5f63] text-white uppercase text-[11px] font-maven">
                    <tr>
                      <th className="px-4 py-3 border-r border-[#144246]">Sesi Waktu</th>
                      <th className="px-4 py-3 border-r border-[#144246]">Aktivitas</th>
                      <th className="px-4 py-3">Fokus &amp; Sasaran</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-[#1b5f63] border-r border-gray-200">03.45 - 06.30</td>
                      <td className="px-4 py-3 border-r border-gray-200">Qiyamullail &amp; Halaqah Qur'an</td>
                      <td className="px-4 py-3 text-gray-500">Penyetoran hafalan baru dan muroja'ah</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-[#fafbfc]">
                      <td className="px-4 py-3 font-semibold text-[#1b5f63] border-r border-gray-200">07.00 - 12.00</td>
                      <td className="px-4 py-3 border-r border-gray-200">Sesi Akademik &amp; Cambridge</td>
                      <td className="px-4 py-3 text-gray-500">Pembelajaran sains, matematika, bahasa</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-[#1b5f63] border-r border-gray-200">12.00 - 13.30</td>
                      <td className="px-4 py-3 border-r border-gray-200">Dzuhur Berjamaah &amp; Makan Siang</td>
                      <td className="px-4 py-3 text-gray-500">Istirahat fisik dan qoilulah</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-[#fafbfc]">
                      <td className="px-4 py-3 font-semibold text-[#1b5f63] border-r border-gray-200">13.30 - 15.30</td>
                      <td className="px-4 py-3 border-r border-gray-200">Proyek P5 &amp; Diniyah</td>
                      <td className="px-4 py-3 text-gray-500">Karakter, studi Islam, dan karya siswa</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-[#1b5f63] border-r border-gray-200">16.00 - 17.15</td>
                      <td className="px-4 py-3 border-r border-gray-200">Ekstrakurikuler &amp; Olahraga</td>
                      <td className="px-4 py-3 text-gray-500">Penyaluran minat bakat dan kebugaran</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AkademikLayout>
  );
}
