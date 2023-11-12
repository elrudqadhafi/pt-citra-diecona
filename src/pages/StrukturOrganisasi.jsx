import React from "react"

import OrganisasiImg from "../assets/heroimage1.png"
import Struktur from "../assets/strukturorganisasi2.png"
import { Helmet } from "react-helmet"

const StrukturOrganisasi = () => {
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
        className="py-14 h-[300px]"
        style={{
          backgroundImage: `url(${OrganisasiImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[245px] w-full bg-black/50">
          <div className="container py-20">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Struktur Organisasi
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              PT. Citra Diecona
            </h1>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="container">
          <img
            src={Struktur}
            alt="struktur organisasi"
            className="w-full lg:w-[800px] block mx-auto"
          />
        </div>
      </div>
    </>
  )
}

export default StrukturOrganisasi
