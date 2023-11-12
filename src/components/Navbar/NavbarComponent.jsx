import React, { useEffect, useState } from "react"

import NavLogo from "../../assets/biglogo.png"
import { Link, NavLink } from "react-router-dom"
import Navlinks from "./Navlinks"

const NavbarComponent = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeNavbarOnOutsideClick = (e) => {
      if (open && !e.target.closest("nav")) {
        setOpen(false)
      }
    }

    document.addEventListener("click", closeNavbarOnOutsideClick)

    return () => {
      document.removeEventListener("click", closeNavbarOnOutsideClick)
    }
  }, [open])

  const closeNavbar = () => {
    setOpen(false)
  }

  return (
    <nav className="bg-white w-full z-50 fixed shadow-lg border-b-2 border-blue-900/20">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="z-50 py-3 pl-0 lg:p-0 lg:w-auto w-full flex justify-between">
            <img src={NavLogo} alt="navlogo" className="h-9 cursor-pointer" />
            <div
              className="text-3xl cursor-pointer lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <i className={`${open ? "ri-close-line" : "ri-menu-line"}`}></i>
            </div>
          </div>
          <ul className="lg:flex hidden items-center text-sm uppercase gap-7">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-blue-900 py-2 px-5 text-white rounded"
                    : "hover:text-blue-900"
                }
                end
              >
                Beranda
              </NavLink>
            </li>
            <Navlinks closeNavbar={closeNavbar} />
          </ul>
          {/* Mobile Menu */}
          <ul
            className={`
            text-xl lg:hidden bg-white shadow-lg absolute w-full h-auto sm:h-96 md:h-auto py-6 top-16 border-blue-900/20 border-t-[1px] duration-300 ${
              open ? "right-0" : "right-[100%]"
            }
          `}
          >
            <div className="container">
              <li>
                <Link
                  to="/"
                  className="py-5 inline-block hover:text-blue-900"
                  onClick={closeNavbar}
                >
                  Beranda
                </Link>
              </li>
              <Navlinks closeNavbar={closeNavbar} />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
