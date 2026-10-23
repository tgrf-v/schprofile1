import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight
} from 'lucide-react';
import {
  newsUpdates,
  karyaInspiratif,
  announcements as fallbackAnnouncements,
  partners
} from '../data';
import { fetchArticles, fetchAnnouncements } from '../lib/supabase';
import InstitutionalWelcome from '../components/InstitutionalWelcome';
import NewsBentoGrid from '../components/NewsBentoGrid';
import PartnershipSlider from '../components/PartnershipSlider';

export default function Home() {
  const [articles, setArticles] = useState(newsUpdates);
  const [announcementsList, setAnnouncementsList] = useState(fallbackAnnouncements);

  useEffect(() => {
    async function loadData() {
      try {
        const [liveNews, liveAnn] = await Promise.all([
          fetchArticles(),
          fetchAnnouncements(),
        ]);
        if (liveNews && liveNews.length > 0) setArticles(liveNews);
        if (liveAnn && liveAnn.length > 0) setAnnouncementsList(liveAnn);
      } catch (err) {
        console.error('Error loading home data:', err);
      }
    }
    loadData();
  }, []);

  return (
    <div>
      {/* 1. HERO SECTION WITH IMAGE (Full 1 Viewport Screen) */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden border-b border-gray-200">
        <img
          src="/assets/foto_sekolah.jpg"
          alt="Gedung Utama Sekolah"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* 2. SAMBUTAN SINGKAT KEPALA SEKOLAH (Editorial Split Layout) */}
      <InstitutionalWelcome />

      {/* 3. BERITA & ACARA SECTION (ACS Jakarta Inspired Asymmetrical Bento Grid) */}
      <section id="berita" className="py-14 bg-[#f4f5f7] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8">
            <div>
              <span className="text-xs text-[#1b5f63] font-semibold tracking-wider italic block mb-1">
                Informasi Terbaru
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-philosopher">
                BERITA & ACARA
              </h2>
            </div>
            <Link
              to="/berita"
              className="text-xs font-bold text-[#b91c1c] hover:text-[#991b1b] transition inline-flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span>Lihat Semua Berita dan Acara</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <NewsBentoGrid articles={articles} />
        </div>
      </section>

      {/* 4. TWO-COLUMN: KARYA INSPIRATIF & ANNOUNCEMENT (Clean Minimalist Style) */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Left: Karya Inspiratif */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1b5f63] font-philosopher inline-block relative pb-2">
                  Karya Inspiratif
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#1b5f63]"></span>
                </h3>
              </div>

              <div className="space-y-5">
                {karyaInspiratif.map((item) => (
                  <Link
                    key={item.id}
                    to={`/berita/${100 + item.id}`}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden flex-shrink-0 bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-[#1b5f63] transition-colors mb-1.5 font-maven">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Announcement */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1b5f63] font-philosopher inline-block relative pb-2">
                  Announcement
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#1b5f63]"></span>
                </h3>
              </div>

              <div className="space-y-5">
                {announcementsList.map((item) => (
                  <Link
                    key={item.id}
                    to={`/berita/${200 + item.id}`}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden flex-shrink-0 bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-[#1b5f63] transition-colors mb-1.5 font-maven">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIP SECTION (Smooth Auto-Sliding Carousel, No Boxes) */}
      <section className="py-14 bg-[#fafbfc] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b5f63] font-philosopher inline-block relative pb-2">
              Partnership
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#1b5f63]"></span>
            </h2>
          </div>

          <PartnershipSlider partners={partners} />
        </div>
      </section>
    </div>
  );
}
