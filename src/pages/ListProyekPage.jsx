import React from "react"
import { Helmet } from "react-helmet"

import ListProyek from "../assets/heroimage1.png"

const ListProyekPage = () => {
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
          backgroundImage: `url(${ListProyek})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[245px] w-full bg-black/50">
          <div className="container py-20">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              List Proyek
            </h1>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              PT. Citra Diecona
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListProyekPage
