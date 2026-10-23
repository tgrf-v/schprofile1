import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { navLinks } from '../data';
import { schoolConfig } from '../schoolConfig';

const socialLinks = [
  {
    name: 'Facebook',
    href: schoolConfig.social.facebook,
    hoverBg: 'bg-[#1877F2]',
    icon: (
      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'Twitter (X)',
    href: schoolConfig.social.twitter,
    hoverBg: 'bg-black',
    icon: (
      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: schoolConfig.social.instagram,
    hoverBg: 'bg-[#E1306C]',
    icon: (
      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: schoolConfig.social.youtube,
    hoverBg: 'bg-[#FF0000]',
    icon: (
      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Transparent when scroll position is at the very top and mobile menu is closed
  const isTransparent = !isScrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div
      className={`w-full z-40 transition-all duration-300 fixed top-0 left-0 right-0 ${
        isTransparent
          ? 'bg-transparent shadow-none'
          : 'bg-white shadow-sm border-b border-gray-200'
      }`}
    >
      {/* 1. TOP UTILITY BAR (Slides up smoothly on scroll) */}
      <header
        className={`transition-all duration-300 ease-in-out text-xs px-4 overflow-hidden ${
          isScrolled
            ? 'max-h-0 opacity-0 -translate-y-full py-0 pointer-events-none'
            : 'max-h-24 opacity-100 translate-y-0 py-2'
        } ${
          isTransparent
            ? 'bg-transparent text-white/90 drop-shadow-xs'
            : 'bg-white text-gray-600'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href={`tel:${schoolConfig.contact.phone}`}
              className={`flex items-center gap-1.5 transition ${
                isTransparent ? 'hover:text-emerald-300' : 'hover:text-[#1b5f63]'
              }`}
            >
              <Phone className={`w-3.5 h-3.5 ${isTransparent ? 'text-emerald-300' : 'text-[#1b5f63]'}`} />
              <span>Telp: {schoolConfig.contact.phone} | WA: {schoolConfig.contact.whatsappDisplay}</span>
            </a>
            <span className={`hidden sm:inline ${isTransparent ? 'text-white/40' : 'text-gray-300'}`}>|</span>
            <div className={`flex items-center gap-1.5 ${isTransparent ? 'text-white/90' : 'text-gray-600'}`}>
              <MapPin className={`w-3.5 h-3.5 ${isTransparent ? 'text-emerald-300' : 'text-[#1b5f63]'}`} />
              <span>{schoolConfig.contact.address}</span>
            </div>
          </div>

          {/* Right social media links (3D Roll-Up Micro-interaction) */}
          <div className="flex items-center gap-3">
            <span className={`text-[11px] hidden md:inline ${isTransparent ? 'text-white/70' : 'text-gray-500'}`}>
              Ikuti Kami:
            </span>
            <div className="flex items-center gap-1.5">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  title={item.name}
                  aria-label={item.name}
                  className="relative w-5 h-5 overflow-hidden block group cursor-pointer"
                >
                  <div className="w-full h-full transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {/* Default Face: Hitam solid */}
                    <div className="w-5 h-5 bg-black text-white flex items-center justify-center">
                      {item.icon}
                    </div>
                    {/* Hover Face: Warna Asli Brand (Bergulir naik dari bawah) */}
                    <div className={`w-5 h-5 ${item.hoverBg} text-white flex items-center justify-center`}>
                      {item.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav
        className={`transition-colors duration-300 ${
          isTransparent ? 'bg-transparent' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/logo.png"
                alt="Logo Sekolah"
                className="h-12 w-auto max-w-[220px] sm:max-w-[270px] object-contain transition-transform group-hover:scale-102"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2.5">
                <div className="w-10 h-10 border border-[#1b5f63] bg-[#1b5f63] flex items-center justify-center text-white font-bold text-lg font-philosopher">
                  IS
                </div>
                <div>
                  <h1
                    className={`font-bold text-base tracking-tight font-philosopher uppercase ${
                      isTransparent ? 'text-white' : 'text-[#1b5f63]'
                    }`}
                  >
                    Al-Izzah School
                  </h1>
                  <p
                    className={`text-[9px] font-medium tracking-wider uppercase ${
                      isTransparent ? 'text-emerald-200' : 'text-gray-500'
                    }`}
                  >
                    International Islamic Boarding School
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.isCta ? (
                    <Link
                      to={item.href}
                      className="px-3.5 py-2 text-xs font-bold uppercase bg-[#1b5f63] text-white hover:bg-[#144246] transition border border-[#1b5f63] shadow-xs"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-2.5 py-2 text-xs font-semibold tracking-wide flex items-center gap-1 transition border-b-2 ${
                        isActive(item.href)
                          ? isTransparent
                            ? 'text-white border-white'
                            : 'text-[#1b5f63] border-[#1b5f63]'
                          : isTransparent
                          ? 'text-white/90 hover:text-white border-transparent'
                          : 'text-gray-700 hover:text-[#1b5f63] border-transparent'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.children && (
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 group-hover:rotate-180 ${
                            isTransparent
                              ? 'text-white/70 group-hover:text-white'
                              : 'text-gray-400 group-hover:text-[#1b5f63]'
                          }`}
                        />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div
                      className={`absolute left-0 mt-1 w-56 bg-white border border-gray-200 shadow-md divide-y divide-gray-100 transition-all duration-200 origin-top-left z-50 ${
                        activeDropdown === item.name
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="py-1">
                        {item.children.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-emerald-50 hover:text-[#1b5f63] transition font-medium border-l-2 border-transparent hover:border-[#1b5f63]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 border transition focus:outline-none ${
                  isTransparent
                    ? 'border-white/30 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-700 hover:text-[#1b5f63] hover:bg-gray-100'
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
            {navLinks.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 py-1">
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-semibold ${
                    item.isCta
                      ? 'bg-[#1b5f63] text-white text-center'
                      : isActive(item.href)
                      ? 'text-[#1b5f63] bg-emerald-50/70'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-[#1b5f63]'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1 mt-1">
                    {item.children.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs text-gray-600 hover:text-[#1b5f63]"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
