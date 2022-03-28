import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-3">
      <a className="navbar-brand text-uppercase" href="/">
        {brand}
      </a>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Coming soon
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" > Search</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/locations"> Locations</a>
          </li>
        </ul>
        <form className=""></form>
      </div>
    </nav>
  );
};

export default Navbar;
