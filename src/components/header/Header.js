import React, { useContext } from "react";
import "./header.css";

import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user, handleLogOut } = useContext(authContext);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header__top">
          <div className="header__top-left">
            <div className="header__top__icon">
              {/* <Link to="/"> */}
              <img
                src={require("../../assets/icons/mers.svg").default}
                width="50px"
              />
              {/* </Link> */}
            </div>
            <div className="header__top__text">
              <h2>Mersedes-Benz</h2>
              <p>The best or nothing.</p>
            </div>
          </div>
          <div className="header__top-right">
            <div className="header__top-input">
              <form className="example" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                  <i className="search"></i>
                </button>
              </form>
            </div>
            <div className="header__top-auth">
              {user ? (
                <button onClick={() => handleLogOut()}>logout</button>
              ): null}
              <AccountCircle fontSize="medium" />
            </div>
          </div>
        </div>
        <hr />
        <div className="header_bottom"></div>
      </div>
    </div>
  );
};

export default Header;
