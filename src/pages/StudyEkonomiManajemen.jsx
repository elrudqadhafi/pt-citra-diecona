import React from "react"
import { Helmet } from "react-helmet"

import Wilayah from "../assets/wilayah.png"

const StudyEkonomiManajemen = () => {
  return (
    <>
      <Helmet>
        <title>Study Ekonomi & Manajemen | PT Citra Diecona</title>
        <meta
          name="description"
          content="PT Citra Diecona adalah perusahaan yang bergerak dibidang penyedia jasa layanan konsultan dalam bidang Perencanaan Teknik, Pengawasan dan Manajemen umum pada Instansi, Lembaga, Perusahaan Pemerintah maupun Pihak Swasta."
        />
        <meta
          name="keywords"
          content="citra diecona, PT Citra Diecona,sektor pembangunan fasilitas dan manajemen industri, pembangunan fasilitas dan manajemen industri, perusahaan yang bergerak di bidang konstruksi, pembangunan, dan manufaktur, konsultan proyek, consulting engineers"
        />
      </Helmet>

      <div
        className="h-[300px]"
        style={{
          backgroundImage: `url(${Wilayah})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[300px] w-full bg-black/50">
          <div className="container py-36">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Study
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Ekonomi & Manajemen
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              PT. Citra Diecona
            </h1>
          </div>
        </div>
      </div>

      <div className="pt-5 lg:pt-14 pb-14">
        <div className="container">
          <h1 className="text-base md:text-lg">
            PT. CITRA DIECONA juga bergerak dibidang Non Konstruksi yang
            menyediakan jasa konsultasi terkait dengan aspek Ekonomi, Manajemen
            Proyek, serta Riset yang diperlukan untuk membantu perusahaan atau
            lembaga dalam pengambilan keputusan strategis, Manajemen Proyek, dan
            pengelolaan sumber daya secara efisien dan efektif.
          </h1>

          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Adapun Kontribusi Perusahan Kami dalam memberikan pelayan study
              ekonomi dan manajemen sebagai berikut :
            </h1>

            <ul className="list-decimal list-outside ml-5">
              <li className="text-base md:text-lg mt-3 font-semibold">
                Study Ekonomi & Manajemen :
              </li>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Study Ekonomi : </span> Pada
                tingkat ekonomi, Kami akan melakukan penelitian dan analisis
                ekonomi untuk memahami dampak proyek atau kebijakan terhadap
                aspek ekonomi, evaluasi investasi, dan penentuan kebijakan
                ekonomi yang tepat
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold"> Study Manajemen : </span>
                Ini mencakup penelitian dan analisis manajemen organisasi. Kami
                akan membantu meningkatkan efisiensi operasional, pengembangan
                strategi bisnis, manajemen sumber daya manusia, dan strategi
                keuangan.
              </p>
              <li className="text-base md:text-lg mt-3 font-semibold">
                Study Ekonomi Regional & Perkotaan :
              </li>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Study Ekonomi Regional : </span>
                dalam konteks ekonomi regional, Kami akan melakukan penelitian
                tentang dampak ekonomi di tingkat wilayah atau daerah tertentu.
                Ini biasa mencakup analisis perkembangan ekonomi, pertumbuhan
                sektor-sektor kunci, dan perencanaan pembangunan regional.
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Study Ekonomi Perkotaan :</span>
                Ini berkaitan dengan analisis ekonomi dalam konteks Perkotaan,
                Termasuk pertumbuhan populasi kota, penggunaan lahan,
                pembangunan infrastruktur, dan kebijakan Perkotaan. Analisi ini
                membantu merancang perkembangan Perkotaan yang berkelanjutan.
              </p>
              <li className="text-base md:text-lg mt-3 font-semibold">
                Riset Pemasaran :
              </li>
              <p className="text-base md:text-lg mt-2">
                Riset Pemasaran melibatkan analisis pasar dan perilaku konsumen.
                Kami akan melakukan penelitian pasar untuk memahami preferensi
                konsumen, tren pasar, dan peluang bisnis. Data ini digunakan
                untuk mengembangkan strategi pemasaran dan mengoptimalkan produk
                atau layanan yang ditawarkan.
              </p>
              <li className="text-base md:text-lg mt-3 font-semibold">
                Konsultasi Manajemen Proyek :
              </li>
              <p className="text-base md:text-lg mt-2">
                Kami menyediakan layanan konsultasi manajemen proyek yang
                mencakup berbagai aspek seperti :
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Analisi Proyek : </span>
                Ini melibatkan evaluasi proyek-proyek yang sedang direncanakan,
                termasuk analisi biaya, resiko, dan manfaatnya.
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Benefit Cost Analysis : </span>
                Untuk menilai apakah proyek layak, kami akan melakukan analisis
                biaya-manfaat yang membandingkan biaya dengan manfaat yang
                diinginkan.
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Pengendalian Biaya : </span>
                Kami akan membantu dalam mengelola anggaran proyek dan
                mengendalikan biaya agar tetap sesuai dengan perkiraan.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudyEkonomiManajemen
