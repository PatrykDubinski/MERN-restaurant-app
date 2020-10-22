import React from "react";
import "./Header.css";

import logoImg from "../../assets/logo.svg";
import { Logo } from "../UI/StyledComponents/StyledComponents";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left-top">
          <Logo src={logoImg} />
          <h3>myRestaurant</h3>
        </div>
        <div className="header__left-bottom">
          <h1>Your favourite meals, delivered fast to your door.</h1>
          <div className="header__left-bottom-input">
            <input type="text" placeholder="Enter your address" />
            <button type="submit">Find Food</button>
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right-top">
          <div className="header__right-top--auth">
            <div className="header__right-top--auth-btn">
              <p>Login</p>
            </div>
            <select name="lang" id="lang-select">
              <option value="">--Please choose an option--</option>
              <option value="polish">Polish</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
        <div className="header__right-logo">
          <Logo src={logoImg} />
        </div>
      </div>
    </div>
  );
};

export default Header;
