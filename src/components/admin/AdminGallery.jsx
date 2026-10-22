import React, { useState } from 'react';
import {
  createGalleryItem,
  deleteGalleryItem,
  uploadMedia,
  isSupabaseConfigured,
} from '../../lib/supabase';
import { Plus, Trash2, Upload, Image } from 'lucide-react';

export default function AdminGallery({ gallery, onRefresh }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Kegiatan',
    date: new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    image_url: '/assets/ruang_kelas.jpg',
    description: '',
  });

  const isConfigured = isSupabaseConfigured();

  const handleOpenCreate = () => {
    setFormData({
      title: '',
      category: 'Kegiatan',
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      image_url: '/assets/ruang_kelas.jpg',
      description: '',
    });
    setModalOpen(true);
  };

  const handleImageFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isConfigured) {
      alert('Upload file membutuhkan Supabase aktif.');
      return;
    }

    setUploadingImage(true);
    try {
      const publicUrl = await uploadMedia(file, 'school-media');
      setFormData((prev) => ({ ...prev, image_url: publicUrl }));
    } catch (err) {
      alert('Gagal mengunggah foto: ' + (err.message || 'Error'));
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isConfigured) {
        await createGalleryItem(formData);
      }
      setModalOpen(false);
      onRefresh();
    } catch (err) {
      alert('Gagal menyimpan foto: ' + (err.message || 'Error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Hapus foto ini dari galeri?')) return;
    try {
      if (isConfigured) {
        await deleteGalleryItem(id);
      }
      onRefresh();
    } catch (err) {
      alert('Gagal menghapus foto: ' + (err.message || 'Error'));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Aksi */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border border-gray-200">
        <div>
          <h2 className="text-xl font-bold font-philosopher text-gray-900">
            Daftar Galeri Kegiatan
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Unggah dan tata dokumentasi kegiatan, sarana prasarana, dan momen santri.
          </p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-2 bg-[#1b5f63] hover:bg-[#144246] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Unggah Foto Baru</span>
        </button>
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 overflow-hidden flex flex-col justify-between group shadow-xs"
          >
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#1b5f63] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                {item.category || 'Kegiatan'}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-3">
                {item.title}
              </h3>

              <div className="pt-3 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => handleDelete(item.id)}
                  title="Hapus Foto"
                  className="p-1.5 text-gray-400 hover:text-red-600 transition cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Unggah Foto */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white border border-gray-200 w-full max-w-lg p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold font-philosopher text-gray-900 mb-6">
              Unggah Foto Baru
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Judul Foto / Keterangan
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Upacara Peringatan Hari Santri Nasional"
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Kategori
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Fasilitas / Akademik / Kesenian"
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Tanggal Kegiatan
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  File Gambar atau URL
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="/assets/ruang_kelas.jpg"
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                  />
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-700 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{uploadingImage ? 'Mengompresi & Mengunggah...' : 'Pilih File'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageFileChange}
                        disabled={uploadingImage}
                      />
                    </label>
                    {formData.image_url && (
                      <span className="text-xs text-gray-500 truncate max-w-xs">
                        {formData.image_url}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500">
                    Foto otomatis dikompresi sebelum diunggah agar hemat bandwidth dan cepat dimuat.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Deskripsi / Detail Kegiatan
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Ceritakan detail kegiatan, tujuan acara, atau catatan penting di balik foto ini..."
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                />
              </div>

              {/* Action buttons: text only */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading || uploadingImage}
                  className="px-6 py-2.5 bg-[#1b5f63] hover:bg-[#144246] text-white text-xs font-bold uppercase tracking-wider transition disabled:opacity-50 cursor-pointer"
                >
                  {loading ? 'Menyimpan...' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
