import React, { useState } from 'react';
import {
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  uploadMedia,
  isSupabaseConfigured,
} from '../../lib/supabase';
import { Plus, Edit2, Trash2, Calendar, Upload } from 'lucide-react';

export default function AdminAnnouncements({ announcements, onRefresh }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    image: '/assets/gedung_sekolah.jpg',
    content: '',
  });

  const isConfigured = isSupabaseConfigured();

  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      image: '/assets/gedung_sekolah.jpg',
      content: '',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      date: item.date || '',
      image: item.image || '',
      content: item.content || '',
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
      setFormData((prev) => ({ ...prev, image: publicUrl }));
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
      if (editingItem) {
        if (isConfigured) {
          await updateAnnouncement(editingItem.id, formData);
        }
      } else {
        if (isConfigured) {
          await createAnnouncement(formData);
        }
      }
      setModalOpen(false);
      onRefresh();
    } catch (err) {
      alert('Gagal menyimpan pengumuman: ' + (err.message || 'Error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Hapus pengumuman ini?')) return;
    try {
      if (isConfigured) {
        await deleteAnnouncement(id);
      }
      onRefresh();
    } catch (err) {
      alert('Gagal menghapus pengumuman: ' + (err.message || 'Error'));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Aksi */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border border-gray-200">
        <div>
          <h2 className="text-xl font-bold font-philosopher text-gray-900">
            Daftar Pengumuman & Agenda
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Kelola maklumat penting, kalender akademik, dan jadwal rapat wali santri.
          </p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-2 bg-[#1b5f63] hover:bg-[#144246] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Pengumuman</span>
        </button>
      </div>

      {/* Tabel Pengumuman */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f4f5f7] border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3.5">Gambar</th>
                <th className="px-6 py-3.5">Judul Pengumuman</th>
                <th className="px-6 py-3.5">Tanggal</th>
                <th className="px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {announcements.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={item.image || '/assets/gedung_sekolah.jpg'}
                      alt={item.title}
                      className="w-16 h-12 object-cover border border-gray-200"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <h3 className="font-semibold text-gray-900 line-clamp-1 max-w-lg">
                      {item.title}
                    </h3>
                    {item.content && (
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                        {item.content}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                    <button
                      onClick={() => handleOpenEdit(item)}
                      title="Edit Pengumuman"
                      className="p-1.5 text-gray-500 hover:text-[#1b5f63] transition cursor-pointer"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      title="Hapus Pengumuman"
                      className="p-1.5 text-gray-500 hover:text-red-600 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form Tambah / Edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white border border-gray-200 w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold font-philosopher text-gray-900 mb-6">
              {editingItem ? 'Edit Pengumuman' : 'Tambah Pengumuman Baru'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Judul Pengumuman
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Jadwal Libur Awal Ramadhan 1448 H"
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Tanggal
                </label>
                <input
                  type="text"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#1b5f63]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Foto / Lampiran (URL atau Unggah File)
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/assets/gedung_sekolah.jpg"
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
                    {formData.image && (
                      <span className="text-xs text-gray-500 truncate max-w-xs">
                        {formData.image}
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
                  Isi Rincian Pengumuman
                </label>
                <textarea
                  rows={4}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Tuliskan keterangan lengkap pengumuman..."
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
