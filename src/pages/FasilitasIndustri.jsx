import React from "react"
import { Helmet } from "react-helmet"

import Industri from "../assets/industri.png"

const FasilitasIndustri = () => {
  return (
    <>
      <Helmet>
        <title>
          Sektor Pembangunan Fasilitas & Manajemen Industri | PT Citra Diecona
        </title>
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
          backgroundImage: `url(${Industri})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[300px] w-full bg-black/50">
          <div className="container py-36">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Sektor
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Pembangunan Fasilitas & Manajemen Industri
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
            Pembangunan fasilitas dan manajemen industri adalah dua aspek yang
            sangat penting dalam dunia bisnis dan produksi. Dengan Tim yang
            sudah berpengalaman lebih dari 10 tahun dibidangnya, PT. CITRA
            DIECONA hadir untuk memberikan layanan konsultan yang berfokus pada
            perencanaan, pengembangan, dan pengelolaan fasilitas dan operasi
            industri.
          </h1>
          <div className="pt-5">
            <h1 className="text-base md:text-lg">
              Adapun Kontribusi Perusahan Kami dalam membangun fasilitas dan
              manejemen industri sebagai berikut :
            </h1>
            <ul className="list-decimal list-outside ml-5">
              <li className="text-base md:text-lg mt-3 font-semibold">
                Pemilihan dan Perencanaan Lokasi Kawasan Industri :
              </li>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Pemilihan Lokasi : </span> Ini
                adalah tahap awal dalam pembangunan fasilitas. Pemilihan lokasi
                industri yang tepat sangat penting karena akan mempengaruhi
                efisiensi operasional, akses pasar, dan biaya produksi. Faktor
                yang perlu dipertimbangkan termasuk akses ke pasokan, tenaga
                kerja, infrastruktur, akses transportasi, peraturan lingkungan,
                dan aspek-aspek lain yang relevan.
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold"> Perencanaan Lokasi : </span>
                Setelah lokasi dipilih, perlu dilakukan perencanaan yang
                melibatkan pengembangan masterplan untuk kawasan industri
                tersebut. Ini mencakup zonasi area, tata letak fasilitas,
                penempatan gedung, dan pengembangan infrastruktur seperti jalan,
                listrik, air, dan sanitasi.
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold"> Tujuan : </span>
                Tujuan dari pekerjaan ini adalah memastikan bahwa kawasan
                industri yang dipilih dan direncanakan dapat mendukung operasi
                industri dengan efisien, sesuai dengan kebutuhan perusahaan, dan
                mematuhi regulasi yang berlaku.
              </p>
              <li className="text-base md:text-lg mt-3 font-semibold">
                Perencanaan Teknis dan Operasional Proses Industri :
              </li>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">Perencanaan Teknis : </span>Ini
                mencakup perancangan teknis dari fasilitas produksi, termasuk
                desain bangunan, peralatan, sistem produksi, dan teknologi yang
                digunakan. Desain teknis harus memenuhi spesifikasi produk yang
                akan dihasilkan.
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold">
                  Perencanaan Operasional :{" "}
                </span>
                Ini berkaitan dengan bagaimana operasi industri akan berjalan
                sehari-hari. Ini mencakup pengaturan alur kerja, pengelolaan
                rantai pasokan, manajemen persediaan, jadwal produksi, perawatan
                peralatan, dan kebijakan keselamatan.
              </p>
              <p className="text-base md:text-lg mt-2">
                <span className="font-semibold"> Tujuan : </span>
                Tujuan dari pekerjaan ini adalah memastikan bahwa proses
                produksi berjalan dengan efisien, aman, dan sesuai dengan
                standar kualitas yang diinginkan. Ini juga melibatkan
                perencanaan kapasitas untuk memastikan perusahaan dapat memenuhi
                permintaan pasar.
              </p>
            </ul>

            <div className="pt-5">
              <h1 className="text-base md:text-lg">
                Kedua jenis pekerjaan ini bekerja bersama untuk menciptakan
                lingkungan industri yang efisien dan berkelanjutan. Pemilihan
                lokasi yang tepat akan mendukung perencanaan teknis dan
                operasional proses industri, dan perencanaan yang baik dalam
                kedua area ini akan memastikan bahwa fasilitas dan operasi
                industri berjalan dengan baik sesuai dengan kebutuhan dan tujuan
                perusahaan.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FasilitasIndustri
