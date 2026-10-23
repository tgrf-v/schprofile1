import React from 'react';
import ProfilLayout from '../../components/ProfilLayout';

export default function Sambutan() {
  return (
    <ProfilLayout
      title="Sambutan Kepala Sekolah"
      bannerImage="/assets/foto_sekolah.jpg"
    >
      <div className="space-y-6">
        {/* Foto Potret Kepala Sekolah (Center Aligned, ACS Jakarta Style) */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <img
              src="/assets/kepsek.jpg"
              alt="Dr. H. Ahmad Fauzi, M.Pd."
              className="w-56 sm:w-64 h-72 sm:h-80 object-cover object-top shadow-xs"
            />
          </div>
        </div>

        {/* Naskah Editorial Sambutan */}
        <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
          <p className="font-medium text-gray-900">
            <em>Assalamu’alaikum Warahmatullahi Wabarakatuh,</em>
          </p>

          <p>
            Puji syukur senantiasa kita panjatkan ke hadirat Allah Subhanahu Wa Ta'ala atas segala limpahan rahmat, karunia, dan hidayah-Nya. Selamat datang di portal resmi sekolah kami, sebuah ruang digital yang kami dedikasikan sebagai jembatan komunikasi, informasi, dan transparansi bagi seluruh keluarga besar sekolah, orang tua/wali murid, serta masyarakat luas.
          </p>

          <p>
            Di tengah laju peradaban abad ke-21 yang serba cepat dan dinamis, dunia pendidikan dihadapkan pada tanggung jawab besar. Kami meyakini bahwa keberhasilan pendidikan tidak semata-mata diukur dari pencapaian nilai akademik di atas kertas, melainkan dari kokohnya akhlakul karimah, keteguhan adab, integritas moral, serta kesiapan mental peserta didik dalam menghadapi tantangan zaman.
          </p>

          <p>
            Sekolah kami hadir dengan komitmen menghadirkan ekosistem pembelajaran yang holistik. Kami memadukan keunggulan sains dan teknologi modern dengan fondasi nilai-nilai keislaman yang luhur. Melalui kurikulum terpadu, sarana riset yang representatif, pembiasaan literasi mandiri, serta bimbingan intensif dari dewan asatidzah berkompeten, kami berikhtiar mengantarkan setiap santri menemukan versi terbaik dari potensi dirinya.
          </p>

          <p>
            Kami percaya bahwa proses pendidikan yang unggul lahir dari kolaborasi yang erat dan harmonis antara sekolah, keluarga, dan lingkungan masyarakat. Dengan sinergi yang terus terjaga, kami optimis generasi penerus yang lahir dari rahim sekolah ini akan tumbuh menjadi pemimpin-pemimpin masa depan yang berwawasan global, berjiwa ksatria, dan bermanfaat seluas-luasnya bagi agama, bangsa, dan umat manusia.
          </p>

          <p>
            Terima kasih yang sebesar-besarnya kami sampaikan kepada seluruh orang tua yang telah mengamanahkan putra-putrinya di sekolah kami. Semoga Allah Subhanahu Wa Ta'ala senantiasa meridhoi setiap ikhtiar tulus kita bersama.
          </p>

          <p className="font-medium text-gray-900 pt-2">
            <em>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</em>
          </p>

          {/* Tanda Tangan / Penutup Jabatan */}
          <div className="pt-8 border-t border-gray-100">
            <h4 className="font-bold text-gray-900 text-base">Dr. H. Ahmad Fauzi, M.Pd.</h4>
            <p className="text-sm text-gray-600">Kepala Sekolah</p>
          </div>
        </div>
      </div>
    </ProfilLayout>
  );
}
