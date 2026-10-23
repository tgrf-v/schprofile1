import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const profilMenu = [
  { name: 'Sambutan Kepala Sekolah', href: '/profil/sambutan' },
  { name: 'Visi dan Misi', href: '/profil/visi-misi' },
  { name: 'Sejarah Sekolah', href: '/profil/sejarah' },
  { name: 'Guru & Tenaga Pendidik', href: '/profil/guru' },
];

export default function ProfilLayout({ title, bannerImage, hideMainTitle = false, children }) {
  const location = useLocation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target)) {
        setIsSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* 1. HERO BANNER IMAGE (Starts at top of screen behind fixed transparent navbar) */}
      <div className="w-full h-80 sm:h-96 md:h-[420px] relative overflow-hidden bg-gray-900">
        <img
          src={bannerImage || '/assets/foto_sekolah.jpg'}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Solid Dark Overlay for Depth & High Readability */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Context Text (Centered below the fixed navbar) */}
        <div className="absolute inset-0 flex items-center justify-center pt-20 sm:pt-28">
          <div className="text-center text-white px-4 max-w-3xl pb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emerald-300 mb-2">
              Profil Institusi
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-philosopher drop-shadow-xs">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. OVERLAPPING CANVAS CONTAINER (Modern Editorial Overlap) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 md:-mt-20 relative z-20">
        {/* Integrated Submenu & Breadcrumbs Ribbon Bar (Docks under navbar at top-20) */}
        <div className="bg-white border-b border-gray-100 px-6 sm:px-8 py-3.5 flex items-center justify-between shadow-xs sticky top-20 z-30">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-[#1b5f63] transition">
              Beranda
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">Profil</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-semibold truncate max-w-[180px] sm:max-w-none">
              {title}
            </span>
          </nav>

          {/* Submenu Dropdown */}
          <div className="relative" ref={submenuRef}>
            <button
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-[#1b5f63] transition uppercase tracking-wider cursor-pointer"
              aria-label="Buka Submenu"
            >
              <span>SUBMENU</span>
              <span className="bg-[#1b5f63] text-white p-1.5 flex items-center justify-center">
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isSubmenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </span>
            </button>

            {isSubmenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-xl z-50 py-1">
                {profilMenu.map((item, idx) => {
                  const active = location.pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      to={item.href}
                      onClick={() => setIsSubmenuOpen(false)}
                      className={`block px-4 py-2.5 text-xs sm:text-sm transition ${
                        active
                          ? 'bg-emerald-50 text-[#1b5f63] font-bold border-l-4 border-[#1b5f63]'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#1b5f63]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Main Canvas Reading Area (bg-white framed by bg-stone-50) */}
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
