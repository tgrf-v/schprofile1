import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EditorialPageLayout from '../components/EditorialPageLayout';
import { newsUpdates, karyaInspiratif, announcements } from '../data';
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Check,
  MessageCircle,
  Clock
} from 'lucide-react';

export default function BeritaDetail() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  // Pool all articles
  const allArticles = [
    ...newsUpdates.map((item) => ({ ...item, type: 'berita', author: 'Humas Sekolah' })),
    ...karyaInspiratif.map((item) => ({
      ...item,
      id: 100 + item.id,
      category: item.author || 'Karya Siswa',
      author: item.author || 'Civitas Santri'
    })),
    ...announcements.map((item) => ({
      ...item,
      id: 200 + item.id,
      category: item.category || 'Pengumuman Resmi',
      author: 'Sekretariat Lembaga'
    }))
  ];

  // Match by id or fallback to first
  const article = allArticles.find((a) => String(a.id) === String(id)) || allArticles[0];

  // Related articles (exclude current)
  const relatedArticles = allArticles.filter((a) => String(a.id) !== String(article.id)).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = encodeURIComponent(`${article.title} - ${window.location.href}`);

  return (
    <EditorialPageLayout
      title={article.title}
      category={article.category}
      bannerImage={article.image || '/assets/gedung_sekolah.jpg'}
      breadcrumbCurrent={article.title}
      hideMainTitle={true}
    >
      <div className="space-y-12">
        {/* 1. HEADER META & TITLE EDITORIAL */}
        <div className="border-b border-gray-100 pb-8">
          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="font-bold text-[#1b5f63] uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">{article.date}</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">Oleh: {article.author}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-philosopher text-gray-900 leading-snug">
            {article.title}
          </h1>
        </div>

        {/* 2. FEATURED IMAGE */}
        <div className="overflow-hidden border border-gray-200">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-80 sm:h-96 md:h-[460px] object-cover"
            onError={(e) => {
              e.currentTarget.src = '/assets/gedung_sekolah.jpg';
            }}
          />
        </div>

        {/* 3. EXCERPT LEAD */}
        {article.excerpt && (
          <div className="border-l-4 border-[#1b5f63] pl-5 py-1">
            <p className="text-base sm:text-lg font-bold font-philosopher text-gray-900 leading-relaxed italic">
              "{article.excerpt}"
            </p>
          </div>
        )}

        {/* 4. ISI NASKAH ARTIKEL */}
        <div className="prose max-w-none text-sm sm:text-base text-gray-700 leading-relaxed space-y-5 text-justify sm:text-left">
          <p>
            <strong>KOTA BATU —</strong> Komitmen untuk terus meningkatkan mutu dan kualitas penyelenggaraan pendidikan terus diwujudkan melalui serangkaian program terarah. Kegiatan ini diselenggarakan sebagai bagian integral dari visi pembinaan karakter islami, kepemimpinan, dan keunggulan akademik yang menjadi pilar utama lembaga kami.
          </p>

          <p>
            Pimpinan sekolah dalam keterangannya menegaskan bahwa setiap tahapan belajar santri, baik di dalam laboratorium kelas maupun di lingkungan asrama, merupakan arena pembentukan watak kesatria yang mengasah nalar kritis sekaligus kepekaan hati.
          </p>

          <blockquote className="border-l-2 border-[#1b5f63] pl-4 italic text-gray-800 my-6 bg-gray-50 p-4">
            “Pendidikan sejati bukan semata-mata mentransfer pengetahuan teoritis, melainkan menanamkan nilai adab, tanggung jawab, dan kepedulian sosial yang mengakar kuat di dalam jiwa setiap peserta didik.”
          </blockquote>

          <h3 className="text-xl font-bold font-philosopher text-gray-900 pt-3">
            Sinergi Civitas Akademika dan Orang Tua Santri
          </h3>

          <p>
            Sinergi harmonis antara dewan guru, staf pengasuhan asrama, serta perwakilan persatuan orang tua santri menjadi fondasi kokoh terlaksananya agenda ini dengan lancar dan penuh khidmat. Seluruh pihak menyambut antusias program-program strategis yang telah disiapkan demi kemaslahatan santri.
          </p>

          <p>
            Diharapkan capaian ini tidak hanya menjadi catatan administratif lembaga, melainkan memberikan dampak positif nyata yang dirasakan langsung oleh masyarakat sekitar serta menginspirasi generasi muda lainnya untuk terus berprestasi dan berakhlak mulia.
          </p>
        </div>

        {/* 5. BAGIKAN ARTIKEL */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
            <Share2 className="w-4 h-4 text-[#1b5f63]" />
            <span>Bagikan Artikel Ini:</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`https://api.whatsapp.com/send?text=${shareText}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba5a] px-3.5 py-1.5 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1877F2] text-white hover:bg-blue-700 px-3.5 py-1.5 text-xs font-bold transition"
            >
              Facebook
            </a>

            <button
              onClick={handleCopyLink}
              className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-1.5 text-xs font-semibold border border-gray-300 flex items-center gap-1 transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin!</span>
                </>
              ) : (
                <span>Salin Tautan</span>
              )}
            </button>
          </div>
        </div>

        {/* 6. TOMBOL KEMBALI */}
        <div className="pt-4">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1b5f63] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Indeks Berita &amp; Agenda</span>
          </Link>
        </div>

        {/* 7. BERITA TERKAIT LAINNYA */}
        <div className="pt-12 border-t border-gray-100">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1b5f63] block mb-1">
              Rekomendasi Bacaan
            </span>
            <h3 className="text-xl font-bold font-philosopher text-gray-900">
              Kabar Terkini Lainnya
            </h3>
            <div className="w-12 h-1 bg-[#1b5f63] mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/berita/${rel.id}`}
                className="group border border-gray-200 bg-white p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-[#1b5f63] font-bold block mb-1.5 uppercase tracking-wide">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#1b5f63] line-clamp-2 leading-snug mb-2 font-maven">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-[11px] text-gray-400 block pt-2 border-t border-gray-100">
                  {rel.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </EditorialPageLayout>
  );
}
