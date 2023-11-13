import React from "react"
import { Helmet } from "react-helmet"

import SertifikatPenghargaan from "../assets/heroimage1.png"
import { sertifikat } from "../data"

const sertifikatPenghargaan = () => {
  return (
    <>
      <Helmet>
        <title>Struktur Organisasi | PT Citra Diecona</title>
        <meta
          name="description"
          content="PT Citra Diecona adalah perusahaan yang bergerak dibidang penyedia jasa layanan konsultan dalam bidang Perencanaan Teknik, Pengawasan dan Manajemen umum pada Instansi, Lembaga, Perusahaan Pemerintah maupun Pihak Swasta."
        />
        <meta
          name="keywords"
          content="struktur organisasi, PT Citra Diecona, Perusahaan yang bergerak di bidang konstruksi, pembangunan, dan manufaktur, konsultan proyek, consulting engineers"
        />
      </Helmet>

      <div
        className="h-[300px]"
        style={{
          backgroundImage: `url(${SertifikatPenghargaan})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[300px] w-full bg-black/50">
          <div className="container py-36">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Sertifikat & Penghargaan
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              PT. Citra Diecona
            </h1>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="container">
          <div className="md:flex md:justify-center md:flex-wrap gap-6 lg:gap-5">
            {sertifikat.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-[215px] lg:w-[370px] mb-5 sm:mb-0"
                >
                  <img src={item.image} alt="sertifikat" className="w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default sertifikatPenghargaan
