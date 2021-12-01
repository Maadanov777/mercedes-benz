import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductContext';
import '../../auth/Auth.css'

const Admin = () => {
    const { getProduct, products, handleEdit, handleDelete } = useContext(productsContext)
  
    useEffect(() => {
      getProduct()
    }, [])

  
    return (
          <>
              <div className="all">
    <div className="home-container">
      <div className='addpr'>
         <h1>ADMIN PANEL</h1>
         <Link to="add">
          <h1>ADD PRODUCT</h1>
        </Link>
      </div>
        
    <div className='cards-home'>
                {products ? products.map((item, index) => (
                <div class="card">
                    <img src={item.image} width='100%'/>
                    <div class="container">
                        <h4><b>Mercedes-Benz {item.class}-Класс</b></h4>
                        <p>{item.model}</p>
                        <button class="button button2" onClick={() => handleDelete(item.id)}>Удалить</button>
                        <Link to='/admin/editProduct'>
                          <button class="button button2" onClick={() => handleEdit(item)}>Edit</button>
                        </Link>
                    </div>
                </div>
    ))
                : <p>Loading...</p>  
                }
          </div>
          </div>
        </div>
    </>
)};

export default Admin;