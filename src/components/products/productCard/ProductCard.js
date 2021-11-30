import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../../contexts/AuthContext'
import './productCard.css'

const ProductCard = ({ item }) => {
const {addProductToFavorites} = useContext(authContext)
  return (
    <div class="wrapper">
        <div class="productCard__container">
            <img src={item.image} width="100%" height='100%'/>
        </div>
        <div class="productCard__container-details">
            <h3>{item.class}-Класс {item.model}</h3>
            <p>{item.price}$</p>
        </div>
        <div class="productCard__container-buy">
          <Link to={`details/${item.id}`}>
            <button>details</button>
          </Link>
          <button onClick={() => addProductToFavorites(item)}>favorites</button>
        </div>
</div>

  )
}

export default ProductCard
