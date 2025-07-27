import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex h-screen w-4/5 justify-center items-center bg-white z-[9999] relative">
      <div className="w-full h-full flex flex-col relative z-[9999]">
        {/* Top Icon */}
        <div className="flex items-center justify-between h-[10%] w-full bg-inherit px-4 relative z-[9999]">
          <i className="fa-solid fa-user text-2xl bg-red-500 rounded-full p-2 relative z-[9999]"></i>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col flex-1 bg-slate-500 overflow-y-auto pl-4 pt-10 space-y-4 font-bold text-lg text-gray-800 relative z-[1]">
          <div className="bg-yellow-400 z-[9999] ">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-house-user" />
              <span>Main Menu</span>
            </Link>

            <Link
              to="/new-items"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-kiwi-bird" />
              <span>New Items 2025</span>
            </Link>

            <Link
              to="/upload"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-square-up-right" />
              <span>Upload Your Design</span>
            </Link>

            <Link
              to="/feedback"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-comments-dollar" />
              <span>Feedback</span>
            </Link>

            <Link
              to="/customization"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-brands fa-intercom" />
              <span>User Customization</span>
            </Link>

            <Link
              to="/styles"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-star-half-stroke" />
              <span>New Style</span>
            </Link>

            <Link
              to="/explore"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-brands fa-wpexplorer" />
              <span>Explore</span>
            </Link>

            <Link
              to="/release"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-shekel-sign" />
              <span>Latest Release</span>
            </Link>

            <Link
              to="/compare"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-code-compare" />
              <span>Compare</span>
            </Link>

            <Link
              to="/media"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-brands fa-medapps" />
              <span>Media & Pictures</span>
            </Link>

            <Link
              to="/options"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-filter" />
              <span>Option</span>
            </Link>

            <Link
              to="/exit"
              className="flex items-center space-x-2 hover:text-yellow-700 relative z-[9999] cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <i className="fa-solid fa-door-open" />
              <span>Exit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
