import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditorialPageLayout from '../components/EditorialPageLayout';
import { newsUpdates, karyaInspiratif, announcements } from '../data';
import { fetchArticles } from '../lib/supabase';
import { Calendar, User, Search } from 'lucide-react';

export default function Berita() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [articlesList, setArticlesList] = useState(newsUpdates);

  useEffect(() => {
    async function loadLiveNews() {
      try {
        const live = await fetchArticles();
        if (live && live.length > 0) {
          setArticlesList(live);
        }
      } catch (err) {
        console.error('Error fetching live articles:', err);
      }
    }
    loadLiveNews();
  }, []);

  // Combine articles for rich news listing
  const allArticles = [
    ...articlesList.map((n) => ({ ...n, type: 'berita', author: n.author || 'Humas Sekolah' })),
    ...karyaInspiratif.map((k) => ({
      ...k,
      id: 100 + k.id,
      category: k.author || 'Karya Siswa',
      author: k.author || 'Civitas Santri'
    })),
    ...announcements.map((a) => ({
      ...a,
      id: 200 + a.id,
      category: a.category || 'Pengumuman',
      author: 'Sekretariat Lembaga'
    }))
  ];

  const categories = ['Semua', 'Alumni & Prestasi', 'Agenda', 'Akademik', 'Karya Siswa', 'Pengumuman'];

  const filteredArticles = allArticles.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Semua' ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredStory = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <EditorialPageLayout
      title="Berita &amp; Agenda"
      category="Warta &amp; Publikasi"
      bannerImage="/assets/news1.jpg"
      breadcrumbCurrent="Berita &amp; Agenda"
      hideMainTitle={true}
    >
      <div className="space-y-16 sm:space-y-20">
        {/* 1. SEKSI INTRO EDITORIAL (Pull-Quote) */}
        <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63]">
                Pusat Informasi
              </span>
              <span className="w-8 h-px bg-[#1b5f63]" />
            </div>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug tracking-tight">
              “Kabar Terkini, Dinamika Prestasi, dan Wawasan Inspiratif Civitas Akademika.”
            </blockquote>

            <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
              Ikuti catatan perkembangan program pendidikan, torehan prestasi membanggakan santri, serta agenda penting kegiatan lembaga melalui publikasi warta resmi sekolah kami.
            </p>
          </div>
        </section>

        {/* 2. FILTER & PENCARIAN MINIMALIS */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 pb-6 border-b border-gray-100">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold transition border ${
                    selectedCategory === cat
                      ? 'bg-[#1b5f63] text-white border-[#1b5f63]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#1b5f63]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Input Pencarian Bersih */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 py-2 pl-3.5 pr-9 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1b5f63]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>
          </div>

          {/* 3. FEATURED LEAD STORY (Editorial Spotlight) */}
          {featuredStory && (
            <div className="pt-2 pb-10 border-b border-gray-100">
              <Link
                to={`/berita/${featuredStory.id}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 h-72 sm:h-96 overflow-hidden bg-gray-100">
                  <img
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/gedung_sekolah.jpg';
                    }}
                  />
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-[#1b5f63] uppercase tracking-wider">
                      {featuredStory.category}
                    </span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-500">{featuredStory.date}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-philosopher text-gray-900 group-hover:text-[#1b5f63] transition leading-snug">
                    {featuredStory.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {featuredStory.excerpt}
                  </p>

                  <div className="pt-2 text-xs font-bold text-[#1b5f63] uppercase tracking-wider group-hover:underline">
                    Baca Selengkapnya
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* 4. GRID BERITA LAINNYA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {remainingArticles.map((article) => (
              <Link
                key={article.id}
                to={`/berita/${article.id}`}
                className="group bg-white border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/gedung_sekolah.jpg';
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2">
                      <span className="font-bold text-[#1b5f63] uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#1b5f63] transition font-maven line-clamp-2 mb-2">
                      {article.title}
                    </h4>

                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2 text-xs font-bold text-[#1b5f63] uppercase tracking-wider">
                  Baca Selengkapnya
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 text-gray-500 text-sm">
              Tidak ada artikel yang cocok dengan pencarian Anda.
            </div>
          )}
        </section>
      </div>
    </EditorialPageLayout>
  );
}
