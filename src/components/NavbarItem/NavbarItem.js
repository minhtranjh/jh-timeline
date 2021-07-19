import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarItem.css";
function NavbarItem({ path, label, onClick }) {
  return (
    <li className="nav-item">
      <NavLink onClick={onClick} className="nav-link" to={path}>
        {label}
      </NavLink>
    </li>
  );
}

export default NavbarItem;
