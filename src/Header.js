import React from "react";
import "./Header.css";
import logo from "./assets/teslaLogoSmall.svg";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} className="header_logo" alt="logo" />
      </div>

      <div className="header_center">
        <p>model s</p>
        <p>model 3</p>
        <p>model x</p>
        <p>model y</p>
        <p>solar roof</p> 
        <p>solar panels</p>
      </div>

      <div className="header_right">
        <p>shop</p>
        <p>tesla account</p>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
