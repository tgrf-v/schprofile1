import React from 'react';
import EditorialPageLayout from '../components/EditorialPageLayout';
import { facilities } from '../data';
import { ShieldCheck, Sparkles, Wifi, HeartPulse } from 'lucide-react';

export default function Fasilitas() {
  return (
    <EditorialPageLayout
      title="Fasilitas Sekolah"
      category="Sarana &amp; Prasarana Kampus"
      bannerImage="/assets/lab_komputer.jpg"
      breadcrumbCurrent="Fasilitas"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-20">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Ekosistem Pembelajaran
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Sarana &amp; Prasarana Representatif untuk Menunjang Produktivitas, Kenyamanan, dan Keunggulan Karakter Santri.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Kami meyakini bahwa lingkungan fisik yang aman, asri, dan berfasilitas lengkap merupakan katalis penting dalam merangsang kreativitas berpikir, kedisiplinan ibadah, serta kesehatan fisik peserta didik.
            </p>
          </div>
        </section>

        {/* 2. GRID FASILITAS MODERN (Clean Editorial Cards) */}
        <section>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
              Daftar Sarana
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
              Fasilitas Unggulan Kampus
            </h2>
            <div className="w-12 h-1 bg-[#1b5f63] mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f) => (
              <div
                key={f.id}
                className="bg-white border border-gray-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-60 overflow-hidden bg-gray-100 relative">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/gedung_sekolah.jpg';
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 font-maven group-hover:text-[#1b5f63] transition mb-2">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-semibold text-[#1b5f63] uppercase tracking-wider">
                    Fasilitas Aktif
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. LINGKUNGAN & STANDARDISASI (Unboxed Icons) */}
        <section className="pt-12 border-t border-gray-100">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
              Kenyamanan Kampus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
              Standar Lingkungan &amp; Keselamatan
            </h2>
            <div className="w-12 h-1 bg-[#1b5f63] mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Wifi className="w-6 h-6 text-[#1b5f63] mb-2.5" />
              <h3 className="font-bold text-gray-900 text-sm mb-1">Akses Internet Edukatif</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Jaringan Wi-Fi terfilter aman untuk kegiatan riset dan pembelajaran santri.</p>
            </div>

            <div>
              <ShieldCheck className="w-6 h-6 text-[#1b5f63] mb-2.5" />
              <h3 className="font-bold text-gray-900 text-sm mb-1">Keamanan Terpadu 24 Jam</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Pengawasan kamera CCTV di seluruh titik strategis dan petugas sekuriti siaga.</p>
            </div>

            <div>
              <HeartPulse className="w-6 h-6 text-[#1b5f63] mb-2.5" />
              <h3 className="font-bold text-gray-900 text-sm mb-1">Layanan Medis UKS</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Klinik kesehatan sekolah dengan tenaga perawat siap tanggap serta dokter visit.</p>
            </div>

            <div>
              <Sparkles className="w-6 h-6 text-[#1b5f63] mb-2.5" />
              <h3 className="font-bold text-gray-900 text-sm mb-1">Lingkungan Asri Pegunungan</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Berada di kawasan sejuk Kota Batu, jauh dari polusi udara dan kebisingan kota.</p>
            </div>
          </div>
        </section>
      </div>
    </EditorialPageLayout>
  );
}
