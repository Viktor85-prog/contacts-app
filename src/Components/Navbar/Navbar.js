import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/Login" activeClassName="selected">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacts" activeClassName="selected">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
