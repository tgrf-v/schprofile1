import React from 'react';
import { Link } from 'react-router-dom';
import { schoolConfig } from '../../config/school.config';
import { ExternalLink, User } from 'lucide-react';

export default function AdminNavbar({ user, onLogout }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src={schoolConfig.identity.logo}
            alt={schoolConfig.identity.shortName}
            className="h-9 w-auto object-contain"
          />
          <div>
            <span className="font-bold font-philosopher text-gray-900 text-sm sm:text-base leading-none block">
              {schoolConfig.identity.shortName}
            </span>
            <span className="text-[11px] text-[#1b5f63] font-semibold tracking-wider uppercase block mt-0.5">
              Panel Pengelola
            </span>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#1b5f63] transition"
          >
            <span>Lihat Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2 text-xs text-gray-700 border-l border-gray-200 pl-4 sm:pl-6">
            <User className="w-4 h-4 text-gray-400" />
            <span className="hidden md:inline font-medium">
              {user?.email || 'Admin'}
            </span>
          </div>

          <button
            onClick={onLogout}
            className="bg-white border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
          >
            Keluar
          </button>
        </div>

      </div>
    </header>
  );
}
