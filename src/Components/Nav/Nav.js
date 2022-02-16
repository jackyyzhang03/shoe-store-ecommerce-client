import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <NavContainer>
      <div className="links">
        <div className="left">
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Accessories</Link>
        </div>
        <div className="center">
          <Link to="/">
            <span>The Sneaker Shop</span>
          </Link>
        </div>
        <div className="right">
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} size="xl"/></Link>
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;
