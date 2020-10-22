import React from "react";
import "./Header.css";

import logoImg from "../../assets/logo.svg";
import { Logo, StyledHeader } from "../UI/StyledComponents/StyledComponents";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__left">
        <div className="header__left-top">
          <Logo src={logoImg} imgHeight="50px" />
          <h3>myRestaurant</h3>
        </div>
        <div className="header__left-bottom">
          <h1>Your favourite meals,</h1>
          <h1> delivered fast to your door.</h1>
          <form className="header__left-bottom-input">
            <input type="text" placeholder="Enter your address" />
            <button type="submit">Find Food</button>
          </form>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right-top">
          <div className="header__right-top--auth">
            <div className="header__right-top--auth-btn">
              <p>Login</p>
            </div>
            <select name="lang" id="lang-select">
              <option value="">--</option>
              <option value="polish">PL</option>
              <option value="english">Eng</option>
            </select>
          </div>
        </div>
        <div className="header__right-logo">
          <Logo src={logoImg} absolute imgHeight="90px" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
