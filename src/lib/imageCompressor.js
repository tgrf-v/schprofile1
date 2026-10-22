/**
 * Utilitas Kompresi Gambar Sisi Klien (Client-Side Image Compressor)
 * Mengompresi file gambar secara otomatis sebelum diunggah ke storage
 * guna menghemat bandwidth dan mempercepat loading halaman.
 */

export async function compressImage(file, options = {}) {
  const {
    maxWidth = 1920,
    maxHeight = 1920,
    quality = 0.82,
    outputType = 'image/jpeg',
  } = options;

  // Hanya proses jika file adalah gambar
  if (!file || !file.type.startsWith('image/')) {
    return file;
  }

  // Jika file berupa SVG atau GIF beranimasi, jangan dikompresi agar tidak rusak
  if (file.type === 'image/svg+xml' || file.type === 'image/gif') {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        // Hitung skala proporsional
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(file); // fallback ke file asli jika context canvas gagal
          return;
        }

        // Gambar ulang dengan smoothing tinggi
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }

            // Ganti ekstensi file jika diubah ke JPEG
            let newName = file.name;
            if (outputType === 'image/jpeg' && !newName.toLowerCase().endsWith('.jpg') && !newName.toLowerCase().endsWith('.jpeg')) {
              newName = newName.replace(/\.[^/.]+$/, '') + '.jpg';
            }

            const compressedFile = new File([blob], newName, {
              type: outputType,
              lastModified: Date.now(),
            });

            // Jika hasil kompresi ternyata lebih besar dari aslinya, gunakan aslinya
            if (compressedFile.size > file.size) {
              resolve(file);
            } else {
              resolve(compressedFile);
            }
          },
          outputType,
          quality
        );
      };

      img.onerror = () => resolve(file);
      img.src = event.target.result;
    };

    reader.onerror = () => resolve(file);
    reader.readAsDataURL(file);
  });
}

/**
 * Format ukuran file ke format yang mudah dibaca (KB / MB)
 */
export function formatBytes(bytes, decimals = 1) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
