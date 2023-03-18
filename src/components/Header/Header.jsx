import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__overlay" />
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
