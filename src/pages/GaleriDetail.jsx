import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EditorialPageLayout from '../components/EditorialPageLayout';
import { fetchGalleryById, fetchGallery } from '../lib/supabase';
import { Calendar, MapPin, ArrowLeft, ArrowRight, Tag } from 'lucide-react';

export default function GaleriDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDetail() {
      setLoading(true);
      try {
        const [current, all] = await Promise.all([
          fetchGalleryById(id),
          fetchGallery(),
        ]);
        setItem(current);
        if (all && all.length > 0) {
          const others = all
            .filter((i) => String(i.id) !== String(id))
            .slice(0, 3);
          setRelatedItems(others);
        }
      } catch (err) {
        console.error('Error fetching gallery detail:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Memuat Dokumentasi...
        </p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold font-philosopher text-gray-900 mb-2">
          Dokumentasi Tidak Ditemukan
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Foto atau arsip kegiatan yang Anda cari mungkin telah dipindahkan.
        </p>
        <Link
          to="/galeri"
          className="inline-flex items-center gap-2 bg-[#1b5f63] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#144246] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Galeri</span>
        </Link>
      </div>
    );
  }

  return (
    <EditorialPageLayout
      title={item.title}
      category="Dokumentasi Kegiatan"
      bannerImage={item.image || '/assets/wisuda.jpg'}
      breadcrumbCurrent={item.title}
      hideMainTitle={true}
    >
      <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
        
        {/* Tombol Kembali & Meta Bar */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-gray-100">
          <Link
            to="/galeri"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#1b5f63] transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Galeri</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span className="bg-[#1b5f63] text-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">
              {item.category || 'Dokumentasi'}
            </span>
            {item.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{item.date}</span>
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{item.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Judul Utama Dokumentasi */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-tight">
            {item.title}
          </h1>
          <div className="w-16 h-1 bg-[#1b5f63] mt-4" />
        </div>

        {/* Foto Dokumentasi Utama (Resolusi Besar & Tajam) */}
        <div className="border border-gray-200 overflow-hidden bg-gray-100 shadow-xs">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[550px] object-cover object-center"
          />
        </div>

        {/* Detail & Narasi Kegiatan */}
        <div className="bg-white border border-gray-200 p-6 sm:p-10 space-y-6 shadow-xs">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
              Laporan Kegiatan
            </span>
            <h2 className="text-xl font-bold font-philosopher text-gray-900">
              Catatan &amp; Rangkaian Momen
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify sm:text-left">
            {item.description ||
              'Dokumentasi resmi merekam antusiasme, ketertiban, dan kebersamaan seluruh civitas akademika dalam menyukseskan agenda institusi ini. Setiap momen menjadi bagian dari sejarah dan ikhtiar bersama dalam mencetak generasi berkarakter unggul.'}
          </p>

          <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
            <Tag className="w-3.5 h-3.5 text-[#1b5f63]" />
            <span>Kategori Arsip: <strong className="text-gray-800">{item.category}</strong></span>
          </div>
        </div>

        {/* Dokumentasi Terkait Lainnya */}
        {relatedItems.length > 0 && (
          <section className="pt-8 border-t border-gray-200 space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-1">
                  Arsip Lainnya
                </span>
                <h3 className="text-xl font-bold font-philosopher text-gray-900">
                  Dokumentasi Terkait
                </h3>
              </div>
              <Link
                to="/galeri"
                className="text-xs font-bold uppercase tracking-wider text-[#1b5f63] hover:text-[#144246] transition inline-flex items-center gap-1"
              >
                <span>Lihat Semua</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/galeri/${rel.id}`}
                  className="bg-white border border-gray-200 hover:border-[#1b5f63] transition duration-300 group flex flex-col justify-between shadow-xs"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={rel.image || rel.image_url}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1b5f63] block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-[#1b5f63] transition line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </EditorialPageLayout>
  );
}
