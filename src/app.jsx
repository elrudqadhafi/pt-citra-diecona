import React from "react"
import { Routes, Route } from "react-router-dom"

import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import SertifikatPenghargaan from "./pages/SertifikatPenghargaan"
import FooterComponent from "./components/FooterComponent"
import NavbarComponent from "./components/Navbar/NavbarComponent"
import SumberDayaAir from "./pages/SumberDayaAir"
import PembangunanWilayah from "./pages/PembangunanWilayah"
import PembangunanLingkungan from "./pages/PembangunanLingkungan"
import FasilitasIndustri from "./pages/FasilitasIndustri"
import StudyEkonomiManajemen from "./pages/StudyEkonomiManajemen"
import AllProyekPage from "./pages/AllProyekPage"
import Infrastruktur from "./pages/Infrastruktur"
import ListProyekPage from "./pages/ListProyekPage"
import CompanyProfile from "./pages/CompanyProfile"
import StrukturOrganisasi from "./pages/StrukturOrganisasi"

const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/tentang-kami" Component={Aboutpage} />
        <Route
          path="/sertifikat-penghargaan"
          Component={SertifikatPenghargaan}
        />
        <Route path="company-profile" Component={CompanyProfile} />
        <Route path="/struktur-organisasi" Component={StrukturOrganisasi} />
        <Route path="/proyek-citra-diecona" Component={AllProyekPage} />
        <Route path="/list-proyek-citra-diecona" Component={ListProyekPage} />
        <Route path="/infrastruktur" Component={Infrastruktur} />
        <Route path="/sumber-daya-air" Component={SumberDayaAir} />
        <Route path="/pembangunan-wilayah" Component={PembangunanWilayah} />
        <Route
          path="/pembangunan-lingkungan"
          Component={PembangunanLingkungan}
        />
        <Route
          path="/pembangunan-fasilitas-industri"
          Component={FasilitasIndustri}
        />
        <Route
          path="/study-ekonomi-manajemen"
          Component={StudyEkonomiManajemen}
        />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
