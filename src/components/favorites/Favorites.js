import React, { useContext, useEffect } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import './favorites.css'
import { authContext } from '../../contexts/AuthContext'

const Favorites = () => {
  const { favorites, getProductToFavorites, removeFavorites } = useContext(authContext)

//   function removeProduct(index) {
//     let newFavorites = [...favorites]
//     newFavorites.splice(index, 1)
//     removeFavorites(userId, newFavorites)
//   }

//   function removeAll() {
//     removeFavorites(userId, [])
//   }

  useEffect(() => {
    getProductToFavorites()
  }, [])

  return (
    <div className="all">
    <div className="home-container">
        <h1>FAVORITES</h1>
    <div className='cards-home'>
                {favorites.favorites ? 
                favorites.favorites.map((item, index) => (
                <div class="card">
                    <img src={item.image} width='100%'/>
                    <div class="container">
                        <h4><b>Mercedes-Benz {item.class}-Класс</b></h4>
                        <p>{item.model}</p>
                        <button class="button button2" onClick={() => removeFavorites(item)}>Удалить</button>
                        <button class="button button2">Купить</button>
                    </div>
                </div>
                ))
                : <p>Loading...</p>}   
    </div>
    </div>
    </div>
  )
}

export default Favorites
