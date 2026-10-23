import React, { useState, useEffect } from 'react';
import {
  getAdminSession,
  signOutAdmin,
  fetchArticles,
  fetchAnnouncements,
  fetchGallery,
  isSupabaseConfigured,
} from '../lib/supabase';
import AdminLogin from '../components/admin/AdminLogin';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminArticles from '../components/admin/AdminArticles';
import AdminAnnouncements from '../components/admin/AdminAnnouncements';
import AdminGallery from '../components/admin/AdminGallery';
import { Newspaper, Bell, Image as ImageIcon, ShieldCheck } from 'lucide-react';

export default function Admin() {
  const [session, setSession] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState('articles'); // 'articles' | 'announcements' | 'gallery'

  const [articles, setArticles] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  // Check auth session on mount
  useEffect(() => {
    async function initAuth() {
      try {
        const currentSession = await getAdminSession();
        if (currentSession) {
          setSession(currentSession);
        }
      } catch (err) {
        console.error('Auth check error:', err);
      } finally {
        setCheckingAuth(false);
      }
    }
    initAuth();
  }, []);

  // Fetch dynamic data when session is active
  const loadAllData = async () => {
    setLoadingData(true);
    try {
      const [artData, annData, galData] = await Promise.all([
        fetchArticles(),
        fetchAnnouncements(),
        fetchGallery(),
      ]);
      setArticles(artData || []);
      setAnnouncements(annData || []);
      setGallery(galData || []);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (session) {
      loadAllData();
    }
  }, [session]);

  const handleLogout = async () => {
    await signOutAdmin();
    setSession(null);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Memuat Panel Pengelola...
        </p>
      </div>
    );
  }

  if (!session) {
    return <AdminLogin onLoginSuccess={(newSession) => setSession(newSession)} />;
  }

  const tabs = [
    {
      id: 'articles',
      label: 'Berita & Acara',
      count: articles.length,
      icon: Newspaper,
    },
    {
      id: 'announcements',
      label: 'Pengumuman',
      count: announcements.length,
      icon: Bell,
    },
    {
      id: 'gallery',
      label: 'Galeri Foto',
      count: gallery.length,
      icon: ImageIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col">
      {/* Navbar Admin */}
      <AdminNavbar user={session.user} onLogout={handleLogout} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Tab Navigation */}
        <div className="bg-white border border-gray-200 p-2 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  isActive
                    ? 'bg-[#1b5f63] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Body */}
        {loadingData ? (
          <div className="bg-white border border-gray-200 p-12 text-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Menyinkronkan data...
          </div>
        ) : (
          <>
            {activeTab === 'articles' && (
              <AdminArticles
                articles={articles}
                onRefresh={loadAllData}
              />
            )}

            {activeTab === 'announcements' && (
              <AdminAnnouncements
                announcements={announcements}
                onRefresh={loadAllData}
              />
            )}

            {activeTab === 'gallery' && (
              <AdminGallery
                gallery={gallery}
                onRefresh={loadAllData}
              />
            )}
          </>
        )}

      </main>
    </div>
  );
}
