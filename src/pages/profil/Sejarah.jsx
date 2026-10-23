import React from 'react';
import ProfilLayout from '../../components/ProfilLayout';

export default function Sejarah() {
  return (
    <ProfilLayout
      title="Sejarah Sekolah"
      bannerImage="/assets/gedung_sekolah.jpg"
    >
      <div className="space-y-10">
        {/* Gambar Utama Kampus / Emblem (ACS Jakarta Style) */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/assets/gedung_sekolah.jpg"
            alt="Kampus Sekolah"
            className="w-full max-w-2xl h-72 sm:h-84 object-cover shadow-xs"
          />
          <p className="text-xs text-gray-500 mt-2.5 text-center">
            Gedung Utama dan Lingkungan Kampus Terpadu di Kota Batu, Jawa Timur
          </p>
        </div>

        {/* Naskah Sejarah Editorial */}
        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
          <p>
            Berdiri di kawasan lereng pegunungan Kota Batu yang sejuk dan asri, sekolah ini diprakarsai oleh para tokoh pendidik, ulama, dan cendekiawan muslim yang memiliki tekad bersama untuk menjawab kegelisahan akan tantangan moral generasi bangsa di era modernisasi.
          </p>

          <p>
            Pada awal berdirinya, lembaga ini dirancang dengan konsep pesantren terpadu (*Integrated Islamic Boarding School*)—sebuah ikhtiar sistem pendidikan yang memadukan kedalaman kurikulum kepesantrenan dengan keunggulan sains dan teknologi berstandar internasional. Seluruh santri dibimbing selama 24 jam dalam lingkungan belajar yang aman, kondusif, dan sarat dengan nilai-nilai keteladanan.
          </p>

          <p>
            Seiring berjalannya waktu dan meningkatnya kepercayaan dari masyarakat di berbagai penjuru tanah air, sekolah terus bertransformasi. Pada fase perkembangannya, fasilitas laboratorium sains modern, pusat komputasi, asrama representatif, serta kemitraan akademik dengan berbagai institusi pendidikan internasional mulai dibangun dan diperluas secara bertahap.
          </p>

          <p>
            Kiprah sekolah kian kokoh setelah berhasil meraih akreditasi "A" (Unggul) dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) serta resmi menjadi sekolah mitra berlisensi dalam pengujian internasional. Ribuan lulusan telah berhasil melanjutkan studi ke perguruan tinggi negeri terbaik di Indonesia maupun berbagai universitas prestisius di Timur Tengah, Eropa, dan Asia.
          </p>

          <p>
            Hari ini, sekolah tetap setia memegang teguh amanah para pendiri: menjadi rumah tumbuh kembang bagi tunas-tunas muda bangsa yang berilmu amaliah, beramal ilmiah, dan berakhlakul karimah, serta siap menjadi pemimpin peradaban dunia di masa depan.
          </p>
        </div>

        {/* Data Identitas Resmi & Legalitas (Tabel Minimalis) */}
        <div className="pt-8 border-t border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-bold font-philosopher text-[#1b5f63]">
              Data Legalitas &amp; Identitas Sekolah
            </h3>
            <div className="w-12 h-0.5 bg-[#1b5f63] mt-1.5" />
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-xs sm:text-sm text-left border border-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50/60">
                  <td className="px-4 py-3 font-semibold text-gray-700 w-1/3">Nama Resmi Sekolah</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">Al-Izzah International Islamic Boarding School</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-700">Nomor Pokok Sekolah Nasional (NPSN)</td>
                  <td className="px-4 py-3 text-gray-900 font-mono font-bold">20574892</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="px-4 py-3 font-semibold text-gray-700">Status Akreditasi</td>
                  <td className="px-4 py-3 text-[#1b5f63] font-bold">Akreditasi "A" (Unggul) BAN-S/M</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-700">Jenjang Pendidikan</td>
                  <td className="px-4 py-3 text-gray-900">SMP dan SMA Terpadu</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="px-4 py-3 font-semibold text-gray-700">Kurikulum Operasional</td>
                  <td className="px-4 py-3 text-gray-900">Kurikulum Merdeka &amp; Cambridge Assessment International</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-700">Penyelenggara</td>
                  <td className="px-4 py-3 text-gray-900">Yayasan Bina Anak Bangsa Al-Izzah Batu</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="px-4 py-3 font-semibold text-gray-700">Lokasi Kampus</td>
                  <td className="px-4 py-3 text-gray-900">Jl. Indragiri Gg. 6, Sumberejo, Kec. Batu, Kota Batu, Jawa Timur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProfilLayout>
  );
}
