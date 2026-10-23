import React, { useState } from 'react';
import EditorialPageLayout from '../components/EditorialPageLayout';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { schoolConfig } from '../schoolConfig';

export default function Kontak() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Informasi Pendaftaran PPDB',
    message: ''
  });

  const categoryOptions = [
    'Informasi Pendaftaran PPDB',
    'Kurikulum & Program Pembelajaran',
    'Fasilitas & Asrama Santri',
    'Biaya Pendidikan & Beasiswa',
    'Kemitraan & Kerjasama Institusi',
    'Lainnya'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const waMsg = `*PESAN DARI WEBSITE ${schoolConfig.name.toUpperCase()}*
--------------------------------------------------
*Nama:* ${formData.name}
*No. HP/WA:* ${formData.phone}
*Email:* ${formData.email || '-'}
*Kategori:* ${formData.subject}
*Pesan:*
${formData.message}
--------------------------------------------------`;

    const encoded = encodeURIComponent(waMsg);
    window.open(`https://wa.me/${schoolConfig.contact.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <EditorialPageLayout
      title="Hubungi Kami"
      category="Pusat Informasi &amp; Layanan"
      bannerImage="/assets/foto_sekolah.jpg"
      breadcrumbCurrent="Kontak"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-20">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Layanan Informasi
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Kami Siap Mendengar dan Menyambut Kehadiran Anda di Kampus Kami.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Silakan hubungi sekretariat lembaga untuk konsultasi pendaftaran peserta didik baru, jadwal tur kampus, kemitraan akademik, atau pertanyaan umum seputar program pendidikan kami.
            </p>
          </div>
        </section>

        {/* 2. SEKSI EDITORIAL SPLIT LAYOUT (Kontak & Formulir Pesan) */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Kolom Kiri 1/3 (Informasi Lembaga & Kontak - Sticky) */}
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                    Kontak Resmi
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900">
                    Sekretariat Sekolah
                  </h2>
                  <div className="w-12 h-1 bg-[#1b5f63] mt-3 mb-6" />
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#1b5f63] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-0.5">Alamat Kampus</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {schoolConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#1b5f63] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-0.5">Telepon &amp; WhatsApp</h3>
                      <p className="text-gray-600">{schoolConfig.contact.phone}</p>
                      <p className="text-[#1b5f63] font-semibold">{schoolConfig.contact.whatsappDisplay}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#1b5f63] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-0.5">Email Korespondensi</h3>
                      <p className="text-gray-600">{schoolConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#1b5f63] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-0.5">Jam Layanan</h3>
                      <p className="text-gray-600">{schoolConfig.contact.jamKerja}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan 2/3 (Formulir Pengiriman Pesan) */}
            <div className="md:col-span-8">
              <div className="bg-white border border-gray-200 p-6 sm:p-10 shadow-xs">
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-xl font-bold font-philosopher text-gray-900">
                    Kirim Pesan atau Pertanyaan
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Silakan isi formulir di bawah ini. Tim kami akan segera menindaklanjuti pesan Anda.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Nomor WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 08123456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="Contoh: budi@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                    />
                  </div>

                  {/* Custom Dropdown Kategori */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Topik Pesan <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setSelectOpen(!selectOpen)}
                      className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 text-left flex items-center justify-between focus:outline-none focus:border-[#1b5f63]"
                    >
                      <span>{formData.subject}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${selectOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {selectOpen && (
                      <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-50 py-1">
                        {categoryOptions.map((opt, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, subject: opt });
                              setSelectOpen(false);
                            }}
                            className={`px-4 py-2.5 text-xs cursor-pointer transition ${
                              formData.subject === opt
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
                      Isi Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda tanyakan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-300 p-3 text-xs text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1b5f63] text-white hover:bg-[#144246] py-3 text-xs font-bold uppercase tracking-wider transition"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PETA LOKASI KAMPUS */}
        <section className="pt-10 border-t border-gray-100">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
              Navigasi Kampus
            </span>
            <h3 className="text-xl font-bold font-philosopher text-gray-900">
              Peta Lokasi Sekolah
            </h3>
            <div className="w-12 h-1 bg-[#1b5f63] mt-2 mb-4" />
            <p className="text-xs sm:text-sm text-gray-500">
              Kunjungi langsung kampus kami di Kota Batu, Jawa Timur.
            </p>
          </div>

          <div className="border border-gray-200 overflow-hidden h-80 sm:h-96 bg-gray-100">
            <iframe
              src={schoolConfig.contact.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Sekolah"
            />
          </div>
        </section>
      </div>
    </EditorialPageLayout>
  );
}
