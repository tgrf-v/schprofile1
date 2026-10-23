import React from 'react';
import { Link } from 'react-router-dom';

export default function EditorialPageLayout({
  title,
  category = 'Informasi Institusi',
  bannerImage,
  breadcrumbCurrent,
  hideMainTitle = false,
  children
}) {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* 1. HERO BANNER IMAGE (Layered Depth) */}
      <div className="w-full h-80 sm:h-96 md:h-[420px] relative overflow-hidden bg-gray-900">
        <img
          src={bannerImage || '/assets/foto_sekolah.jpg'}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Solid Dark Overlay for Depth */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Context Text */}
        <div className="absolute inset-0 flex items-center justify-center pt-20 sm:pt-28">
          <div className="text-center text-white px-4 max-w-3xl pb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-300 mb-2">
              {category}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-philosopher drop-shadow-xs">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. OVERLAPPING CANVAS CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 md:-mt-20 relative z-20">
        {/* Breadcrumb Ribbon Bar */}
        <div className="bg-white border-b border-gray-100 px-6 sm:px-8 py-3.5 flex items-center justify-between shadow-xs sticky top-20 z-30">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-[#1b5f63] transition">
              Beranda
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-semibold truncate max-w-[240px] sm:max-w-none">
              {breadcrumbCurrent || title}
            </span>
          </nav>
        </div>

        {/* Main Canvas Reading Area */}
        <main className="bg-white p-6 sm:p-10 lg:p-14 shadow-xs border border-gray-100">
          {!hideMainTitle && (
            <div className="mb-10 pb-6 border-b border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold font-philosopher text-[#1b5f63]">
                {title}
              </h2>
              <div className="w-16 h-1 bg-[#1b5f63] mt-3" />
            </div>
          )}

          {/* Children Content */}
          <div className="text-gray-700 leading-relaxed font-maven">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
