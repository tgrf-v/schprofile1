/**
 * BRIDGE FILE UNTUK KOMPATIBILITAS
 * Mengarahkan seluruh konfigurasi ke file pusat: src/config/school.config.js
 */
import { schoolConfig as baseConfig } from './config/school.config';

export const schoolConfig = {
  ...baseConfig,
  slug: baseConfig.identity.slug || 'al-izzah',
  // Alias untuk kompatibilitas properti lama
  name: baseConfig.identity.name,
  shortName: baseConfig.identity.shortName,
  subName: baseConfig.identity.tagline,
  tagline: baseConfig.identity.tagline,
  npsn: baseConfig.identity.npsn,
  akreditasi: baseConfig.identity.accreditation,
  contact: {
    ...baseConfig.contact,
    whatsapp: baseConfig.contact.whatsappNumber,
    mapsEmbed: baseConfig.contact.mapsEmbedUrl,
    jamKerja: baseConfig.contact.operationalHours,
  },
  social: {
    facebook: baseConfig.socialMedia.facebook,
    instagram: baseConfig.socialMedia.instagram,
    youtube: baseConfig.socialMedia.youtube,
    twitter: baseConfig.socialMedia.tiktok,
    instagramHandle: '@' + (baseConfig.socialMedia.instagram?.split('/').filter(Boolean).pop() || 'sekolah'),
    youtubeChannel: baseConfig.identity.shortName,
  },
  kepsek: {
    name: baseConfig.principal.name,
    title: baseConfig.principal.title,
    photo: baseConfig.principal.photo,
    period: 'Periode Berjalan',
  },
  ppdb: baseConfig.ppdb,
};
