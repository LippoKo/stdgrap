import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a className="title">STDGRAP</a>
      </div>
      <div className="nav-start">
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">COMMUNITY</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">OUR MENU</a>
          </li>
          <li>
            <a href="#">RECIPES</a>
          </li>
        </ul>
      </div>
      <div className="nav-end">
        <ul>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="nav-login">
        <ul>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
