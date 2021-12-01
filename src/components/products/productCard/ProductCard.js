import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../../contexts/AuthContext'
import './productCard.css'
import { BiAlignJustify } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { SiCashapp } from "react-icons/si";



const ProductCard = ({ item }) => {
const {addProductToFavorites} = useContext(authContext)
  return (
    <div className="wrapper">
        <div className="productCard__container">
            <img src={item.image} width="100%" height='100%'/>
        </div>
        <div className="productCard__container-details">
            <h3>{item.class}-Класс {item.model}</h3>
            <p>{item.price}$</p>
        </div>
        <div className="productCard__container-buy">
          <Link to={`details/${item.id}`}>
           <BiAlignJustify size='25px' color='blue'/>
          </Link>
        <BsFillHeartFill size='25px' color='red' onClick={() => addProductToFavorites(item)}/>
        <Link to='/comments'>
          <AiOutlineComment size='25px' color='green'/>
        </Link>
        <Link to="/order">
          <SiCashapp size='25px' color='green'/>
        </Link>
        </div>
</div>

  )
}

export default ProductCard
