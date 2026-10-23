# SchProfile - Modern Institutional School Profile Website Template

Template website profil institusi sekolah modern, responsif, dan siap pakai yang dibangun menggunakan React, Tailwind CSS, Vite, dan Supabase. Dirancang khusus dengan tata letak editorial berstandar tinggi untuk memenuhi kebutuhan portal resmi SMA, SMK, SMP, Pesantren Terpadu, maupun Sekolah Internasional.

Tautan Demo Publik: [https://schprofile1.pages.dev/](https://schprofile1.pages.dev/)

---

## Fitur Utama

- **Tata Letak Editorial Premium**  
  Mengadopsi hierarki visual kelas dunia yang bersih, elegan, dan informatif. Dilengkapi tata letak asimetris (Bento Grid) untuk warta berita, tipografi modern, serta navigasi yang intuitif.

- **Konfigurasi Identitas Terpusat (White-Label Architecture)**  
  Seluruh identitas sekolah, nama lembaga, tagline, warna tema brand, logo, kontak resmi, alamat, akun media sosial, naskah pimpinan, hingga visi dan misi diatur dalam satu file konfigurasi (`src/config/school.config.js`). Anda dapat mengganti identitas sekolah untuk klien baru tanpa perlu mengubah kode komponen.

- **Panel Administrasi Konten (`/admin`)**  
  Dilengkapi antarmuka manajemen konten untuk menambah, mengedit, dan menghapus Berita, Pengumuman Resmi, serta Galeri Kegiatan sekolah secara mandiri.

- **Fitur Kompresi Gambar Otomatis di Sisi Klien**  
  Sistem secara otomatis mengompresi ukuran foto beresolusi tinggi menggunakan HTML5 Canvas sebelum diunggah ke storage Supabase. File berukuran besar (3-5 MB) langsung dioptimasi menjadi ukuran web ramah bandwidth (200-500 KB) tanpa menurunkan ketajaman visual.

- **Aset Visual Otentik & Berkualitas Tinggi**  
  Menyediakan 20 aset foto dokumentasi sekolah berstandar fotografi nyata yang mencakup gedung utama, ruang kelas modern, lab komputer, perpustakaan, lapangan olahraga, musala, ruang UKS, upacara bendera, wisuda, ekstrakurikuler pramuka, dan kegiatan pembelajaran kolaboratif.

- **Integrasi Database & Media Supabase**  
  Tersinkronisasi penuh dengan PostgreSQL database dan Supabase Storage bucket (`school-media`) dengan keamanan Row Level Security (RLS). Jika database belum terhubung, website otomatis beralih ke mode offline fallback menggunakan data lokal statis.

- **Optimasi Siap Deploy ke Cloudflare Pages**  
  Sudah dikonfigurasi menggunakan plugin Cloudflare Vite dan Wrangler CLI, sehingga build dan deployment ke edge server global dapat dilakukan dalam hitungan detik.

---

## Struktur Halaman Website

1. **Beranda (`/`)**
   - Layar Utama Gedung Sekolah (Full Viewport Hero)
   - Sambutan Singkat Kepala Sekolah (Editorial Split Layout)
   - Warta Berita & Agenda Terkini (Asymmetric Bento Grid)
   - Karya Inspiratif Siswa & Dewan Guru
   - Pengumuman Penting Lembaga
   - Slider Kerja Sama Perguruan Tinggi Mitra
   - Kutipan Testimoni Alumni Sukses

2. **Profil Lembaga (`/profil`)**
   - Sambutan Lengkap Kepala Sekolah (`/profil/sambutan`)
   - Visi, Misi & Nilai Utama (`/profil/visi-misi`)
   - Kilas Sejarah & Tonggak Perkembangan (`/profil/sejarah`)
   - Struktur Dewan Guru & Tenaga Kependidikan (`/profil/guru`)

3. **Akademik (`/akademik`)**
   - Kurikulum Pembelajaran & Silabus (`/akademik/kurikulum`)
   - Direktori Ekstrakurikuler & Jadwal (`/akademik/ekskul`)
   - Rekam Prestasi & Penghargaan Siswa (`/akademik/prestasi`)

4. **Sarana & Prasarana (`/fasilitas`)**
   - Galeri fasilitas unggulan kampus dan standar lingkungan belajar

5. **Warta Berita (`/berita`)**
   - Daftar seluruh artikel berita, filter kategori, dan halaman baca artikel lengkap (`/berita/:id`)

6. **Galeri Dokumentasi (`/galeri`)**
   - Koleksi album foto kegiatan sekolah dan halaman ulasan momen per agenda (`/galeri/:id`)

7. **Penerimaan Peserta Didik Baru (`/ppdb`)**
   - Alur pendaftaran, rincian gelombang, persyaratan berkas, biaya, dan formulir pendaftaran daring

8. **Kontak & Lokasi (`/kontak`)**
   - Informasi narahubung resmi, form kirim pesan langsung via WhatsApp, dan sematan peta interaktif

9. **Portal Admin (`/admin`)**
   - Dasbor autentikasi dan manajemen konten berita, pengumuman, serta foto galeri

---

## Teknologi yang Digunakan

- **Frontend Framework:** React 18
- **Build Tool:** Vite 6
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4
- **Icon System:** Lucide React
- **Backend Service:** Supabase (Database, Auth, Storage)
- **Deployment Platform:** Cloudflare Pages & Wrangler

---

## Panduan Instalasi & Menjalankan Proyek

### 1. Prasyarat Sistem
Pastikan Node.js versi 18 atau yang lebih baru sudah terpasang di komputer Anda.

### 2. Kloning Repositori
```bash
git clone https://github.com/tgrf-v/schprofile1.git
cd schprofile1
```

### 3. Pasang Dependensi
```bash
npm install
```

### 4. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Buka file `.env` dan masukkan kredensial Supabase Anda:
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
*(Catatan: Website tetap dapat berjalan normal menampilkan data lokal statis meskipun Supabase belum diisi).*

### 5. Jalankan Server Pengembangan Lokal
```bash
npm run dev
```
Buka browser di `http://localhost:5173`.

---

## Skrip yang Tersedia

- `npm run dev`: Menjalankan server pengembangan lokal dengan fitur hot reload.
- `npm run build`: Melakukan kompilasi dan optimasi bundel produksi ke dalam folder `dist/`.
- `npm run preview`: Menjalankan simulasi runtime Cloudflare Pages lokal menggunakan Wrangler.
- `npm run deploy`: Melakukan build produksi dan langsung mempublikasikannya ke Cloudflare Pages.

---

## Panduan Kustomisasi White-Label

Untuk mengubah tampilan dan identitas website ini menjadi website sekolah lain:

### 1. Mengubah Identitas & Tema Warna
Buka file `src/config/school.config.js`:
- Ubah objek `identity` untuk nama sekolah, NPSN, akreditasi, dan deskripsi singkat.
- Ubah objek `theme.primaryColor` untuk mengganti warna utama tombol, aksen navigasi, dan heading.
- Ubah objek `contact` untuk alamat, nomor WhatsApp, email, dan link Google Maps.
- Ubah objek `principal` untuk foto, nama, dan naskah sambutan kepala sekolah.

### 2. Mengganti Foto & Aset Gambar
Seluruh aset gambar statis berada di direktori `public/assets/`. Anda cukup menimpa file gambar dengan nama yang sama:
- `foto_sekolah.jpg`: Gedung utama di layar beranda
- `kepsek.jpg`: Foto potret kepala sekolah
- `ruang_kelas.jpg`: Ruang kelas pembelajaran
- `lab_komputer.jpg`: Laboratorium komputer & TIK
- `perpustakaan.jpg`: Perpustakaan & ruang baca
- `lapangan.jpg`: Fasilitas lapangan olahraga
- `musholla.jpg`: Sarana ibadah
- `uks.jpg`: Ruang kesehatan sekolah
- `news1.jpg` s/d `news4.jpg`: Dokumentasi berita utama

---

## Setup Database Supabase

Jika ingin mengaktifkan sinkronisasi database dan fitur upload media admin:
1. Buat project baru di [Supabase Dashboard](https://supabase.com/dashboard).
2. Buka menu **SQL Editor**, salin seluruh konten dari file `supabase_schema.sql`, lalu klik **Run**.
3. Buka menu **Storage**, pastikan bucket bernama `school-media` sudah terbentuk dengan visibilitas publik.
4. Salin URL dan anon key ke file `.env` proyek Anda.

---

## Struktur Direktori

```text
├── public/
│   └── assets/                  # Foto aset dokumentasi & logo institusi
├── src/
│   ├── components/
│   │   ├── admin/               # Komponen panel admin (Berita, Pengumuman, Galeri)
│   │   ├── AkademikLayout.jsx   # Layout bersama halaman akademik
│   │   ├── Footer.jsx           # Komponen footer global
│   │   ├── Navbar.jsx           # Navigasi utama & mobile menu
│   │   ├── NewsBentoGrid.jsx    # Grid warta berita gaya editorial
│   │   ├── PartnershipSlider.jsx# Slider logo mitra universitas
│   │   └── ProfilLayout.jsx     # Layout bersama halaman profil
│   ├── config/
│   │   └── school.config.js     # Pusat kendali identitas white-label & tema
│   ├── lib/
│   │   ├── imageCompressor.js   # Utilitas kompresi gambar otomatis sisi klien
│   │   └── supabase.js          # Klien dan fungsi CRUD Supabase
│   ├── pages/
│   │   ├── akademik/            # Halaman Kurikulum, Ekskul, dan Prestasi
│   │   ├── profil/              # Halaman Sambutan, Visi Misi, Sejarah, Guru
│   │   ├── Admin.jsx            # Gerbang portal administrasi
│   │   ├── Berita.jsx           # Arsip berita & artikel
│   │   ├── BeritaDetail.jsx     # Halaman baca artikel lengkap
│   │   ├── Fasilitas.jsx        # Halaman sarana dan prasarana kampus
│   │   ├── Galeri.jsx           # Galeri dokumentasi kegiatan
│   │   ├── GaleriDetail.jsx     # Halaman detail kegiatan
│   │   ├── Home.jsx             # Halaman beranda utama
│   │   ├── Kontak.jsx           # Halaman informasi kontak & peta
│   │   └── PPDB.jsx             # Halaman penerimaan peserta didik baru
│   ├── data.js                  # Data cadangan lokal (offline fallback)
│   ├── index.css                # Konfigurasi Tailwind CSS v4 & font imports
│   └── main.jsx                 # Entry point aplikasi React
├── package.json
├── supabase_schema.sql          # Skrip skema database, storage & RLS
└── vite.config.js
```

---

## Lisensi

Proyek ini dikembangkan sebagai template profil sekolah modular. Silakan digunakan dan disesuaikan untuk kebutuhan institusi pendidikan Anda.
