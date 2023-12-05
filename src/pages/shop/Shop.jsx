import React from 'react'
import {Products} from '../../products'
import Product from './Product'
import './shop.css'

const Shop = () => {
  return (
    <div className='shop'>
        <div>
            <h1>OUR PRODUCTS</h1> 
        </div>
        <div className='products'>
            {Products.map(product =>
              <Product key={product.id} details={product}/>
              )}
        </div>
    </div>
  )
}

export default Shop