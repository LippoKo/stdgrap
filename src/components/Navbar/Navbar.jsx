import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>
          <a className="title-logo">LOGO</a>
        </div>
        <div className="nav-start">
          <ul>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#community">COMMUNITY</a>
            </li>
            <li>
              <a href="#location">LOCATION</a>
            </li>
            <li>
              <a href="#our-menu">OUR MENU</a>
            </li>
            <li>
              <a href="#popular-recipes">RECIPES</a>
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

      {/* side-bar */}
      <div className="left-bar">
        <ul>
          <li>
            <a href="#">
              <span style={{ borderColor: "black" }}></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ borderColor: "black" }}></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ borderColor: "black" }}></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ borderColor: "black" }}></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ borderColor: "black" }}></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span style={{ borderColor: "black" }}></span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
