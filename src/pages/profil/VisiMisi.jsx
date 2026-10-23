import React from 'react';
import ProfilLayout from '../../components/ProfilLayout';

const misiList = [
  'Menanamkan akidah yang shahih, adab islami, serta pembiasaan ibadah harian sesuai tuntunan Al-Qur\'an dan As-Sunnah.',
  'Menyelenggarakan pembelajaran akademik berstandar nasional dan internasional berbasis riset, nalar kritis, dan pemecahan masalah secara terstruktur.',
  'Membina kemahiran berkomunikasi aktif dalam Bahasa Arab dan Bahasa Inggris sebagai bekal bersaing di panggung internasional.',
  'Mengembangkan jiwa kepemimpinan mandiri, kepekaan sosial, tanggung jawab, dan kepedulian terhadap kelestarian lingkungan hidup.',
  'Menjalin kolaborasi strategis dengan berbagai perguruan tinggi terkemuka dalam dan luar negeri guna memperluas akses studi lanjut bagi para lulusan.'
];

const coreValues = [
  {
    number: '01',
    title: 'Akidah & Adab',
    desc: 'Menjadi pondasi utama dalam setiap tindakan, perkataan, dan pola interaksi keseharian seluruh civitas akademika.'
  },
  {
    number: '02',
    title: 'Keunggulan Akademik',
    desc: 'Senantiasa mengejar standar mutu tertinggi dalam penguasaan sains, teknologi, dan ketajaman riset ilmiah.'
  },
  {
    number: '03',
    title: 'Integritas & Amanah',
    desc: 'Menjunjung tinggi kejujuran, komitmen moral, dan transparansi dalam seluruh aspek kehidupan dan tata kelola.'
  },
  {
    number: '04',
    title: 'Kepemimpinan Mandiri',
    desc: 'Melatih inisiatif mandiri, ketangguhan mental, kepeloporan, serta empati sosial terhadap problematika umat.'
  },
  {
    number: '05',
    title: 'Wawasan Global',
    desc: 'Membuka cakrawala pemikiran inklusif dan berdaya saing global tanpa kehilangan akar identitas kearifan lokal.'
  },
  {
    number: '06',
    title: 'Keberlanjutan & Manfaat',
    desc: 'Mendedikasikan segenap potensi ilmu pengetahuan demi kemaslahatan masyarakat dan kelestarian alam ciptaan-Nya.'
  }
];

const filosofiPoints = [
  {
    title: 'Karakter & Fitrah Pembelajar',
    desc: 'Memandang setiap santri sebagai anugerah unik dengan potensi fitrah yang siap ditumbuhkembangkan secara bermartabat.'
  },
  {
    title: 'Subjek Belajar Aktif',
    desc: 'Menempatkan santri sebagai pemeran utama dalam mengeksplorasi ilmu, bukan sekadar penampung informasi pasif.'
  },
  {
    title: 'Riset & Nalar Kritis',
    desc: 'Mengintegrasikan penyelidikan ilmiah objektif dengan hikmah kebijaksanaan untuk memecahkan problem nyata.'
  },
  {
    title: 'Kecakapan Hidup Adaptif',
    desc: 'Membekali santri dengan ketahanan mental, kerja tim, dan kepemimpinan untuk menjawab dinamika masa depan.'
  }
];

export default function VisiMisi() {
  return (
    <ProfilLayout
      title="Visi dan Misi"
      bannerImage="/assets/wisuda.jpg"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-24">
        {/* 1. SEKSI VISI (Editorial Pull-Quote Style - Pusat Perhatian Utama) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Visi Institusi
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Terwujudnya Generasi Pembelajar yang Berakhlak Mulia, Unggul dalam Sains &amp; Teknologi, serta Berjiwa Kepemimpinan Berwawasan Global.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Visi ini adalah kompas moral dan intelektual yang mengarahkan setiap nafas pendidikan, keteladanan pendidik, serta ikhtiar kami dalam mengantarkan santri menuju puncak potensi kemanusiaannya.
            </p>
          </div>
        </section>

        {/* 2. SEKSI MISI (Editorial Split Layout: 1/3 Kolom Kiri Sticky, 2/3 Kolom Kanan) */}
        <section className="pb-16 sm:pb-20 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri (1/3 Lebar - Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Langkah Strategis
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Misi Sekolah
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Pilar operasional untuk menterjemahkan visi luhur ke dalam program nyata dan pembiasaan hidup harian.
                </p>
              </div>
            </div>

            {/* Kolom Kanan (2/3 Lebar) */}
            <div className="md:col-span-8 space-y-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Sekolah kami berkomitmen menyelenggarakan ekosistem pendidikan menyeluruh dalam lingkungan yang kondusif, berupaya mengembangkan potensi setiap peserta didik secara optimal melalui lima pilar misi:
              </p>

              <div className="space-y-4 pt-2">
                {misiList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 sm:p-5 border border-gray-100 bg-[#fafafa]"
                  >
                    <span className="text-base font-bold font-philosopher text-[#1b5f63] flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. SEKSI NILAI-NILAI UTAMA (Editorial Split Layout + 2-Column Minimalist Grid dengan Tipografi '01', '02') */}
        <section className="pb-16 sm:pb-20 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri (1/3 Lebar - Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Fondasi Karakter
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Nilai-Nilai Utama
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Prinsip fundamental yang menjiwai seluruh interaksi belajar mengajar, pengasuhan santri, dan tata kelola lembaga.
                </p>
              </div>
            </div>

            {/* Kolom Kanan (2/3 Lebar - Minimalist 2-Column Grid) */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="pt-4 border-t border-gray-200">
                    <span className="text-xs font-mono font-bold text-[#1b5f63] block mb-2">
                      {val.number}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 font-maven mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEKSI FILOSOFI PENDIDIKAN (Editorial Split Layout) */}
        <section className="pb-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri (1/3 Lebar - Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Paradigma Belajar
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Filosofi Pendidikan
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Pendekatan humanis dan holistik untuk melahirkan generasi pembelajar sepanjang hayat.
                </p>
              </div>
            </div>

            {/* Kolom Kanan (2/3 Lebar) */}
            <div className="md:col-span-8 space-y-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Dipandu oleh visi, misi, dan nilai-nilai luhur institusi, pendidikan di sekolah kami meyakini bahwa setiap santri adalah amanah yang memiliki keunikan potensi fitrah. Proses pembelajaran dirancang tidak hanya untuk transfer pengetahuan kognitif, melainkan penanaman adab dan kecakapan hidup:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {filosofiPoints.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-[#1b5f63] pl-4 py-1">
                    <h4 className="font-bold text-gray-900 text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProfilLayout>
  );
}
