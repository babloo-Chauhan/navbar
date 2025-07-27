import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import b from "../Assets/b.jpeg";
import c from "../Assets/c.jpeg";
import d from "../Assets/d.jpeg";
import e from "../Assets/e.jpeg";
import Menu from "./Menu";

export default function Card() {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close menu on mobile by default
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const Cardstyle = {
    transform: open
      ? "translateX(0) scale(1,1)"
      : "translateX(290px) scale(0.8,0.8)",
    transition: "all 0.7s ease-in-out",
    borderRadius: open ? "0px" : isMobile ? "0px" : "15px",
  };

  const myMenuStyle = {
    transform: open ? "translateX(-500px)" : "translateX(-110px)",
    marginLeft: open ? "10px" : "110px",
    pointerEvents: "auto",
    zIndex: 11,

    transition: "all 0.7s ease-in-out",
    width: isMobile ? "100%" : "auto",
  };

  const toggleLayout = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 h-full w-full shadow-2xl z-50 bg-red-400"
        style={myMenuStyle}
      >
        <Menu className="fixed top-0 left-0 h-full w-full shadow-2xl z-50" />
        <div className="absolute top-3 right-3 h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white text-xl cursor-pointer">
          <i className="fa-solid fa-xmark r transition-transform duration-300"></i>
        </div>
      </div>

      <div className="relative h-screen w-screen overflow-hidden z-10">
        {/* menu close button */}
        <div className="h-8 w-36" onClick={toggleLayout}>
          <FaAngleLeft
            className="
        font-bold
        absolute
        top-1/2
        left-[305px]
        -translate-x-1/2
        -translate-y-1/2
        text-10px
        text-white
        z-1000
        bg-transparent
        bg-clip-text
        text-transparent
        bg-gradient-to-r
        from-red-500
        via-yellow-500
        to-pink-500
        drop-shadow-lg
        transition-all
        duration-300
        shaddow-lg
        hover:scale-110
        transform
        lg:left-[305px]
        md:left-[250px]
        sm:left-[200px]"
            style={{ fontSize: "40px", color: "red" }}
          />
        </div>

        <div
          className="absolute z-30 top-0 left-0 h-full w-full bg-gradient-to-br from-pink-500 via-yellow-400 to-purple-500 shadow-2xl transition-all duration-400"
          style={Cardstyle}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between h-[9%] bg-gray-500 px-4">
              <div
                className="flex items-center justify-center text-2xl cursor-pointer"
                onClick={toggleLayout}
              >
                {open ? (
                  <i className="fa-solid fa-bars transition-all duration-700 ease-in-out transform rotate-0"></i>
                ) : (
                  <i className="fa-solid fa-xmark rounded-full p-2 transition-all duration-700 ease-in-out transform rotate-180"></i>
                )}
              </div>
              <div className="flex items-center justify-center text-2xl">
                <i className="fa-solid fa-circle-user"></i>
              </div>
            </div>

            {/* Content with scroll */}
            <div className="flex-1 overflow-y-auto bg-gray-100">
              <div className="flex flex-wrap justify-center sm:justify-start items-start p-2 sm:p-4 gap-2 sm:gap-4">
                {[b, c, d, e, b, c, d, e].map((img, index) => (
                  <div
                    key={index}
                    className="h-32 w-24 sm:h-40 sm:w-32 md:h-48 md:w-36 lg:h-52 lg:w-40 bg-red-500 rounded-lg shadow-xl overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt={`item${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start items-start p-2 sm:p-4 gap-2 sm:gap-4">
                {[b, c, d, e, b, c, d, e].map((img, index) => (
                  <div
                    key={index}
                    className="h-32 w-24 sm:h-40 sm:w-32 md:h-48 md:w-36 lg:h-52 lg:w-40 bg-red-500 rounded-lg shadow-xl overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt={`item${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="p-4">
                <Link
                  to="/upload"
                  className="flex items-center justify-center sm:justify-start space-x-2 hover:text-yellow-700 text-sm sm:text-base"
                >
                  <i className="fa-solid fa-square-up-right" />
                  <span>Upload Your Design</span>
                </Link>
              </div>

              <Menu />
            </div>

            {/* Footer */}
            <div className="h-[10%] bg-gray-100 w-full flex items-center justify-evenly px-2">
              <i className="fa-solid fa-house text-lg sm:text-xl cursor-pointer mx-1 sm:mx-5" />
              <i className="fa-solid fa-compass text-lg sm:text-xl cursor-pointer mx-1 sm:mx-5" />
              <i className="fa-solid fa-magnifying-glass-dollar text-xl sm:text-2xl cursor-pointer mx-1 sm:mx-5" />
              <i className="fa-solid fa-cart-shopping text-lg sm:text-xl cursor-pointer mx-1 sm:mx-5" />
              <i className="fa-solid fa-user text-lg sm:text-xl cursor-pointer mx-1 sm:mx-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
