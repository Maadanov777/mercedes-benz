// import React, { useContext, useEffect } from 'react';
// import { authContext } from '../../contexts/AuthContext';
// import { productsContext } from '../../contexts/ProductContext';
// import '../favorites/favorites.css'

// const Cart = () => {
//     const { getCart, cart, changeProductCount, removeProductToCart } = useContext(productsContext)
//     const { addProductToFavorites } = useContext(authContext)


//   useEffect(() => {
//     getCart()
//   }, [])

//   function handleRemoveStorage() {
//     localStorage.removeItem('cart')
//     getCart()
//   }

//     return (
//         <div className="all">
//         <div className="home-container">
//             <h1>FAVORITES</h1>
//         <div className='cards-home'>
//                     {favorites.favorites ? 
//                     favorites.favorites.map((item, index) => (
//                     <div class="card">
//                         <img src={item.image} width='100%'/>
//                         <div class="container">
//                             <h4><b>Mercedes-Benz {item.class}-Класс</b></h4>
//                             <p>{item.model}</p>
//                             <button class="button button2" onClick={() => removeFavorites(item)}>Удалить</button>
//                             <button class="button button2">Купить</button>
//                         </div>
//                     </div>
//                     ))
//                     : <p>Loading...</p>}   
//         </div>
//         </div>
//         </div>
//       );
// };

// export default Cart;