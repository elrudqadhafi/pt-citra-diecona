import React, { useState } from "react"
import { Helmet } from "react-helmet"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

import HeroImage from "../assets/heroimg1.png"

import { Link } from "react-router-dom"
import { accordion, layanan, partner, proyek, sektorUsaha } from "../data"
import AccordionComponent from "../components/AccordionComponent"

const Homepage = () => {
  const [open, setOpen] = useState(0)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }

  return (
    <>
      <Helmet>
        <title>Halaman Utama | PT Citra Diecona</title>
        <meta
          name="description"
          content="PT Citra Diecona adalah perusahaan yang bergerak dibidang penyedia jasa layanan konsultan dalam bidang Perencanaan Teknik, Pengawasan dan Manajemen umum pada Instansi, Lembaga, Perusahaan Pemerintah maupun Pihak Swasta."
        />
        <meta
          name="keywords"
          content="PT Citra Diecona, Perusahaan yang bergerak di bidang konstruksi, pembangunan, dan manufaktur, konsultan proyek, consulting engineers"
        />
      </Helmet>

      <div
        className="md:h-[450px] lg:h-screen"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-black/50">
          <div className="container pb-14 pt-32 lg:pt-64 lg:pb-0">
            <div className="">
              <h3 className="font-light text-white text-sm lg:text-base">
                Welcome
              </h3>
              <h1 className="text-3xl ss:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                PT. CITRA DIECONA
              </h1>
              <p className="text-white font-medium ss:text-lg md:text-xl lg:text-2xl pt-1">
                Consultant & Management Engineering
              </p>
              <div className="lg:w-[750px]">
                <p className="font-light md:text-lg lg:text-xl text-white mt-2">
                  Menyediakan layanan konsultasi profesional di berbagai aspek
                  seperti Perencanaan Teknik, Pengawasan, dan Manajemen Umum,
                  bagi berbagai entitas, termasuk instansi pemerintah, lembaga,
                  serta perusahaan swasta.
                </p>
              </div>
              <div className="flex items-baseline mt-5 underline text-white/70 text-lg">
                <Link to="/tentang-kami">Baca Selengkapnya</Link>
                <i className="ri-arrow-right-line text-base"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase">
              Lingkup & Layanan Pekerjaan
            </h1>
            <div className="h-[3px] w-40 bg-blue-900 rounded-full mt-2 sm:mt-4 mx-auto"></div>
            <p className="font-light text-base md:text-[18px] mt-6">
              Citra Diecona Selalu Berkomitmen Untuk Memberikan Pelayanan yang
              Unggul serta Berkualitas.
            </p>
          </div>

          <div className="mt-16 sm:flex sm:flex-wrap sm:gap-4 sm:justify-evenly ">
            {layanan.map((layanan) => {
              return (
                <div
                  key={layanan.id}
                  className="py-2 px-2 mb-5 sm:mb-0 sm:w-64 md:w-80 lg:w-[355px] 2xl:w-[375px]"
                >
                  <div className="flex justify-center items-center h-32 w-32 rounded mb-5 mx-auto">
                    <img
                      src={layanan.image}
                      alt={layanan.title}
                      className="w-24 object-cover"
                    />
                  </div>
                  <div className="sm:h-40 md:h-36 lg:h-[120px] border-2 border-blue-900  mt-5 py-4 px-2 rounded">
                    <div className="py-2 px-1 bg-blue-900 -mt-10 rounded">
                      <h1 className="text-lg text-white text-center uppercase">
                        {layanan.title}
                      </h1>
                    </div>
                    <p className="text-black pt-2 font-light text-center">
                      {layanan.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-blue-400/40 py-2">
        <div className="bg-blue-900 py-10">
          <div className="container">
            <div className="w-80 md:w-96 lg:w-[500px] h-[1px] bg-white/50 mx-auto"></div>
            <div className="border-[1px] border-blue-500/40 py-3 px-2 w-[300px] my-5 mx-auto">
              <h1 className="text-center text-xl text-white uppercase">
                Tersebar Diseluruh Indonesia
              </h1>
            </div>
            <div className="w-80 md:w-96 lg:w-[500px] h-[1px] bg-white/30 mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-blue-800/5">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase">
              Sektor Usaha
            </h1>
            <div className="h-[3px] w-40 bg-blue-900 rounded-full mt-2 sm:mt-4  mx-auto"></div>
            <p className="font-light text-base md:text-[18px] mt-6">
              Citra Diecona fokus pada penguatan bisnis yang ada dengan terus
              memperbaiki produk dan layanan, menawarkan harga yang kompetitif,
              dan memilih proyek-proyek yang memberikan nilai tambah yang
              tinggi.
            </p>
          </div>

          <div className="mt-14">
            <div className="sm:flex sm:flex-wrap sm:gap-4 sm:justify-evenly">
              {sektorUsaha.map((sektor) => {
                return (
                  <Link to={sektor.path} key={sektor.id}>
                    <div className="mb-5 sm:mb-0 sm:w-64 md:w-80 lg:w-[355px] 2xl:w-[375px] overflow-hidden duration-300 hover:bg-white/50 hover:shadow hover:overflow-hidden">
                      <div>
                        <img
                          src={sektor.image}
                          alt={sektor.title}
                          className="w-full"
                        />
                      </div>
                      <div className="py-4 px-2">
                        <h1 className="text-lg md:text-xl text-black uppercase">
                          {sektor.title}
                        </h1>
                        <p className="pt-1 text-black md:text-lg font-extralight">
                          {sektor.desc}
                        </p>

                        <div className="mt-3 flex items-baseline underline text-base text-blue-600 hover:text-blue-400 font-light">
                          <h1>Lihat Detail</h1>
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase">
              Kualifikasi
            </h1>
            <div className="h-[3px] w-40 bg-blue-900 rounded-full mt-2 sm:mt-4  mx-auto"></div>
          </div>

          <div className="mt-10">
            <div className="w-full lg:w-[1000px] mx-auto">
              {accordion.map((accordion, index) => {
                return (
                  <AccordionComponent
                    key={index}
                    open={index === open}
                    title={accordion.title}
                    image={accordion.image}
                    toggle={() => toggle(index)}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase">
              Partner Kami
            </h1>
            <div className="h-[3px] w-40 bg-blue-900 rounded-full mt-2 sm:mt-4  mx-auto"></div>
          </div>

          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Navigation]}
            className="flex justify-center items-center"
          >
            {partner.map((partner) => {
              return (
                <SwiperSlide key={partner.id} className="mb-14 sm:mt-10">
                  <div className="h-48 w-48 bg-blue-900/5 flex justify-center items-center mx-auto">
                    <img
                      src={partner.image}
                      alt=""
                      className="mx-auto block w-[150px]"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>

      <div className="bg-blue-400/40 py-2">
        <div className="bg-blue-900 py-10">
          <div className="container">
            <div className="w-80 md:w-96 lg:w-[500px] h-[1px] bg-white/50 mx-auto"></div>
            <div className="my-5 mx-auto lg:w-[850px]">
              <h1 className="text-center text-xl lg:text-2xl text-white uppercase">
                Selalu Ada Solusi
              </h1>
              <p className="text-base lg:text-lg text-white font-light text-center pt-3">
                Sebagai Konsultan Terbaik, Kami Selalu Menghadirkan Solusi.
                Dalam setiap proyek, kami berkomitmen untuk menemukan solusi
                teknis terbaik yang memenuhi kebutuhan Anda
              </p>
            </div>
            <div className="w-80 md:w-96 lg:w-[500px] h-[1px] bg-white/30 mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase">
              Proyek Kami
            </h1>
            <div className="h-[3px] w-40 bg-blue-900 rounded-full mt-2 sm:mt-4  mx-auto"></div>
          </div>

          <div className="mt-14">
            <div className="sm:flex sm:flex-wrap sm:gap-4 sm:justify-evenly">
              {proyek.map((proyek) => {
                return (
                  <div
                    key={proyek.id}
                    className="mb-5 sm:mb-0 sm:w-64 md:w-80 lg:w-[355px] 2xl:w-[375px] overflow-hidden duration-300 bg-white shadow rounded"
                  >
                    <div>
                      <img
                        src={proyek.image}
                        alt={proyek.title}
                        className="w-full h-56"
                      />
                    </div>

                    <div className="py-4 px-2">
                      <h1 className="text-lg md:text-lg text-black uppercase">
                        {proyek.title}
                      </h1>
                      <p className="pt-1 text-black md:text-lg font-extralight">
                        {proyek.work}
                      </p>
                      <p className="pt-3 text-black md:text-lg font-extralight">
                        <i className="ri-map-pin-2-line mr-2"></i>
                        {proyek.location}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="py-3 px-6 bg-blue-900 text-white rounded text-lg">
              <Link to="/proyek-citra-diecona">Lihat Semua Proyek</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="sm:container">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase">
              Lokasi Kantor
            </h1>
            <div className="h-[3px] w-40 bg-blue-900 rounded-full mt-2 sm:mt-4  mx-auto"></div>
          </div>
          <div className="lg:flex items-canter justify-center">
            <div className="mt-8 bg-blue-900 py-10 px-3 md:px-8 rounded-2xl w-full lg:w-[700px]">
              <div>
                <div>
                  <h1 className="text-xl uppercase text-white font-medium">
                    Kantor Medan
                  </h1>
                  <div className="bg-blue-400/40 py-3 px-3 w-full mt-5 rounded">
                    <div className="flex items-start text-lg gap-2 text-white">
                      <i className="ri-map-pin-fill"></i>
                      <h1>JL. Bunga Cempaka No.31-E Medan 20131</h1>
                    </div>
                  </div>
                  <div className="bg-blue-400/40 py-3 px-3 w-full mt-5 rounded">
                    <div className="flex items-start text-lg gap-2 text-white">
                      <i className="ri-phone-fill"></i>
                      <h1>( 061 ) 8223501 - Fax. ( 061 ) 8223502</h1>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h1 className="text-xl uppercase text-white font-medium">
                    Kantor Jakarta
                  </h1>
                  <div className="bg-blue-400/40 py-3 px-3 w-full mt-5 rounded">
                    <div className="flex items-start text-lg gap-2 text-white">
                      <i className="ri-map-pin-fill"></i>
                      <h1>
                        Gedung Palma One, 7th Floor #709 <br /> JL.HR.Rasuna
                        Said Kav X2 No.4 Jakarta 12950
                      </h1>
                    </div>
                  </div>
                  <div className="bg-blue-400/40 py-3 px-3 w-full mt-5 rounded">
                    <div className="flex items-center text-lg gap-2 text-white">
                      <i className="ri-phone-fill"></i>
                      <h1>021 - 5228094</h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h1 className="text-xl uppercase text-white font-medium">
                    Email
                  </h1>
                  <div className="bg-blue-400/40 py-3 px-3 w-full mt-5 rounded">
                    <div className="flex items-center text-lg gap-2 text-white">
                      <i className="ri-mail-fill"></i>
                      <h1>pt_citra_diecona@yahoo.co.id</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="md:flex md:items-center lg:flex-col md:mt-10 md:gap-6">
                {/* <div className="lg:ml-10 mt-10 md:mt-0 mx-auto w-[300px] h-[200px] lg:h-[300px] ss:w-[350px] md:w-[500px] lg:w-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.156571182805!2d98.64422497477663!3d3.5513588505489797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fefdb73f91b%3A0x665473630dd894bb!2sPT.Citra%20Diecona!5e0!3m2!1sid!2sid!4v1699284188540!5m2!1sid!2sid"
                    height="100%"
                    width="100%"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div> */}
                {/* <div className="lg:ml-10 mt-5 md:mt-0 mx-auto w-[300px] h-[200px] lg:h-[300px] ss:w-[350px] md:w-[500px] lg:w-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2758509852065!2d106.83107392483586!3d-6.227315360986914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f70540f90b%3A0xb2818ec1934f61db!2sPalma%20One%20Building!5e0!3m2!1sid!2sid!4v1699286223593!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
