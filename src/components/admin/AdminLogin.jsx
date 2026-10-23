import React, { useState } from 'react';
import { isSupabaseConfigured, signInAdmin } from '../../lib/supabase';
import { schoolConfig } from '../../config/school.config';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const isConfigured = isSupabaseConfigured();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!isConfigured) {
      setError(
        'Supabase belum diaktifkan di file .env. Untuk mode demo, Anda dapat melihat antarmuka dengan mengisi kredensial apa saja atau menghubungkan Supabase terlebih dahulu.'
      );
      return;
    }

    setLoading(true);
    try {
      const { data, error: signInError } = await signInAdmin(email, password);
      if (signInError) throw signInError;
      if (data?.session) {
        onLoginSuccess(data.session);
      }
    } catch (err) {
      setError(err.message || 'Gagal masuk. Periksa kembali email dan kata sandi Anda.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoBypass = () => {
    onLoginSuccess({
      user: {
        email: 'demo-admin@sekolah.sch.id',
        role: 'demo_admin',
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-gray-200 p-8 shadow-xs">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <img
              src={schoolConfig.identity.logo}
              alt={schoolConfig.identity.shortName}
              className="h-16 w-auto mx-auto object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold font-philosopher text-gray-900">
            Panel Pengelola
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            {schoolConfig.identity.name}
          </p>
        </div>

        {/* Status Koneksi Supabase */}
        <div className="mb-6 p-3.5 border text-xs leading-relaxed flex items-start gap-2.5 bg-white border-gray-200">
          {isConfigured ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Supabase Terhubung</p>
                <p className="text-gray-600 mt-0.5">
                  Database live aktif. Masuk menggunakan akun admin sekolah Anda.
                </p>
              </div>
            </>
          ) : (
            <>
              <Info className="w-4 h-4 text-[#1b5f63] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Mode Presentasi Demo</p>
                <p className="text-gray-600 mt-0.5">
                  Kunci API Supabase belum dipasang di environment. Anda tetap dapat masuk ke dashboard menggunakan tombol pratinjau di bawah.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form Login */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Email Pengelola
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sekolah.sch.id"
              required
              className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Kata Sandi
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              required
              className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63] transition"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1b5f63] hover:bg-[#144246] text-white py-3 text-xs font-bold uppercase tracking-wider transition disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Memproses Masuk...' : 'Masuk'}
            </button>
          </div>
        </form>

        {/* Demo Mode Bypass Button */}
        {!isConfigured && (
          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
            <button
              type="button"
              onClick={handleDemoBypass}
              className="w-full bg-white border border-[#1b5f63] text-[#1b5f63] hover:bg-gray-50 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
            >
              Buka Panel Demo
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
