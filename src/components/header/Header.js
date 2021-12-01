import React, { useContext } from "react";
import "./header.css";
import { Link } from 'react-router-dom'
import { AccountCircle } from "@mui/icons-material";
import { authContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user: { email }, handleLogOut, isAdmin,} = useContext(authContext);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header__top">
          <div className="header__top-left">
            <div className="header__top__icon">
              <Link to="/">
              <img
                src={require("../../assets/icons/mers.svg").default}
                width="50px"
              />
              </Link>
            </div>
            <div className="header__top__text">
              <h2>Mersedes-Benz</h2>
              <p>The best or nothing.</p>
            </div>
          </div>
          <div className="header__top-right">
            <div className="header__top-input">
            {isAdmin && (
              <Link to="/admin">
                <p>Админ панель</p>
              </Link>
            )}
            </div>
            <div className="header__top-auth">
            {email ? (
              <Link to="/auth">
                <p onClick={handleLogOut}>Выйти</p>
              </Link>
            ) : null}
            {email ? null : (
              <Link to="/auth">
                <AccountCircle fontSize="medium" style={{fill: "white"}}/>
              </Link>
            )}
            </div>
          </div>
        </div>
        <hr />
        <div className="header_bottom">
            <div className="info">
                <div className="header-shop">
                    <Link to="/favorites">
                        <p>Избранное</p>
                    </Link>
                </div>
                <div className="header__favorites">
                    <Link to="/list">
                        <p>Покупка</p>
                    </Link>
                </div>
                <div className="header__cart">
                    <p>Корзина</p>
                </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
