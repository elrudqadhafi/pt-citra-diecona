import React from "react"

import TentangKamiImg from "../assets/heroimage1.png"
import { Helmet } from "react-helmet"

const AllProyekPage = () => {
  return (
    <>
      <Helmet>
        <title>Proyek| PT Citra Diecona</title>
        <meta
          name="description"
          content="PT Citra Diecona adalah perusahaan yang bergerak dibidang penyedia jasa layanan konsultan dalam bidang Perencanaan Teknik, Pengawasan dan Manajemen umum pada Instansi, Lembaga, Perusahaan Pemerintah maupun Pihak Swasta."
        />
        <meta
          name="keywords"
          content="proyek citra diecona, proyek, PT Citra Diecona, Perusahaan yang bergerak di bidang konstruksi, pembangunan, dan manufaktur, konsultan proyek, consulting engineers, proyek, proyek konstruksi, semua proyek."
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
        <div className="h-[300px] w-full bg-black/50">
          <div className="container py-36">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase font-serif">
              Proyek
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

export default AllProyekPage
