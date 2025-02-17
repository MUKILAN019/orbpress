import React, { useState, useEffect } from "react";
import { ImageHandler } from "../utils/imagehandler";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Dialog from "../utils/dialogCenter";
import Drawer from "../utils/Drawer";
import PopOver from "../utils/popover";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token){
    setIsLoggedIn(true);
    }
 },[])
  return (
    <nav className="flex !justify-between !items-center bg-blue-500 p-4 h-20 relative !w-full">
      {/* Logo */}
      <div className="w-40 ml-4">
        <img
          src={ImageHandler.Logo}
          alt="Logo"
          className="!border !border-blue-500 !rounded-2xl"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex !justify-between space-x-10 text-xl !important">
        {isLoggedIn ? (
          <ul className="flex space-x-10 items-center font-bold text-emerald-50 list-none ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer"><PopOver/></li>
            <li>
            
              <Dialog />
             
              
            </li>
            <div className="flex items-center space-x-2">
              <img src={ImageHandler.ProfileImg} alt="Profile" className="!w-8" />
              <li className="cursor-pointer"><Drawer/></li>
            </div>
          </ul>
        ) : (
          <ul className="flex space-x-10 items-center list-none">
            <Link to="/login" className="font-bold text-emerald-50 cursor-pointer">
              Log in
            </Link>
            <Link to="/signup">
              <li
                className="!bg-amber-50 !w-40 !h-12 font-semibold flex justify-center items-center !rounded-xl text-2xl text-blue-900 cursor-pointer"
              >
                Get Started
              </li>
            </Link>
          </ul>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white mr-4"
      >
        {menuOpen ? <X size={40} /> : <Menu size={50} />}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-500 text-white absolute top-20 right-0 !w-60 border-2 border-dashed shadow-lg z-50 p-5 space-y-5">
          {isLoggedIn ? (
            <ul className="flex flex-col space-y-4 list-none text-center">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer"><PopOver/></li>
              <li>
            
              <Dialog />
              
              </li>
              <div className="flex items-center space-x-2 justify-center">
                <img src={ImageHandler.ProfileImg} alt="Profile" className="!w-8" />
                <li className="cursor-pointer">
                  <Drawer/>
                </li>
              </div>
            </ul>
          ) : (
            <ul className="!flex !flex-col !space-y-4 list-none text-center">
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <li className="!font-bold text-emerald-50 cursor-pointer">Log in</li>
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <li className="!bg-amber-50 !w-40 !h-12 font-semibold flex justify-center items-center !rounded-xl text-2xl text-blue-900 cursor-pointer">
                  Get Started
                </li>
              </Link>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
