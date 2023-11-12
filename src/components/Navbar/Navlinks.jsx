import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navlinks = ({ closeNavbar }) => {
  const [heading, setHeading] = useState("")

  const links = [
    {
      name: "Perusahaan",
      submenu: true,
      sublinks: [
        {
          sublink: [
            {
              name: "Tentang Kami",
              link: "/tentang-kami",
            },
            {
              name: "Struktur Organisasi",
              link: "/struktur-organisasi",
            },
            {
              name: "Sertifikat & Penghargaan",
              link: "/sertifikat-penghargaan",
            },
            {
              name: "Company Profile",
              link: "/company-profile",
            },
          ],
        },
      ],
    },
    {
      name: "Sektor",
      submenu: true,
      sublinks: [
        {
          sublink: [
            {
              name: "Infrastruktur",
              link: "/infrastruktur",
            },
            {
              name: "Sumber Daya Air",
              link: "/sumber-daya-air",
            },
            {
              name: "Pembangunan Wilayah",
              link: "/pembangunan-wilayah",
            },
            {
              name: "Pembangunan Lingkungan",
              link: "/pembangunan-lingkungan",
            },
            {
              name: "Pembangunan Fasilitas Industri",
              link: "/pembangunan-fasilitas-industri",
            },
            {
              name: "Study Ekonomi & Manajemen",
              link: "/study-ekonomi-manajemen",
            },
          ],
        },
      ],
    },
    {
      name: "Proyek",
      submenu: true,
      sublinks: [
        {
          sublink: [
            {
              name: "List Proyek",
              link: "/list-proyek-citra-diecona",
            },
            {
              name: "Semua Proyek",
              link: "/proyek-citra-diecona",
            },
          ],
        },
      ],
    },
  ]

  return (
    <>
      {links.map((links) => {
        return (
          <div key={links.name}>
            <div className="text-left cursor-pointer group">
              <h1
                className="py-5 flex items-center justify-between hover:text-blue-900"
                onClick={() => {
                  setHeading(heading === links.name ? "" : links.name)
                }}
              >
                {links.name}
                <span className="text-xl lg:ml-3 mr-2">
                  <i
                    className={`${
                      heading === links.name
                        ? "ri-arrow-up-s-line"
                        : "ri-arrow-down-s-line"
                    }`}
                  ></i>
                </span>
              </h1>
              {links.submenu && (
                <div key={links.name}>
                  <div className="absolute hidden group-hover:lg:block hover:lg:block">
                    <div className="py-3">
                      <div className="w-4 h-4 left-3 absolute mt-1 bg-blue-900 rotate-45 -z-10"></div>
                    </div>
                    <div className="bg-blue-900 p-3.5 rounded">
                      {links.sublinks.map((mysublink, index) => {
                        return (
                          <div key={index}>
                            {mysublink.sublink.map((slink, index) => (
                              <li className="my-7 text-white" key={index}>
                                <NavLink
                                  to={slink.link}
                                  className={({ isActive, isPending }) =>
                                    isPending
                                      ? "pending"
                                      : isActive
                                      ? "bg-yellow-200 py-2 px-5 text-blue-900 rounded"
                                      : "hover:text-yellow-200"
                                  }
                                  end
                                >
                                  {slink.name}
                                </NavLink>
                              </li>
                            ))}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menus */}
            <div
              className={`${heading === links.name ? "lg:hidden" : "hidden"}`}
            >
              {links.sublinks.map((slinks, index) => {
                return (
                  <div key={index}>
                    {slinks.sublink.map((slink, subIndex) => {
                      return (
                        <li className="py-3 pl-5" key={subIndex}>
                          <NavLink
                            to={slink.link}
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "bg-blue-900 py-2 px-5 text-yellow-200 rounded"
                                : "hover:text-blue-900"
                            }
                            onClick={() => {
                              setHeading("")
                              closeNavbar()
                            }}
                            end
                          >
                            {slink.name}
                          </NavLink>
                        </li>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Navlinks
