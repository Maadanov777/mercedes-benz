import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContext';
import EditProduct from '../editProduct/EditProduct';


const Admin = () => {
    const { getProduct, products } = useContext(productsContext)
    const [state, setState] = useState(false)
  
    useEffect(() => {
      getProduct()
    }, [])

  
    return (
          <>
            <div className="product-list">
              <div className="container-product">
                <div className="cards">
                {products
                    .map((item) => (
                        <div class="wrapper">
                        <div class="productCard__container">
                            <img src={item.image} width="100%" height='100%'/>
                        </div>
                        <div class="productCard__container-details">
                            <h3>{item.class}-Класс {item.model}</h3>
                            <p>{item.price}$</p>
                        </div>
                        <div class="productCard__container-buy">
                              <button onClick={() => setState(true)}></button>
                        </div>
                        {state ? <EditProduct item={item}/> : null}
                </div>
                    ))}
                </div>
              </div>
            </div>

          </>
        )
};

export default Admin;