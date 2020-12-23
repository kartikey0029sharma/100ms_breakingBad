import React from "react";
import { Link } from "react-router-dom";
//import '../Styles/Header.css';

function Header() {
  return (
    <div>
      <h1 className="header">
        <Link className="headerLink" to="/">
          Breaking Bad
        </Link>
      </h1>
    </div>
  );
}

export default Header;
