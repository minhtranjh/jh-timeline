import React, {  } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
function NavbarList({handleToggleMenu}) {
    return (
      <ul className="nav-list">
        <NavbarItem onClick={handleToggleMenu} path="/" label="Home" />
        <NavbarItem onClick={handleToggleMenu} path="/members" label="List Members" />
        <NavbarItem onClick={handleToggleMenu} path="/contact" label="Contact" />
        <NavbarItem onClick={handleToggleMenu} path="/contact" label="About" />
      </ul>
    );
}

export default NavbarList;
