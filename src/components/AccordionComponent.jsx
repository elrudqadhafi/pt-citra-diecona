import React from "react"
import { Collapse } from "react-collapse"

const AccordionComponent = ({ open, toggle, title, image }) => {
  return (
    <div>
      <div
        className="flex justify-between items-center bg-blue-900 py-3 px-3 lg:px-5 border-b border-gray-500 cursor-pointer"
        onClick={toggle}
      >
        <p className="text-white text-xl font-light">{title}</p>
        <div className="text-xl text-white">
          {open ? (
            <i className="ri-arrow-up-s-line"></i>
          ) : (
            <i className="ri-arrow-down-s-line"></i>
          )}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-blue-900/10 py-[20px] px-[10px] lg:px-[30px]">
          <img src={image} alt="" className="w-full" />
        </div>
      </Collapse>
    </div>
  )
}

export default AccordionComponent
