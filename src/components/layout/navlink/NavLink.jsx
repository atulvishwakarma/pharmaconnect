import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle, MdArrowDropDown } from "react-icons/md";
import "./NavLink.css";
import { useAuth } from "../../../contexts/AuthContext";
const NavLink = () => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const { currentUser, logout } = useAuth();
  console.log(currentUser);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    setIsDropDownActive(!isDropDownActive);
    navigate("/");
  };
  const handleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };
  return (
    <nav className="nav">
      <ul className="nav__links flex">
        <li className="nav__links--link">
          <Link to="/" className="text-white text-sm">
            Home
          </Link>
        </li>
        <li className="nav__links--link">
          <Link to="/product" className="text-white text-sm">
            Products
          </Link>
        </li>
        <li className="nav__links--link">
          <Link to="/about" className="text-white text-sm">
            About
          </Link>
        </li>
        <li className="nav__links--link">
          <Link to="/contact" className="text-white text-sm">
            Contact
          </Link>
        </li>
        {currentUser && (
          <li className="nav__links--link nav__link--user">
            <button
              onClick={handleDropDown}
              className="text-white text-sm nav__logout"
            >
              <MdAccountCircle className="text-lg inline-block nav__icon" />{" "}
              <span>{currentUser.displayName || "Hi"}</span>
              <MdArrowDropDown className="nav__icon" />
            </button>
            <div
              className={`nav__links--dropdown  ${
                isDropDownActive
                  ? "menu__dropdown menu__dropdown--active"
                  : "menu__dropdown"
              }`}
            >
              <ul className="menu__dropdown--links">
                <li className="menu__dropdown--link">
                  <button onClick={handleLogout}>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        )}
        {!currentUser && (
          <li className="nav__links--link nav__link--user">
            <Link to="/login" className="text-white text-sm">
              <MdAccountCircle className="text-lg inline-block nav__icon" />{" "}
              Signin
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavLink;
