import React, {  useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo-white.png";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import NavbarList from "../NavbarList/NavbarList";
function Navbar () {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
    return (
      <div className="navbar">
        <div className="logo-area">
          <img src={logo} alt="journey horizon logo" />
          <p>Journey Horizon</p>
        </div>
        <div
          className={isMenuOpen ? "navlist-wrapper is-active" : "navlist-wrapper"}
        >
          <NavbarList handleToggleMenu={handleToggleMenu} />
        </div>
        <div className="hamburger-wrapper">
          <HamburgerButton
            isMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
          />
        </div>
      </div>
    );
}

export default Navbar;
