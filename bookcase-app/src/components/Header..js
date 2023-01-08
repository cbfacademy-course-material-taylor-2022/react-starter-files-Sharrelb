import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div>
        <h1>My e-Book Library</h1>
      </div>
      <div className="menu">
        <Link to="/"> Home </Link>|
        <Link to="/bookcase" className="bookLink">
          Bookcase(0)
        </Link>
        |
        <Link to="/about" className="bookLink">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
