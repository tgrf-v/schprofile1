import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Video, Play, X, ArrowRight } from 'lucide-react';

export default function NewsBentoGrid({ articles }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  if (!articles || articles.length === 0) return null;

  // Expecting 6 items matching ACS Jakarta 2:1:1 / 1:1:2 layout
  const item1 = articles[0]; // Top-left wide (Media / Image)
  const item2 = articles[1]; // Top-mid compact (Text)
  const item3 = articles[2]; // Top-right compact (Text)
  const item4 = articles[3]; // Bottom-left compact (Text)
  const item5 = articles[4] || articles[1]; // Bottom-mid compact (Text)
  const item6 = articles[5] || articles[0]; // Bottom-right wide (Video / Media)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* ROW 1 */}

        {/* 1. Card 1 (Top Left, 2-col wide): Full photo background with text overlay */}
        {item1 && (
          <article className="lg:col-span-2 relative h-[270px] sm:h-[310px] overflow-hidden group border border-gray-200 shadow-2xs">
            <Link to={`/berita/${item1.id}`} className="absolute inset-0 block">
              <img
                src={item1.image}
                alt={item1.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Dark protective panel for high text contrast without gradient */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-300" />
            </Link>

            {/* Top row: Category & Article Icon */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between pointer-events-none z-10">
              <span className="text-xs font-semibold text-white/95 uppercase tracking-wider drop-shadow-xs">
                {item1.category}
              </span>
              <FileText className="w-4 h-4 text-white/90 drop-shadow-xs" />
            </div>

            {/* Bottom row: Date & Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/65 backdrop-blur-xs z-10 border-t border-white/10">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                {item1.date}
              </span>
              <Link to={`/berita/${item1.id}`}>
                <h3 className="font-philosopher text-base sm:text-lg font-bold text-white group-hover:text-emerald-200 transition-colors leading-snug line-clamp-2">
                  {item1.title}
                </h3>
              </Link>
            </div>
          </article>
        )}

        {/* 2. Card 2 (Top Mid, 1-col): Minimalist Text Card */}
        {item2 && (
          <article className="lg:col-span-1 bg-white border border-gray-200 p-6 flex flex-col justify-between group hover:border-[#1b5f63] hover:shadow-md transition-all duration-300 h-[270px] sm:h-[310px] shadow-2xs">
            <div>
              <span className="text-xs text-gray-400 font-medium tracking-wide block">
                {item2.category}
              </span>
              <Link to={`/berita/${item2.id}`}>
                <h3 className="font-philosopher text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1b5f63] transition-colors leading-snug line-clamp-4 mt-3">
                  {item2.title}
                </h3>
              </Link>
            </div>

            <div className="pt-4">
              <div className="w-12 h-0.5 bg-gray-300 group-hover:bg-[#1b5f63] group-hover:w-16 transition-all duration-300 mb-2" />
              <Link
                to={`/berita/${item2.id}`}
                className="text-xs text-gray-500 group-hover:text-[#1b5f63] font-semibold transition-colors block"
              >
                Selengkapnya
              </Link>
            </div>
          </article>
        )}

        {/* 3. Card 3 (Top Right, 1-col): Minimalist Text Card */}
        {item3 && (
          <article className="lg:col-span-1 bg-white border border-gray-200 p-6 flex flex-col justify-between group hover:border-[#1b5f63] hover:shadow-md transition-all duration-300 h-[270px] sm:h-[310px] shadow-2xs">
            <div>
              <span className="text-xs text-gray-400 font-medium tracking-wide block">
                {item3.category}
              </span>
              <Link to={`/berita/${item3.id}`}>
                <h3 className="font-philosopher text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1b5f63] transition-colors leading-snug line-clamp-4 mt-3">
                  {item3.title}
                </h3>
              </Link>
            </div>

            <div className="pt-4">
              <div className="w-12 h-0.5 bg-gray-300 group-hover:bg-[#1b5f63] group-hover:w-16 transition-all duration-300 mb-2" />
              <Link
                to={`/berita/${item3.id}`}
                className="text-xs text-gray-500 group-hover:text-[#1b5f63] font-semibold transition-colors block"
              >
                Selengkapnya
              </Link>
            </div>
          </article>
        )}

        {/* ROW 2 */}

        {/* 4. Card 4 (Bottom Left, 1-col): Minimalist Text Card */}
        {item4 && (
          <article className="lg:col-span-1 bg-white border border-gray-200 p-6 flex flex-col justify-between group hover:border-[#1b5f63] hover:shadow-md transition-all duration-300 h-[270px] sm:h-[310px] shadow-2xs">
            <div>
              <span className="text-xs text-gray-400 font-medium tracking-wide block">
                {item4.category}
              </span>
              <Link to={`/berita/${item4.id}`}>
                <h3 className="font-philosopher text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1b5f63] transition-colors leading-snug line-clamp-4 mt-3">
                  {item4.title}
                </h3>
              </Link>
            </div>

            <div className="pt-4">
              <div className="w-12 h-0.5 bg-gray-300 group-hover:bg-[#1b5f63] group-hover:w-16 transition-all duration-300 mb-2" />
              <Link
                to={`/berita/${item4.id}`}
                className="text-xs text-gray-500 group-hover:text-[#1b5f63] font-semibold transition-colors block"
              >
                Selengkapnya
              </Link>
            </div>
          </article>
        )}

        {/* 5. Card 5 (Bottom Mid, 1-col): Minimalist Text Card */}
        {item5 && (
          <article className="lg:col-span-1 bg-white border border-gray-200 p-6 flex flex-col justify-between group hover:border-[#1b5f63] hover:shadow-md transition-all duration-300 h-[270px] sm:h-[310px] shadow-2xs">
            <div>
              <span className="text-xs text-gray-400 font-medium tracking-wide block">
                {item5.category}
              </span>
              <Link to={`/berita/${item5.id}`}>
                <h3 className="font-philosopher text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#1b5f63] transition-colors leading-snug line-clamp-4 mt-3">
                  {item5.title}
                </h3>
              </Link>
            </div>

            <div className="pt-4">
              <div className="w-12 h-0.5 bg-gray-300 group-hover:bg-[#1b5f63] group-hover:w-16 transition-all duration-300 mb-2" />
              <Link
                to={`/berita/${item5.id}`}
                className="text-xs text-gray-500 group-hover:text-[#1b5f63] font-semibold transition-colors block"
              >
                Selengkapnya
              </Link>
            </div>
          </article>
        )}

        {/* 6. Card 6 (Bottom Right, 2-col wide): Video / Media overlay card with Play Button */}
        {item6 && (
          <article className="lg:col-span-2 relative h-[270px] sm:h-[310px] overflow-hidden group border border-gray-200 shadow-2xs">
            <div
              onClick={() => setVideoModalOpen(true)}
              className="absolute inset-0 cursor-pointer block"
            >
              <img
                src={item6.image}
                alt={item6.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Dark protective panel */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            {/* Top row: Category & Video Icon */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between pointer-events-none z-10">
              <span className="text-xs font-semibold text-white/95 uppercase tracking-wider drop-shadow-xs">
                {item6.category}
              </span>
              <Video className="w-4 h-4 text-white/90 drop-shadow-xs" />
            </div>

            {/* Center Play Button (Circular per user rule) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="w-14 h-14 rounded-full bg-white/25 border-2 border-white flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#1b5f63] transition-all duration-300 shadow-md backdrop-blur-xs pointer-events-auto cursor-pointer"
                aria-label="Putar Video Profil"
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </button>
            </div>

            {/* Bottom row: Date & Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/65 backdrop-blur-xs z-10 border-t border-white/10">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                {item6.date}
              </span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="text-left font-philosopher text-base sm:text-lg font-bold text-white group-hover:text-emerald-200 transition-colors leading-snug line-clamp-2 cursor-pointer"
              >
                {item6.title}
              </button>
            </div>
          </article>
        )}

      </div>

      {/* Accessible Video Modal Dialog */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl bg-black border border-gray-700 shadow-2xl">
            <div className="flex items-center justify-between p-3 border-b border-gray-800 text-white">
              <span className="text-xs font-bold font-philosopher">Video Profil Sekolah</span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-1 hover:text-red-400 transition cursor-pointer"
                aria-label="Tutup Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Profil Sekolah"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}