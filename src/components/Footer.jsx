import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  MessageCircle
} from 'lucide-react';
import { schoolConfig } from '../schoolConfig';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#e9ecef] text-gray-700 text-xs border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Col 1: Brand & Contact Info */}
            <div className="lg:col-span-1 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/assets/logo.png"
                  alt="Al-Izzah Logo"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div className="space-y-2 text-gray-600">
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1b5f63] mt-0.5 flex-shrink-0" />
                  <span>{schoolConfig.contact.phone} / {schoolConfig.contact.whatsappDisplay}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1b5f63] mt-0.5 flex-shrink-0" />
                  <span>{schoolConfig.contact.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1b5f63] flex-shrink-0" />
                  <span>{schoolConfig.contact.email}</span>
                </div>
              </div>

              {/* Social text links */}
              <div className="pt-2 text-[11px] text-gray-500 space-y-1">
                <div>Instagram: {schoolConfig.social.instagramHandle}</div>
                <div>YouTube: {schoolConfig.social.youtubeChannel}</div>
              </div>
            </div>

            {/* Col 2: Profil */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 font-maven uppercase tracking-wider">Profil</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/profil/sambutan" className="hover:text-[#1b5f63] transition">Sambutan Kepala Sekolah</Link></li>
                <li><Link to="/profil/visi-misi" className="hover:text-[#1b5f63] transition">Visi dan Misi</Link></li>
                <li><Link to="/profil/sejarah" className="hover:text-[#1b5f63] transition">Sejarah Singkat</Link></li>
                <li><Link to="/profil/guru" className="hover:text-[#1b5f63] transition">Guru & Tenaga Pendidik</Link></li>
              </ul>
            </div>

            {/* Col 3: Akademik */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 font-maven uppercase tracking-wider">Akademik</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/akademik/kurikulum" className="hover:text-[#1b5f63] transition">Kurikulum Pembelajaran</Link></li>
                <li><Link to="/akademik/ekskul" className="hover:text-[#1b5f63] transition">Ekstrakurikuler</Link></li>
                <li><Link to="/akademik/prestasi" className="hover:text-[#1b5f63] transition">Prestasi Siswa</Link></li>
                <li><Link to="/fasilitas" className="hover:text-[#1b5f63] transition">Fasilitas Sekolah</Link></li>
              </ul>
            </div>

            {/* Col 4: Layanan & PPDB */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 font-maven uppercase tracking-wider">Layanan</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/ppdb" className="hover:text-[#1b5f63] transition font-bold text-[#1b5f63]">Info PPDB Online</Link></li>
                <li><Link to="/berita" className="hover:text-[#1b5f63] transition">Berita & Pengumuman</Link></li>
                <li><Link to="/galeri" className="hover:text-[#1b5f63] transition">Galeri Foto Kegiatan</Link></li>
                <li><Link to="/kontak" className="hover:text-[#1b5f63] transition">Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Col 5: Visitor & Jam Kerja */}
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-3 font-maven uppercase tracking-wider">Jam Pelayanan</h4>
              <ul className="space-y-1.5 text-gray-600 text-xs">
                <li>Senin - Jumat: 07.00 - 15.30 WIB</li>
                <li>Sabtu: 07.30 - 12.00 WIB</li>
                <li className="text-gray-400">Minggu & Hari Libur: Tutup</li>
                <li className="pt-2 text-[11px] font-mono border-t border-gray-300">
                  Total Pengunjung: <span className="font-bold text-gray-900">165.734</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Sub-Footer */}
        <div className="bg-[#dfe3e6] py-4 border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[11px] text-gray-600">
            © 2025 Website Profil Sekolah Resmi. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button (Lingkaran / Circle) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-10 h-10 rounded-full bg-[#1b5f63] hover:bg-[#144246] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Floating WhatsApp Widget (Lingkaran dengan logo resmi WhatsApp yang expand ke kiri saat di-hover) */}
      <a
        href={`https://wa.me/${schoolConfig.contact.whatsapp}?text=Halo%20Admin%20Sekolah,%20saya%20ingin%20bertanya`}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi Kami via WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex flex-row-reverse items-center h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group p-3 hover:pr-4 hover:pl-3"
      >
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <img
            src="/assets/whatsapp.png"
            alt="WhatsApp"
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-2.5 transition-all duration-300 ease-in-out whitespace-nowrap font-bold text-xs tracking-wide overflow-hidden select-none">
          Hubungi Kami
        </span>
      </a>
    </>
  );
}
