import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assest/logo/pharma-connect.svg";
import NavLink from "../navlink/NavLink";
import "./Header.css";
import { CgMenuMotion, CgClose } from "react-icons/cg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header bg-green-800" id="header__section">
      <div className="container mx-auto px-4 py-2">
        <div className="header__inner   relative flex justify-between w-100 items-center">
          <div className="header__brand">
            <Link to="/" rel="home link" className="flex items-center">
              <img src={logo} alt="Pharma Connect" />
              <span className="inline-block text-base lg:text-xl ml-2 text-white">
                Pharma Connect
              </span>
            </Link>
          </div>

          <div className="mobile__bargar--menu md:hidden">
            <button
              onClick={handleMenu}
              className={`mobile__bargar--menu__btn flex justify-end transition duration-500 ease-in-out ${
                isMenuOpen ? "menu__open" : "menu__close"
              }`}
            >
              {isMenuOpen ? (
                <span>
                  <CgClose className="text-2xl text-white" />
                </span>
              ) : (
                <span>
                  <CgMenuMotion className="text-2xl text-white" />
                </span>
              )}
            </button>
          </div>
          <div className="header__links hidden md:flex flex-1 justify-end">
            <NavLink />
          </div>
          <div
            className={`header__links mobile__header--menu  md:hidden flex-1 justify-end ${
              isMenuOpen ? "drawer__open" : ""
            }`}
          >
            <div className="mobile__header--menu__close flex justify-end h-10">
              <button onClick={handleMenu} className="pr-4 text-lg text-white">
                Close X
              </button>
            </div>
            <NavLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
