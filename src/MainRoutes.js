import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import ProductDetailsCLS from './components/products/productDetailsCLS/ProductDetailsCLS'
import history from './helpers/helpers'
import ProductDetails from './components/products/productDetails/ProductDetails'
import ProductList from './components/products/productList/ProductList'
import AddProduct from './admin/addProduct/AddProduct'
import EditProduct from './admin/editProduct/EditProduct'
import Admin from './admin/adminPanel/Admin'
import HomePage from './components/home/HomePage'
import Auth from './auth/Auth'
import Favorites from './components/favorites/Favorites'
import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import Order from './components/order/Order'
import Comments from './components/products/productCard/Comments'
const MainRoutes = () => {
  return (
    <Router location={history.location} navigator={history}>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/add" element={<AddProduct/>} />
      <Route path="/cart" element={<Cart/>} />
        <Route path="/list/details/:id" element={<ProductDetails />} />
        <Route path="/detailsCLS" element={<ProductDetailsCLS />} />
        <Route path='/list' element={<ProductList/>}/>
        <Route path='/admin/editProduct/' element={<EditProduct/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="/auth" element={<Auth/>} />
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/coments' element={<Comments />}/>

      </Routes>
    </Router>
  )
}

export default MainRoutes
