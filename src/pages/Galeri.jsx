import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditorialPageLayout from '../components/EditorialPageLayout';
import { galleryItems } from '../data';
import { fetchGallery } from '../lib/supabase';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Galeri() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [items, setItems] = useState(galleryItems);

  useEffect(() => {
    async function loadLiveGallery() {
      try {
        const live = await fetchGallery();
        if (live && live.length > 0) {
          // Normalize image property name
          const normalized = live.map((item) => ({
            ...item,
            image: item.image_url || item.image,
          }));
          setItems(normalized);
        }
      } catch (err) {
        console.error('Error fetching gallery:', err);
      }
    }
    loadLiveGallery();
  }, []);

  const categories = ['Semua', 'Upacara', 'Prestasi', 'Wisuda', 'Akademik', 'Fasilitas', 'Kesiswaan'];

  const filteredItems = items.filter((item) =>
    activeFilter === 'Semua' ? true : item.category === activeFilter
  );

  return (
    <EditorialPageLayout
      title="Galeri Dokumentasi"
      category="Dokumentasi Visual"
      bannerImage="/assets/wisuda.jpg"
      breadcrumbCurrent="Galeri"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-20">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Arsip Kampus
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Merekam Jejak Momen Bersejarah, Perayaan Prestasi, dan Keseharian Santri.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Kumpulan dokumentasi fotografi resmi yang mengabadikan dedikasi belajar, kehangatan ukhuwah santri, serta semarak kegiatan institusi dari masa ke masa. Klik foto untuk membaca detail lengkap kegiatan.
            </p>
          </div>
        </section>

        {/* 2. FILTER KATEGORI */}
        <section className="space-y-8">
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold transition border cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#1b5f63] text-white border-[#1b5f63]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#1b5f63]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3. GRID GALERI DOKUMENTASI (Clickable Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/galeri/${item.id}`}
                className="bg-white border border-gray-200 hover:border-[#1b5f63] transition duration-300 group flex flex-col justify-between shadow-xs cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#1b5f63] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {item.date && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                        <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base font-maven leading-snug group-hover:text-[#1b5f63] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b5f63] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform duration-200">
                      <span>Lihat Dokumentasi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </EditorialPageLayout>
  );
}
