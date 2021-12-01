import React, { createContext, useEffect, useReducer, useState} from 'react'
import { db } from '../firebase'
import {addDoc, collection, doc, getDocs, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'
export const productsContext = createContext()

const INIT_STATE = {
    products: [],
    currentProduct: null,
    category: []
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
        return { ...state, products: action.payload }
    case 'GET_CURRENT_PRODUCT':
        return { ...state, currentProduct: action.payload }
    case 'GET_CATEGORY_PRODUCT':
        return { ...state, products: action.payload }
    default:
      return state
  }
}

const ProductsContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, INIT_STATE)
const productsCollectionRef = collection(db, "products")
const [edit, setEdit] = useState()

    async function getProduct () {
        const data = await getDocs(productsCollectionRef)
        let products = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        dispatch({
            type: 'GET_PRODUCTS',
            payload: products
        })
    }

    async function handleDelete(id) {
      const productDoc= doc(db, 'products', id)
      await deleteDoc(productDoc) 
      getProduct()
    }

    async function getProductByCategory(item) {
      await getDocs(productsCollectionRef)
        .then((snapshot) => {
          let products = [];
          snapshot.docs.forEach(doc => doc.data().model === item ? products.push(doc.data()) : null)
            dispatch({
             type: 'GET_CATEGORY_PRODUCT',
             payload: products
          })
        })
  
  }

    async function addProduct (item) {
      let obj = {...item}
        await addDoc(productsCollectionRef, obj)
    }

    async function getCurrentProduct(id) {
      await getDocs(productsCollectionRef)
        .then((snapshot) => {
          let currentProduct;
          snapshot.docs.forEach(doc => doc.id === id ? currentProduct = doc.data() : null)
          dispatch({
                type: 'GET_CURRENT_PRODUCT',
                payload: currentProduct
              })
        })
    }
//////// Cart ///////
    // const addProductToCart = (shoes) => {
    //   try {
    //     let cart = JSON.parse(localStorage.getItem('cart'))
    //     if (!cart) {
    //       cart = {
    //         shoes: [],
    //         totalPrice: 0,
    //       }
    //     }
    //     let newProduct = {
    //       item: shoes,
    //       count: 1,
    //       subPrice: 0,
    //     }
    //     console.log(cart)
    //     let filteredCart = cart.shoes.filter((elem) => elem.item.id === shoes.id)
    //     if (filteredCart.length > 0) {
    //       cart.shoes = cart.shoes.filter((elem) => elem.item.id !== shoes.id)
    //     } else {
    //       cart.shoes.push(newProduct)
    //     }
    //     newProduct.subPrice = calcSubPrice(newProduct)
    //     cart.totalPrice = calcTotalPrice(cart.shoes)
    //     localStorage.setItem('cart', JSON.stringify(cart))
    //     dispatch({
    //       type: 'CHANGE_CART_COUNT',
    //       payload: cart.shoes.length,
    //     })
    //   } catch (e) {
    //     console.log('. ')
    //   }
    // }

    async function editProduct(id, product) {
      const productDoc = doc(db, "products", id)
      await updateDoc(productDoc, product)
       getProduct()
    }

    // const getCart = () => {
    //   let cart = JSON.parse(localStorage.getItem('cart'))
    //   if (!cart) {
    //     cart = {
    //       shoes: [],
    //       totalPrice: 0,
    //     }
    //   }
    //   dispatch({
    //     type: 'GET_CART',
    //     payload: cart,
    //   })
    // }
  
    // function changeProductCount(count, id) {
    //   let cart = JSON.parse(localStorage.getItem('cart'))
    //   cart.shoes = cart.shoes.map((elem) => {
    //     if (elem.item.id === id) {
    //       elem.count = count
    //       elem.subPrice = calcSubPrice(elem)
    //     }
    //     return elem
    //   })
    //   cart.totalPrice = calcTotalPrice(cart.shoes)
    //   localStorage.setItem('cart', JSON.stringify(cart))
    //   getCart()
    // }
  
    // function removeProductToCart(item) {
    //   console.log(item, 'aasasasasas')
    //   let data = JSON.parse(localStorage.getItem('cart'))
    //   console.log(data, '...........')
    //   const product = {...data}
    //   product.shoes = product.shoes.filter(elem => elem.item.id !== item.id)
    //   console.log(product)
    //   localStorage.setItem('cart', JSON.stringify(product))
    //   getCart()
    //   changeProductCount()
    // }

    function handleEdit(item) {
      console.log(item)
      setEdit(item)
    }
///////////////////////////////////////

  return (
    <productsContext.Provider
      value={{
          products: state.products,
          currentProduct: state.currentProduct,
          getProduct,
          addProduct,
          getCurrentProduct,
          editProduct,
          getProductByCategory,
          handleEdit,
          edit,
          handleDelete
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export default ProductsContextProvider
