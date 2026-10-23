import React from 'react';
import ProfilLayout from '../../components/ProfilLayout';
import { teachers } from '../../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Guru() {
  return (
    <ProfilLayout
      title="Guru & Tenaga Pendidik"
      bannerImage="/assets/teachers.jpg"
    >
      <div className="space-y-12">
        {/* Paragraf Pengantar */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify sm:text-left">
          Keberhasilan ekosistem pembelajaran di sekolah kami ditopang oleh jajaran pendidik profesional lulusan universitas terkemuka dalam dan luar negeri (Al-Azhar Kairo, Timur Tengah, ITB, UI, UGM, UM, UB). Setiap pendidik tidak hanya menguasai disiplin ilmu yang diampu secara mendalam, tetapi juga mendedikasikan keteladanan moral dan akhlak dalam membina santri selama 24 jam.
        </p>

        {/* Seksi Daftar Tenaga Pendidik */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-philosopher text-[#1b5f63]">
              Dewan Asatidzah &amp; Guru Pembina
            </h2>
            <div className="w-12 h-0.5 bg-[#1b5f63] mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teachers.map((t) => (
              <div
                key={t.id}
                className="border border-gray-200 bg-white flex flex-col sm:flex-row overflow-hidden"
              >
                <div className="w-full sm:w-36 h-48 sm:h-auto overflow-hidden bg-gray-50 flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug">{t.name}</h3>
                    <p className="text-xs text-[#1b5f63] font-semibold mt-1">{t.role}</p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      Bidang Studi: <span className="text-gray-900 font-medium">{t.subject}</span>
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 mt-3 text-[11px] text-gray-500 flex items-center justify-between">
                    <span>Pendidik Tetap</span>
                    <span className="text-[#1b5f63] font-medium">Tersertifikasi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seksi Kualifikasi (Unboxed Icons) */}
        <section className="pt-6 border-t border-gray-200">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-philosopher text-[#1b5f63]">
              Kualifikasi Tenaga Pendidik
            </h2>
            <div className="w-12 h-0.5 bg-[#1b5f63] mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <GraduationCap className="w-6 h-6 text-[#1b5f63] mb-2.5" />
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">Pendidikan Linier</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Seluruh dewan guru merupakan lulusan sarjana dan magister dari perguruan tinggi bereputasi tinggi.
              </p>
            </div>
            <div>
              <Award className="w-6 h-6 text-[#1b5f63] mb-2.5" />
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">Sertifikasi Internasional</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pendidik bidang sains dan bahasa mengantongi sertifikasi kurikulum internasional dan kecakapan bahasa aktif.
              </p>
            </div>
            <div>
              <BookOpen className="w-6 h-6 text-[#1b5f63] mb-2.5" />
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">Keteladanan Adab</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Menekankan keteladanan akhlak harian (*uswah hasanah*) sebagai model pengasuhan 24 jam bagi para santri.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ProfilLayout>
  );
}
