import React, { useEffect, useContext, useState } from 'react'
import ProductCard from '../productCard/ProductCard'
import { productsContext } from '../../../contexts/ProductContext'
import './ProductList.css'
import SideBar from '../../sideBar/SideBar'
import ReactPaginate from 'react-paginate'


const ProductList = () => {
  const { getProduct, products, getProductByCategory} = useContext(productsContext)
  const [page, setPage] = useState(0)

  const pageCount = Math.ceil(products.length / 6)

  useEffect(() => {
    getProduct()
    
  }, [])

  function changePage({ selected }) {
    setPage(selected)
  }

  const productrsPerPage = 6

  const pageVisited = page * productrsPerPage

  const displayProducts = products
  .slice(pageVisited, pageVisited + productrsPerPage)
    .map((item) => <ProductCard key={item.id} item={item} />)

  return (
    <>
    <div>
      <div className="product-list">
        <div className="product-list__sidebar">
          <SideBar />
            <hr />
        </div>
        <div className="container-product">
          <div className="cards">{displayProducts}</div>
          <div className="paginate">
          <ReactPaginate 
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLabelClassName={'previousBttn'}
            nextLabelClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductList
