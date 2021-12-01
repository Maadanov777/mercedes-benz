import React, { useContext, useEffect } from "react";
import "./favorites.css";
import { authContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, getProductToFavorites, removeFavorites } =
    useContext(authContext);

  useEffect(() => {
    getProductToFavorites();
  }, []);

  return (
    <div className="all">
      <div className="home-container">
        <h1>FAVORITES</h1>
        <div className="cards-home">
          {favorites.favorites ? (
            favorites.favorites.map((item) => (
              <div class="card">
                <img src={item.image} width="100%" />
                <div class="container">
                  <h4>
                    <b>Mercedes-Benz {item.class}-Класс</b>
                  </h4>
                  <p>{item.model}</p>
                  <button
                    class="button button2"
                    onClick={() => removeFavorites(item)}
                  >
                    Удалить
                  </button>
                  <Link to="/order">
                    <button class="button button2">Купить</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
