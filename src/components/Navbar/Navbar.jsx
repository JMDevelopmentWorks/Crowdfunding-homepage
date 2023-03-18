import React, { useState } from "react";
import "./Navbar.scss";
import { navLinks } from "../../Data/Data";
import { images } from "../../Constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={images.logo} alt="logo" />
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to="/">{link.label} </Link>
          </li>
        ))}
      </ul>

      <img
        onClick={() => setToggle(!toggle)}
        className={toggle === true ? "disable" : "navbar__hamburger"}
        src={images.icon_hamburger}
        alt="hamburger"
      />
      {toggle && (
        <div className="navbar__menu__container">
          <div className="navbar__menu__overlay" />
          <div className="navbar__menu">
            <img
              className="navbar__menu__close"
              onClick={() => setToggle(!toggle)}
              src={images.icon_closemenu}
              alt="close menu"
            />

            <ul className="navbar__menu__links">
              {navLinks.map((link) => (
                <li className="navbar__menu__link" key={link.id}>
                  <Link to="/">{link.label} </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
