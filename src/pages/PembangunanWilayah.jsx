import React from "react"
import { Helmet } from "react-helmet"

import Wilayah from "../assets/wilayah.png"

const PembangunanWilayah = () => {
  return (
    <>
      <Helmet>
        <title>Pembangunan Wilayah | PT Citra Diecona</title>
        <meta
          name="description"
          content="PT Citra Diecona adalah perusahaan yang bergerak dibidang penyedia jasa layanan konsultan dalam bidang Perencanaan Teknik, Pengawasan dan Manajemen umum pada Instansi, Lembaga, Perusahaan Pemerintah maupun Pihak Swasta."
        />
        <meta
          name="keywords"
          content="citra diecona, PT Citra Diecona,sektor pembangunan wilayah, pembangunan wilayah, perusahaan yang bergerak di bidang konstruksi, pembangunan, dan manufaktur, konsultan proyek, consulting engineers"
        />
      </Helmet>

      <div
        className="py-14 h-[300px]"
        style={{
          backgroundImage: `url(${Wilayah})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[245px] w-full bg-black/50">
          <div className="container py-16 md:py-20">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Sektor
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Pembangunan Wilayah
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
            <span className="font-semibold">PT CITRA DIECONA </span> adalah
            perusahaan konsultasi yang bergerak di berbagai layanan konsultasi
            teknik, termasuk di sektor Pembangunan Wilayah. Kami memiliki
            keahlian dan pengalaman dalam berbagai aspek pembangunan kota dan
            pembangunan daerah. Pembangunan kota dan daerah adalah salah satu
            bidang utama yang memengaruhi kualitas hidup masyarakat dan
            pertumbuhan ekonomi suatu wilayah. Kami menawarkan layanan
            konsultasi teknik yang komprehensif untuk membantu mewujudkan
            proyek-proyek pembangunan yang berkelanjutan, fungsional, dan
            estetis.
          </h1>

          <div className="pt-4">
            <h1 className="text-base md:text-lg">
              Di bawah ini, kami merinci beberapa aspek penting yang menjadi
              fokus kami dalam membantu mencapai tujuan pembangunan kota dan
              daerah yang sukses :
            </h1>
          </div>
          <div className="pt-5">
            <p className="text-base md:text-lg font-semibold">
              1. Sistem Lalu Lintas dan Terminal Pengangkutan
            </p>
            <ul className="list-disc list-outside ml-8">
              <li className="text-base md:text-lg mt-1">
                Kami memiliki tim ahli yang mampu merancang dan mengelola sistem
                lalu lintas yang efisien dan aman, termasuk perencanaan jaringan
                jalan, konsep transportasi umum, dan pengembangan terminal
                pengangkutan yang nyaman bagi penduduk.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <p className="text-base md:text-lg font-semibold">
              2. Perancangan serta Perencanaan Kota, Pemukiman Transmigrasi,
              Lingkungan serta Tata Guna Tanah
            </p>
            <ul className="list-disc list-outside ml-8">
              <li className="text-base md:text-lg mt-1">
                Perusahaan kami mempunyai Tim yang memiliki keahlian dalam
                perencanaan tata ruang kota yang mencakup pemukiman,
                transmigrasi, serta pengaturan tata guna tanah yang sesuai
                dengan tujuan perkotaan yang berkelanjutan. Kami juga
                memprioritaskan pelestarian lingkungan dan menjaga kualitas alam
                sekitar.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <p className="text-base md:text-lg font-semibold">
              3. Pembangunan Kota-kota Baru dan Peremajaan Kota
            </p>
            <ul className="list-disc list-outside ml-8">
              <li className="text-base md:text-lg mt-1">
                Kami dapat membantu dan ahli dalam perencanaan dan pelaksanaan
                proyek pembangunan kota baru atau peremajaan kota yang ada. Ini
                mencakup perencanaan fisik seperti infrastruktur, perumahan,
                fasilitas umum, dan pusat bisnis.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <p className="text-base md:text-lg font-semibold">
              4. Perencanaan Fasilitas Umum dan Rekreasi
            </p>
            <ul className="list-disc list-outside ml-8">
              <li className="text-base md:text-lg mt-1">
                Kami memiliki pengalaman dalam merencanakan fasilitas umum
                penting seperti sekolah, rumah sakit, dan area perbelanjaan,
                serta proyek-proyek rekreasi seperti taman kota, lapangan
                olahraga, dan tempat rekreasi lainnya.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <p className="text-base md:text-lg font-semibold">
              5. Perencanaan Arsitektur Landscape
            </p>
            <ul className="list-disc list-outside ml-8">
              <li className="text-base md:text-lg mt-1">
                Tim arsitek lanscape kami dapat membantu dalam merancang
                elemen-elemen lingkungan yang memperindah wilayah Anda. Ini
                termasuk pelestarian alam, taman kota, dan elemen estetika
                lainnya yang meningkatkan kualitas lingkungan.
              </li>
            </ul>
          </div>

          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Kami berkomitmen memberikan yang terbaik untuk merancang solusi
              yang sesuai dengan visi mereka dan memastikan bahwa proyek-proyek
              pembangunan yang kami bantu mengelola berkontribusi positif
              terhadap perkembangan kota dan daerah yang berkelanjutan dan
              unggul.
            </h1>
          </div>
          <div className="pt-2">
            <h1 className="text-base md:text-lg">
              Dengan dukungan tim kami yang berpengalaman dan pengetahuan yang
              mendalam dalam pembangunan kota dan daerah, kami siap menjadi
              mitra Anda dalam mewujudkan visi pembangunan yang sukses dan
              berkelanjutan. Jangan ragu untuk menghubungi kami untuk informasi
              lebih lanjut atau untuk memulai kolaborasi kami dalam menghadirkan
              perubahan positif bagi masyarakat.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default PembangunanWilayah
