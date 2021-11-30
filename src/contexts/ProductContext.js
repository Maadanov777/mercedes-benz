import React, { createContext, useEffect, useReducer, useState} from 'react'
import { db } from '../firebase'
import {addDoc, collection, doc, getDocs, getDoc, updateDoc} from 'firebase/firestore'
import { NorthWest } from '@mui/icons-material'
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

    async function getProduct () {
        const data = await getDocs(productsCollectionRef)
        let products = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        dispatch({
            type: 'GET_PRODUCTS',
            payload: products
        })
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

    async function editProduct(id, product) {
      const productDoc = doc(db, "products", id)
      await updateDoc(productDoc, product)
       getProduct()
    }


  return (
    <productsContext.Provider
      value={{
          products: state.products,
          currentProduct: state.currentProduct,
          getProduct,
          addProduct,
          getCurrentProduct,
          editProduct,
          getProductByCategory
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export default ProductsContextProvider
