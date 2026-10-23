import { createClient } from '@supabase/supabase-js';
import { newsUpdates, announcements as fallbackAnnouncements, galleryItems as fallbackGallery } from '../data';
import { schoolConfig } from '../schoolConfig';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('placeholder')
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// ==========================================
// 1. HELPER AUTENTIKASI ADMIN
// ==========================================
export async function signInAdmin(email, password) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum dikonfigurasi. Silakan isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di file .env');
  }
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function signOutAdmin() {
  if (!isSupabaseConfigured()) return { error: null };
  return await supabase.auth.signOut();
}

export async function getAdminSession() {
  if (!isSupabaseConfigured()) return null;
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

// ==========================================
// 2. HELPER BERITA & ACARA (ARTICLES)
// ==========================================
export async function fetchArticles() {
  if (!isSupabaseConfigured()) {
    // Kembalikan data default jika Supabase belum aktif
    return newsUpdates;
  }
  try {
    const slug = schoolConfig.slug || 'al-izzah';
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('school_slug', slug)
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return newsUpdates;
    }
    return data;
  } catch {
    return newsUpdates;
  }
}

export async function createArticle(articleData) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif. Tidak dapat menyimpan ke database.');
  }
  const payload = {
    school_slug: schoolConfig.slug || 'al-izzah',
    ...articleData,
  };
  return await supabase.from('articles').insert([payload]).select().single();
}

export async function updateArticle(id, updatedFields) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif.');
  }
  return await supabase.from('articles').update(updatedFields).eq('id', id).select().single();
}

export async function deleteArticle(id) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif.');
  }
  return await supabase.from('articles').delete().eq('id', id);
}

// ==========================================
// 3. HELPER PENGUMUMAN (ANNOUNCEMENTS)
// ==========================================
export async function fetchAnnouncements() {
  if (!isSupabaseConfigured()) {
    return fallbackAnnouncements;
  }
  try {
    const slug = schoolConfig.slug || 'al-izzah';
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .eq('school_slug', slug)
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return fallbackAnnouncements;
    }
    return data;
  } catch {
    return fallbackAnnouncements;
  }
}

export async function createAnnouncement(data) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif.');
  }
  const payload = {
    school_slug: schoolConfig.slug || 'al-izzah',
    ...data,
  };
  return await supabase.from('announcements').insert([payload]).select().single();
}

export async function updateAnnouncement(id, updatedFields) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif.');
  }
  return await supabase.from('announcements').update(updatedFields).eq('id', id).select().single();
}

export async function deleteAnnouncement(id) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif.');
  }
  return await supabase.from('announcements').delete().eq('id', id);
}

// ==========================================
// 4. HELPER GALERI FOTO (GALLERY)
// ==========================================
export async function fetchGallery() {
  if (!isSupabaseConfigured()) {
    return fallbackGallery;
  }
  try {
    const slug = schoolConfig.slug || 'al-izzah';
    const { data, error } = await supabase
      .from('galleries')
      .select('*')
      .eq('school_slug', slug)
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return fallbackGallery;
    }
    return data.map((d) => ({
      ...d,
      image: d.image_url || d.image,
    }));
  } catch {
    return fallbackGallery;
  }
}

export async function fetchGalleryById(id) {
  if (!isSupabaseConfigured()) {
    return fallbackGallery.find((item) => String(item.id) === String(id)) || null;
  }
  try {
    const { data, error } = await supabase
      .from('galleries')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      return fallbackGallery.find((item) => String(item.id) === String(id)) || null;
    }
    return {
      ...data,
      image: data.image || data.image_url,
    };
  } catch {
    return fallbackGallery.find((item) => String(item.id) === String(id)) || null;
  }
}

export async function createGalleryItem(data) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif.');
  }
  const payload = {
    school_slug: schoolConfig.slug || 'al-izzah',
    title: data.title,
    category: data.category,
    date: data.date,
    description: data.description,
    image: data.image_url || data.image,
  };
  return await supabase.from('galleries').insert([payload]).select().single();
}

export async function deleteGalleryItem(id) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif.');
  }
  return await supabase.from('galleries').delete().eq('id', id);
}

// ==========================================
// 5. HELPER UPLOAD GAMBAR KE SUPABASE STORAGE
// ==========================================
export async function uploadMedia(file, bucket = 'school-media') {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum aktif. Tidak dapat mengunggah file.');
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
  const filePath = `uploads/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, { cacheControl: '3600', upsert: false });

  if (uploadError) {
    throw uploadError;
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return data.publicUrl;
}
