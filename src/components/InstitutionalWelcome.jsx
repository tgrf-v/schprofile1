import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { schoolConfig } from '../config/school.config';

export default function InstitutionalWelcome() {
  const { principal } = schoolConfig;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Foto Potret Kepala Sekolah */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative max-w-sm w-full">
              <div className="overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src={principal.photo}
                  alt={principal.name}
                  className="w-full h-84 sm:h-96 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="pt-3.5 border-b-2 border-[#1b5f63] pb-2">
                <h3 className="font-bold text-gray-900 text-base font-philosopher">
                  {principal.name}
                </h3>
                <p className="text-xs text-[#1b5f63] font-semibold mt-0.5">
                  {principal.title}
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Naskah Editorial Sambutan Singkat */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-2">
                Pesan Pimpinan
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-philosopher text-gray-900 leading-tight">
                {principal.speechHeadline}
              </h2>
              <div className="w-16 h-1 bg-[#1b5f63] mt-3.5" />
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify sm:text-left">
              {principal.speechSummary}
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify sm:text-left">
              {principal.speechParagraph2}
            </p>

            <div className="pt-2">
              <Link
                to="/profil/sambutan"
                className="inline-flex items-center gap-2 bg-[#1b5f63] text-white hover:bg-[#144246] px-6 py-3 text-xs font-bold uppercase tracking-wider transition shadow-xs"
              >
                <span>Baca Sambutan Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
