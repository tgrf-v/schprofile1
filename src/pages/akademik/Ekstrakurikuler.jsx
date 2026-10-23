import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AkademikLayout from '../../components/AkademikLayout';
import { Calendar, Users } from 'lucide-react';

const ekskulList = [
  {
    id: 1,
    name: 'Pramuka Inti & Kepanduan Hizbul Wathan',
    category: 'Kepemimpinan',
    image: '/assets/pramuka.jpg',
    schedule: 'Sabtu, 08.00 - 11.00 WIB',
    pembina: 'Kak Hendra Kurniawan, S.Pd.',
    desc: 'Wadah pembentukan kemandirian, kedisiplinan baris-berbaris, survival alam terbuka, tali temali, dan jiwa kepemimpinan kesatria.'
  },
  {
    id: 2,
    name: 'Futsal & Sepak Bola Prestasi',
    category: 'Olahraga',
    image: '/assets/olahraga.jpg',
    schedule: 'Selasa & Jumat, 16.00 - 17.30 WIB',
    pembina: 'Coach Rian Firmansyah, S.Or.',
    desc: 'Penggemblengan fisik, teknik dasar passing, shooting, dan taktik beregu guna persiapan liga santri dan kejuaraan antar-sekolah regional.'
  },
  {
    id: 3,
    name: 'Klub Robotik, IoT & Rekayasa Komputer',
    category: 'Sains & Teknologi',
    image: '/assets/robotik.jpg',
    schedule: 'Rabu & Sabtu, 15.30 - 17.00 WIB',
    pembina: 'Budi Santoso, S.Kom., M.T.',
    desc: 'Pembelajaran perakitan robot line follower, mikroprosesor Arduino, otomasi IoT sederhana, dan persiapan turnamen robotik nasional.'
  },
  {
    id: 4,
    name: 'Seni Musik, Saman & Hadrah Kontemporer',
    category: 'Seni & Bahasa',
    image: '/assets/kesenian.jpg',
    schedule: 'Kamis, 16.00 - 17.30 WIB',
    pembina: 'Ustadzah Nurul Hidayati, S.Sn.',
    desc: 'Pengasahan kepekaan estetika dan kecintaan seni budaya Islam melalui harmoni rebana hadrah, vokal qasidah, dan gerak tari tradisional.'
  },
  {
    id: 5,
    name: 'Karya Ilmiah Remaja (KIR) & Sains Club',
    category: 'Sains & Teknologi',
    image: '/assets/lab_komputer.jpg',
    schedule: 'Senin & Kamis, 16.00 - 17.15 WIB',
    pembina: 'Dr. Retno Wulandari, M.Si.',
    desc: 'Eksperimen laboratorium terapan, metodologi riset ilmiah, observasi lingkungan hidup, dan publikasi jurnal penelitian siswa.'
  },
  {
    id: 6,
    name: 'Palang Merah Remaja (PMR) & KSR',
    category: 'Kepemimpinan',
    image: '/assets/uks.jpg',
    schedule: 'Rabu, 16.00 - 17.30 WIB',
    pembina: 'dr. Siti Aminah',
    desc: 'Pelatihan pertolongan pertama pada kecelakaan (P3K), kesiapsiagaan bencana, donor darah, dan edukasi hidup sehat.'
  },
  {
    id: 7,
    name: 'Basket Club & Atletik',
    category: 'Olahraga',
    image: '/assets/lapangan.jpg',
    schedule: 'Senin & Kamis, 16.00 - 17.30 WIB',
    pembina: 'Coach Dimas Prasetya',
    desc: 'Pembinaan kebugaran jasmani, kelincahan, sportivitas tim basket, serta teknik lari cepat dan lompat jauh.'
  },
  {
    id: 8,
    name: 'English & Arabic Public Speaking',
    category: 'Seni & Bahasa',
    image: '/assets/news2.jpg',
    schedule: 'Selasa & Sabtu, 19.30 - 20.30 WIB',
    pembina: 'Mr. Faisal Akbar, M.Ed.',
    desc: 'Pelatihan pidato 3 bahasa, debat parlementer, storytelling, dan penguasaan teknik retorika panggung di hadapan audiens luas.'
  }
];

export default function Ekstrakurikuler() {
  const [activeTab, setActiveTab] = useState('Semua');

  const categories = ['Semua', 'Kepemimpinan', 'Olahraga', 'Sains & Teknologi', 'Seni & Bahasa'];

  const filteredEkskul = ekskulList.filter((item) =>
    activeTab === 'Semua' ? true : item.category === activeTab
  );

  return (
    <AkademikLayout
      title="Ekstrakurikuler"
      bannerImage="/assets/olahraga.jpg"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-20">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Pengembangan Diri
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Eksplorasi Minat, Penempaan Kepemimpinan, dan Pembentukan Ketangguhan Karakter Siswa.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Setiap santri didorong untuk memilih minimal satu ekstrakurikuler kepanduan wajib dan satu kegiatan peminatan mandiri. Seluruh aktivitas dibina secara profesional oleh instruktur berlisensi di bidangnya masing-masing.
            </p>
          </div>
        </section>

        {/* 2. FILTER KATEGORI MINIMALIS */}
        <section>
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-xs font-semibold transition border ${
                  activeTab === cat
                    ? 'bg-[#1b5f63] text-white border-[#1b5f63]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#1b5f63]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID KARTU EKSTRAKURIKULER (Modern Editorial Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {filteredEkskul.map((ekskul) => (
              <div
                key={ekskul.id}
                className="bg-white border border-gray-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden bg-gray-100 relative">
                    <img
                      src={ekskul.image}
                      alt={ekskul.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/gedung_sekolah.jpg';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-[#1b5f63] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                      {ekskul.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1b5f63] transition font-maven mb-2">
                      {ekskul.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {ekskul.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#1b5f63] flex-shrink-0" />
                    <span>{ekskul.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#1b5f63] flex-shrink-0" />
                    <span>Pembina: <strong className="text-gray-800 font-medium">{ekskul.pembina}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CALLOUT FASILITAS PENDUKUNG */}
        <section className="p-8 sm:p-10 border border-gray-200 bg-gray-50/70">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl font-bold font-philosopher text-gray-900">
                Sarana Latihan Berstandar Nasional
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Didukung sarana lapangan futsal sintetis, aula serbaguna, studio musik, serta lab komputasi untuk memaksimalkan potensi kompetisi santri.
              </p>
            </div>
            <Link
              to="/fasilitas"
              className="bg-[#1b5f63] text-white hover:bg-[#144246] px-5 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition"
            >
              Lihat Fasilitas
            </Link>
          </div>
        </section>
      </div>
    </AkademikLayout>
  );
}
