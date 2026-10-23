import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages - Profil
import Home from './pages/Home';
import Sambutan from './pages/profil/Sambutan';
import VisiMisi from './pages/profil/VisiMisi';
import Sejarah from './pages/profil/Sejarah';
import Guru from './pages/profil/Guru';

// Pages - Akademik
import Kurikulum from './pages/akademik/Kurikulum';
import Ekstrakurikuler from './pages/akademik/Ekstrakurikuler';
import Prestasi from './pages/akademik/Prestasi';

// Pages - Lainnya
import Fasilitas from './pages/Fasilitas';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import PPDB from './pages/PPDB';
import Galeri from './pages/Galeri';
import GaleriDetail from './pages/GaleriDetail';
import Kontak from './pages/Kontak';
import Admin from './pages/Admin';

// Helper component to scroll to top on route change
function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-[#fafafa]">
      {!isAdminRoute && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 4 Halaman Terpisah Menu PROFIL */}
          <Route path="/profil" element={<Navigate to="/profil/sambutan" replace />} />
          <Route path="/profil/sambutan" element={<Sambutan />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/guru" element={<Guru />} />

          {/* Direct Aliases Profil */}
          <Route path="/sambutan" element={<Navigate to="/profil/sambutan" replace />} />
          <Route path="/visi-misi" element={<Navigate to="/profil/visi-misi" replace />} />
          <Route path="/sejarah" element={<Navigate to="/profil/sejarah" replace />} />
          <Route path="/guru" element={<Navigate to="/profil/guru" replace />} />

          {/* 3 Halaman Terpisah Menu AKADEMIK */}
          <Route path="/akademik" element={<Navigate to="/akademik/kurikulum" replace />} />
          <Route path="/akademik/kurikulum" element={<Kurikulum />} />
          <Route path="/akademik/ekskul" element={<Ekstrakurikuler />} />
          <Route path="/akademik/prestasi" element={<Prestasi />} />

          {/* Direct Aliases Akademik */}
          <Route path="/kurikulum" element={<Navigate to="/akademik/kurikulum" replace />} />
          <Route path="/ekskul" element={<Navigate to="/akademik/ekskul" replace />} />
          <Route path="/prestasi" element={<Navigate to="/akademik/prestasi" replace />} />

          {/* Halaman Standalone Lainnya */}
          <Route path="/fasilitas" element={<Fasilitas />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/ppdb" element={<PPDB />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/galeri/:id" element={<GaleriDetail />} />
          <Route path="/kontak" element={<Kontak />} />

          {/* Halaman Admin Backoffice */}
          <Route path="/admin" element={<Admin />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <MainLayout />
    </BrowserRouter>
  );
}
