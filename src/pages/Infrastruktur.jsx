import React from "react"
import { Helmet } from "react-helmet"

import InfrastrukturImg from "../assets/konstruksi.png"

const Infrastruktur = () => {
  return (
    <>
      <Helmet>
        <title>Sektor Infrastruktur | PT Citra Diecona</title>
        <meta
          name="description"
          content="PT Citra Diecona adalah perusahaan yang bergerak dibidang penyedia jasa layanan konsultan dalam bidang Perencanaan Teknik, Pengawasan dan Manajemen umum pada Instansi, Lembaga, Perusahaan Pemerintah maupun Pihak Swasta."
        />
        <meta
          name="keywords"
          content="citra diecona, PT Citra Diecona, sektor infrastruktur, infrastruktur, perusahaan yang bergerak di bidang konstruksi, pembangunan, dan manufaktur, konsultan proyek, consulting engineers"
        />
      </Helmet>

      <div
        className="h-[300px]"
        style={{
          backgroundImage: `url(${InfrastrukturImg})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[300px] w-full bg-black/50">
          <div className="container py-32 md:py-40">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Sektor Infrastruktur
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
            Sebagai salah satu perusahaan terbaik yang ada di indonesia,{" "}
            <span className="font-semibold">PT. CITRA DIECONA</span> sangat
            signifikan dalam menjalankan peran penting untuk memastikan
            kesuksesan proyek-proyek Konstruksi di sektor Infrastruktur. Dengan
            Pengalaman yang sudah lebih dari 10 tahun, Kami menyediakan panduan,
            pengetahuan, dan pengalaman teknis yang mendalam untuk membimbing
            proyek-proyek ini menuju pencapaian tujuan mereka. Dengan berbagai
            layanan yang kami tawarkan, kami tidak hanya menjadi mitra yang
            andal, tetapi juga berfungsi sebagai pendorong utama di balik
            perancangan, pelaksanaan, dan pengawasan proyek-proyek teknik yang
            sukses.
          </h1>

          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Adapun tugas yang kami lakukan di bidang Infrastruktur adalah :
            </h1>
            <ul className="list-disc list-outside ml-5 mt-3">
              <li className="text-base md:text-lg">
                Proyek Konstruksi Multi-fasilitas
              </li>
              <p className="text-base md:text-lg pt-1">
                Ini mencakup Study, Perencanaan, Desain, dan Supervisi
                proyek-proyek yang mendukung infrastruktur, seperti Jalan,
                Jembatan, Bangunan, Gedung, Lapangan Terbang, Tempat Ibadah,
                Hotel, Apartemen, Pasar, Mall, Perkantoran dan Fasilitas
                Konstruksi Lainnya. Serta Pengukuran dan Pemetaan untuk
                penciptaan peta topografi dan pengukuran lahan yang diperlukan
                untuk perencanaan proyek-proyek konstruksi. Kami juga melakukan
                Penelitian Tanah(Soil) guna menganalisis komposisi, tekstur,
                daya dukung, dan sifat-sifat tanah di lokasi konstruksi dan juga
                Penelitian Batu(Rock) untuk pemahaman tentang sifat fisik,
                mekanik, dan kimia batuan yang akan mempengaruhi konstruksi.
              </p>
              <li className="text-base md:text-lg pt-3">Manajemen Proyek</li>
              <p className="text-base md:text-lg pt-1">
                Pendekatan yang terstruktur dan metodis untuk mengelola sumber
                daya, jadwal, anggaran, dan risiko dalam rangka mencapai tujuan
                proyek dengan sukses. Ini melibatkan serangkaian tindakan yang
                cermat untuk merencanakan, mengorganisasi, mengawasi, dan
                mengkoordinasi semua elemen proyek. Fokus utamanya adalah untuk
                memastikan proyek selesai tepat waktu, dalam anggaran, dan
                sesuai dengan spesifikasi yang telah ditetapkan.
              </p>
              <p className="text-base md:text-lg pt-2">
                Tujuan utama manajemen proyek adalah mencapai kesuksesan proyek,
                yang sering diukur dengan faktor-faktor seperti kualitas, waktu,
                anggaran, dan memenuhi kebutuhan klien. Manajemen proyek
                membantu menjaga proyek tetap berjalan sesuai rencana,
                mengoptimalkan penggunaan sumber daya, dan meminimalkan risiko.
              </p>
            </ul>
            <div className="pt-5">
              <p className="text-base md:text-lg">
                Adapaun Peran dalam Manajemen Proyek sebagai berikut :
              </p>
              <ul className="list-disc list-outside ml-5 mt-3">
                <li className="text-base md:text-lg">
                  Perencanaan : Manajer proyek merencanakan setiap aspek proyek,
                  termasuk jadwal, anggaran, sumber daya manusia, dan bahan yang
                  diperlukan. Perencanaan yang cermat adalah landasan kesuksesan
                  proyek.
                </li>
                <li className="text-base md:text-lg pt-2">
                  Pengorganisasian: Ini melibatkan pengaturan tim, perolehan
                  sumber daya, dan penyusunan jadwal tugas-tugas. Manajer proyek
                  bertanggung jawab untuk memastikan bahwa semua yang diperlukan
                  tersedia.
                </li>
                <li className="text-base md:text-lg pt-2">
                  Pengawasan: Manajer proyek mengawasi kemajuan proyek secara
                  keseluruhan, memastikan bahwa proyek berjalan sesuai rencana
                  dan spesifikasi. Ini termasuk mengatasi masalah yang mungkin
                  muncul selama pelaksanaan.
                </li>
                <li className="text-base md:text-lg pt-2">
                  Koordinasi: Sebagai koordinator utama, manajer proyek
                  mengelola berbagai pihak terkait, termasuk subkontraktor,
                  pemasok, dan pihak berwenang. Koordinasi yang efisien
                  meminimalkan hambatan dan konflik dalam proyek.
                </li>
                <li className="text-base md:text-lg pt-2">
                  Pengendalian Risiko: Manajer proyek mengidentifikasi, menilai,
                  dan mengelola risiko yang dapat mempengaruhi proyek. Ini
                  melibatkan perencanaan untuk mengurangi dampak risiko atau
                  mengatasi masalah yang mungkin muncul.
                </li>
                <li className="text-base md:text-lg pt-2">
                  Pelaporan dan Komunikasi: Komunikasi yang efektif dengan semua
                  pihak terkait, termasuk klien dan tim proyek, adalah kunci
                  keberhasilan. Manajer proyek memberikan laporan berkala
                  tentang kemajuan proyek dan mengatasi perubahan yang mungkin
                  diperlukan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Infrastruktur
