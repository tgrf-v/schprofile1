import React, { useState } from 'react';
import EditorialPageLayout from '../components/EditorialPageLayout';
import {
  FileText,
  CreditCard,
  UserCheck,
  CheckCircle,
  MessageCircle,
  PhoneCall,
  ChevronDown
} from 'lucide-react';
import { schoolConfig } from '../schoolConfig';

export default function PPDB() {
  const [formData, setFormData] = useState({
    namaSantri: '',
    jenisKelamin: 'Laki-laki',
    jenjang: 'SMP / MTs Boarding School',
    sekolahAsal: '',
    namaOrtu: '',
    noWhatsapp: '',
    kotaAsal: '',
    catatan: ''
  });

  const [genderOpen, setGenderOpen] = useState(false);
  const [jenjangOpen, setJenjangOpen] = useState(false);

  const genderOptions = ['Laki-laki', 'Perempuan'];
  const jenjangOptions = [
    'SMP / MTs Boarding School',
    'SMA / MA Boarding School',
    'Program Takhasus Tahfidz'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*FORMULIR PENDAFTARAN SANTRI BARU (PPDB ${schoolConfig.ppdb.tahunAjaran})*
--------------------------------------------------
*Nama Calon Santri:* ${formData.namaSantri}
*Jenis Kelamin:* ${formData.jenisKelamin}
*Jenjang Dituju:* ${formData.jenjang}
*Sekolah Asal:* ${formData.sekolahAsal || '-'}
*Nama Orang Tua/Wali:* ${formData.namaOrtu}
*No. WhatsApp:* ${formData.noWhatsapp}
*Kota Domisili:* ${formData.kotaAsal}
*Catatan Tambahan:* ${formData.catatan || '-'}
--------------------------------------------------
Mohon panduan jadwal seleksi dan petunjuk kelengkapan berkas selanjutnya. Terima kasih.`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${schoolConfig.contact.whatsapp}?text=${encoded}`;
    window.open(waUrl, '_blank');
  };

  return (
    <EditorialPageLayout
      title="Penerimaan Siswa Baru"
      category="Pendaftaran Santri Baru"
      bannerImage="/assets/upacara.jpg"
      breadcrumbCurrent="PPDB"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-20">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Tahun Ajaran {schoolConfig.ppdb.tahunAjaran}
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Membuka Pintu Pembelajaran Holistik untuk Melahirkan Generasi Pemimpin Beradab dan Berprestasi Dunia.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Bergabunglah bersama keluarga besar {schoolConfig.name}. Kami berkomitmen mengawal tumbuh kembang santri melalui integrasi kurikulum sains modern, kurikulum Cambridge, serta tarbiyah Al-Qur'an dan adab 24 jam.
            </p>
          </div>
        </section>

        {/* 2. ALUR PENDAFTARAN (Modern Editorial 4-Step Rhythm) */}
        <section>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
              Prosedur Seleksi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
              Alur Pendaftaran Siswa Baru
            </h2>
            <div className="w-12 h-1 bg-[#1b5f63] mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="pt-5 border-t border-gray-200">
              <span className="text-xs font-mono font-bold text-[#1b5f63] block mb-2">01</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">Registrasi Biodata</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Mengisi formulir data calon santri dan melengkapi berkas administrasi dasar sekolah secara online.
              </p>
            </div>

            <div className="pt-5 border-t border-gray-200">
              <span className="text-xs font-mono font-bold text-[#1b5f63] block mb-2">02</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">Biaya Seleksi</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Penyelesaian biaya seleksi masuk sebesar <strong>{schoolConfig.ppdb.biayaPendaftaran}</strong> ke rekening resmi yayasan.
              </p>
            </div>

            <div className="pt-5 border-t border-gray-200">
              <span className="text-xs font-mono font-bold text-[#1b5f63] block mb-2">03</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">Observasi &amp; Wawancara</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Uji potensi akademik, tes membaca Al-Qur'an, dan sesi wawancara komitmen pengasuhan orang tua santri.
              </p>
            </div>

            <div className="pt-5 border-t border-gray-200">
              <span className="text-xs font-mono font-bold text-[#1b5f63] block mb-2">04</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">Daftar Ulang</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Pengumuman hasil kelulusan seleksi dan konfirmasi administrasi santri baru tahun ajaran {schoolConfig.ppdb.tahunAjaran}.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SYARAT & JADWAL GELOMBANG (Editorial Split Layout) */}
        <section className="pt-10 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                  Ketentuan Berkas
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                  Syarat Administrasi
                </h2>
                <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-4" />
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Pastikan dokumen terlampir lengkap sebelum mengikuti tahap observasi santri.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6">
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1b5f63] mt-1.5 flex-shrink-0" />
                  <span>Fotokopi Rapor 2 semester terakhir yang telah dilegalisasi sekolah asal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1b5f63] mt-1.5 flex-shrink-0" />
                  <span>Fotokopi Akta Kelahiran dan Kartu Keluarga (KK) calon santri.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1b5f63] mt-1.5 flex-shrink-0" />
                  <span>Pas foto berwarna calon santri ukuran 3x4 (3 lembar latar belakang merah/biru).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1b5f63] mt-1.5 flex-shrink-0" />
                  <span>Surat keterangan sehat jasmani dan bebas narkoba dari fasilitas kesehatan resmi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1b5f63] mt-1.5 flex-shrink-0" />
                  <span>Surat rekomendasi kelakuan baik dari madrasah atau sekolah asal.</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-gray-100">
                <div className="p-4 bg-emerald-50 border border-emerald-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-[#1b5f63] text-sm">Gelombang 1 (Jalur Unggulan)</span>
                    <span className="bg-[#1b5f63] text-white text-[10px] px-2 py-0.5 font-bold uppercase">
                      DIBUKA
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">Jadwal: {schoolConfig.ppdb.gelombang1}</p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Tersedia potongan infak pengembangan bagi pendaftar jalur prestasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FORMULIR PENDAFTARAN CEPAT */}
        <section className="pt-8 border-t border-gray-100">
          <div className="bg-white border border-gray-200 p-6 sm:p-10 shadow-xs">
            <div className="mb-6 pb-4 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-1">
                Akses Kilat
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-philosopher text-gray-900">
                Formulir Pendaftaran Online
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Data yang diisi akan otomatis diteruskan ke WhatsApp Sekretariat PPDB untuk penjadwalan tes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Nama Calon Santri <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="namaSantri"
                    placeholder="Contoh: Muhammad Rayhan"
                    value={formData.namaSantri}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>

                {/* Jenis Kelamin */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setGenderOpen(!genderOpen);
                      setJenjangOpen(false);
                    }}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 text-left flex items-center justify-between focus:outline-none focus:border-[#1b5f63]"
                  >
                    <span>{formData.jenisKelamin}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 ${genderOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {genderOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-50 py-1">
                      {genderOptions.map((opt, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setFormData({ ...formData, jenisKelamin: opt });
                            setGenderOpen(false);
                          }}
                          className={`px-4 py-2.5 text-xs cursor-pointer ${
                            formData.jenisKelamin === opt
                              ? 'bg-emerald-50 text-[#1b5f63] font-bold'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Jenjang */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Jenjang Pendidikan <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setJenjangOpen(!jenjangOpen);
                      setGenderOpen(false);
                    }}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 text-left flex items-center justify-between focus:outline-none focus:border-[#1b5f63]"
                  >
                    <span>{formData.jenjang}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 ${jenjangOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {jenjangOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-50 py-1">
                      {jenjangOptions.map((opt, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setFormData({ ...formData, jenjang: opt });
                            setJenjangOpen(false);
                          }}
                          className={`px-4 py-2.5 text-xs cursor-pointer ${
                            formData.jenjang === opt
                              ? 'bg-emerald-50 text-[#1b5f63] font-bold'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Sekolah Asal Sebelumnya
                  </label>
                  <input
                    type="text"
                    name="sekolahAsal"
                    placeholder="Contoh: SD Islam / SMP Negeri 1"
                    value={formData.sekolahAsal}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Nama Orang Tua / Wali <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="namaOrtu"
                    placeholder="Nama ayah atau ibu"
                    value={formData.namaOrtu}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="noWhatsapp"
                    placeholder="Contoh: 081234567890"
                    value={formData.noWhatsapp}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Kota / Kabupaten Domisili <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="kotaAsal"
                    placeholder="Contoh: Surabaya / Malang / Jakarta"
                    value={formData.kotaAsal}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Catatan Tambahan
                  </label>
                  <input
                    type="text"
                    name="catatan"
                    placeholder="Opsional, misal: Jadwal survei asrama"
                    value={formData.catatan}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#1b5f63] text-white hover:bg-[#144246] px-8 py-3 text-xs font-bold uppercase tracking-wider transition"
                >
                  Kirim Data Pendaftaran
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </EditorialPageLayout>
  );
}
