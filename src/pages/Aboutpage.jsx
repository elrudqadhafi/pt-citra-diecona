import React from "react"

import TentangKamiImg from "../assets/heroimage1.png"
import { Helmet } from "react-helmet"

const Aboutpage = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Kami | PT Citra Diecona</title>
        <meta
          name="description"
          content="PT Citra Diecona adalah perusahaan yang bergerak dibidang penyedia jasa layanan konsultan dalam bidang Perencanaan Teknik, Pengawasan dan Manajemen umum pada Instansi, Lembaga, Perusahaan Pemerintah maupun Pihak Swasta."
        />
        <meta
          name="keywords"
          content="tentang citra diecona, PT Citra Diecona, Perusahaan yang bergerak di bidang konstruksi, pembangunan, dan manufaktur, konsultan proyek, consulting engineers"
        />
      </Helmet>

      <div
        className="h-[300px]"
        style={{
          backgroundImage: `url(${TentangKamiImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[300px] w-full bg-black/60">
          <div className="container py-36">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Tentang Kami
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              PT. Citra Diecona
            </h1>
          </div>
        </div>
      </div>

      <div className="py-8 md:py-14">
        <div className="container">
          <div>
            <h1 className="text-base md:text-lg">
              <span className="font-semibold">PT. CITRA DIECONA</span>, sebuah
              perusahaan yang didirikan pada tahun 1989 di Medan, telah diakui
              sebagai Badan Hukum yang sah dan bergerak di berbagai bidang
              konsultasi. Saat ini, perusahaan kami dikelola oleh tenaga muda
              yang dinamis dan profesional, sedang berkembang pesat di wilayah
              Sumatera Utara, dengan rencana untuk merambah ke seluruh
              Indonesia.
            </h1>
          </div>
          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Kantor pusat
              <span className="font-semibold"> PT. CITRA DIECONA </span>
              terletak di Medan, dan misi kami adalah memberikan layanan
              konsultasi dalam Perencanaan Teknik, Pengawasan, dan Manajemen
              Umum, baik untuk instansi pemerintah, lembaga, maupun perusahaan
              swasta.
            </h1>
          </div>
          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Lingkup pekerjaan yang kami tangani meliputi survei,
              pengawasan/supervisi, studi kelayakan, penelitian, manajemen
              proyek, evaluasi perencanaan, dan manajemen. Kami berperan dalam
              industri konstruksi dengan tujuan membantu instansi yang
              memerlukan bantuan dalam menyelesaikan tugas mereka
            </h1>
          </div>
        </div>
      </div>

      <div className="pb-14">
        <div className="container">
          <div>
            <h1 className="text-xl uppercase font-semibold">Bidang Kegiatan</h1>
            <div className="h-[2px] w-56 bg-blue-900 mt-3"></div>
          </div>

          <div className="pt-5">
            <p className="text-base md:text-lg">
              <span className="font-semibold">PT. CITRA DIECONA</span> memiliki
              Banyak tenaga ahli profesional yang terlibat dalam berbagai aspek
              pekerjaan, termasuk studi, investigasi, desain detail, pengawasan
              konstruksi, operasi dan pemeliharaan, serta pemantauan manfaat
              proyek. Layanan jasa konsultansi yang diberikan mencakup berbagai
              bidang:
            </p>
          </div>

          <div className="mt-5">
            <ul className="list-decimal list-outside pl-4">
              <li className="text-base md:text-lg mt-2">
                Tekni Sipil, Arsitektur & Irigasi
              </li>
              <li className="text-base md:text-lg mt-2">
                Pembangunan Kota & Pembangunan Daerah
              </li>
              <li className="text-base md:text-lg mt-2">
                Pembangunan Lingkungan
              </li>
              <li className="text-base md:text-lg mt-2">
                Pembangunan Fasilitas & Manajemen Industri
              </li>
              <li className="text-base md:text-lg mt-2">
                Study Ekonomi & Manajemen
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pb-14">
        <div className="container">
          <div>
            <h1 className="text-xl uppercase font-semibold">
              Tugas & Tanggung Jawab
            </h1>
            <div className="h-[3px] w-56 bg-blue-900 mt-3"></div>
          </div>

          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Sebagaimana tercantum dalam Akta Notaris Perubahan No. 14 tanggal
              07 September 2022, untuk mencapai Maksud dan Tujuan Perusahaan,
              kami dapat menjalankan kegiatan usaha sebagai berikut:
            </h1>

            <div className="pt-5">
              <p className="text-base md:text-lg">
                1. Jasa Konsultansi Konstruksi
              </p>
              <ul className="list-disc list-outside pl-8">
                <li className="text-base md:text-lg mt-2">
                  Pengawasan Rekayasa
                </li>
                <li className="text-base md:text-lg mt-2">
                  Perencanaan Rekayasa
                </li>
                <li className="text-base md:text-lg mt-2">
                  Konsultansi Spesialis
                </li>
              </ul>
              <p className="text-base md:text-lg mt-2">
                2. Jasa Konsultansi Lainnya
              </p>
              <p className="text-base md:text-lg mt-2">
                3. Jasa Konsultansi Non Konstruksi
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-14">
        <div className="container">
          <div>
            <h1 className="text-xl uppercase font-semibold">
              Tujuan Perusahaan
            </h1>
            <div className="h-[3px] w-56 bg-blue-900 mt-3"></div>
          </div>

          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Sebagaimana tercantum dalam Akta Notaris Perubahan No. 14 tanggal
              07 September 2022, untuk mencapai Maksud dan Tujuan Perusahaan
              adalah sebagai berikut:
            </h1>

            <div className="pt-5">
              <p className="text-base md:text-lg">
                Perusahaan kami berfokus pada industri jasa, dengan penekanan
                pada pemberian konsultansi guna menciptakan layanan yang
                berkualitas tinggi. Kami selalu berupaya menjaga daya saing yang
                kuat serta mengoptimalkan keuntungan untuk meningkatkan nilai
                perusahaan, semua ini dilakukan dengan berpegang teguh pada
                prinsip-prinsip yang telah dianut oleh perusahaan kami
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-14">
        <div className="container">
          <div>
            <h1 className="text-lg md:text-xl font-serif">Terima Kasih.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutpage
