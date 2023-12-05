import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './cart-details.css'


const CartDetails = (props) => {
  const {addToCart, removeFromCart, manuallyChange, cartItems} = useContext(ShopContext);
  let price = props.details.price;
  price = price.slice(7,price.length-7);

  return (
    <div className='cartDetails'>
        <img src={props.details.productImage} alt='no-support'/>
        <div className='description cartdescription'>
            <p>
                <b>{props.details.productName}</b>
            </p>
            <p>Rs.{price}</p>
            <div className='changeQuantity'>
                <button onClick={() => removeFromCart(props.details.id)}>-</button>
                <input style={{textAlign:'center'}} size={1} value={cartItems[props.details.id]} onChange={(e) => manuallyChange(props.details.id,e.target.value)}/>
                <button onClick={() => addToCart(props.details.id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartDetails;