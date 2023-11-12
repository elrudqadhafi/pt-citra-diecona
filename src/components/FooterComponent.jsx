import React from "react"

import FooterLogo from "../assets/footerlogo.png"
import Iso1 from "../assets/isosatu.png"
import Iso2 from "../assets/isodua.png"
import Iso3 from "../assets/isotiga.png"

const FooterComponent = () => {
  return (
    <footer className="bg-blue-950">
      <div className="container">
        <div className="md:flex md:justify-between py-10">
          <div>
            <img
              src={FooterLogo}
              alt="Logo Footer Image"
              className="h-10 md:h-12"
            />
          </div>
          <div className="mt-10 md:mt-0">
            <h1 className="text-white uppercase pb-5">
              Sertifikasi Perusahaan
            </h1>
            <div className="bg-white flex justify-center gap-8 py-3 px-3">
              <img src={Iso1} alt="iso-image1" className="h-16 lg:h-20" />
              <img src={Iso2} alt="iso-image2" className="h-16 lg:h-20" />
              <img src={Iso3} alt="iso-image3" className="h-16 lg:h-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-400/20 py-3 text-white">
        <p className="text-center text-[17px]">
          &copy; Copyright {new Date().getFullYear()}{" "}
          <span className="uppercase font-serif font-medium">
            PT. Citra Diecona
          </span>
        </p>
        <p className="text-center text-[17px]">All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default FooterComponent
