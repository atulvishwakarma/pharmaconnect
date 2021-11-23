import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../../assest/logo/logo.jpeg";
import logo from "../../../assest/logo/pharma-connect.svg";
// import logo from "../../../assest/product/Image-Coming-Soon.png";
import NavLink from "../navlink/NavLink";
import "./Header.css";
const Header = () => {
  return (
    <div className="header bg-green-800">
      <div className="container mx-auto px-4 py-2">
        <div className="header__inner flex w-100 justify-center items-center">
          <div className="header__brand">
            <Link to="/" rel="home link" className="flex items-center">
              <img src={logo} alt="Pharma Connect" />
              <span className="inline-block text-xl ml-2 text-white">
                Pharma Connect
              </span>
            </Link>
          </div>
          <div className="header__links flex flex-1 justify-end">
            <NavLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
