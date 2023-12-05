import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import { Products } from '../../products'
import CartDetails from './cart-details'
import { useNavigate } from 'react-router-dom'

import './cart.css'

const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(ShopContext);
  const totalBill = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <h1>Your Cart Items</h1>

      <div className='cartItems'>
          {Products.map(product => {
              if (cartItems[product.id] !== 0){
                return <CartDetails details={product}/>;
              }
          })}
      </div>
      
      {totalBill > 0?
        <div className='checkout'>
          <p> Total Billed Amount: Rs.{totalBill}</p>
          <div className='checkout_btn'>
            <button style={{margin:'1rem 1.2rem'}} onClick={()=>navigate('/shopur')}> Continue Shopping</button>
            <button> Proceed To Payment </button>
          </div>
        </div>
        :
        <p className='empty_cart'>
          <h2>Your Cart is Empty!</h2> 
          <p>Add items to your cart</p>
          <button onClick={()=>navigate('/shopur')}> Continue Shopping </button>
        </p>
      }
    </div>
  )
}

export default Cart