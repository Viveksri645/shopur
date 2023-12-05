import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './product.css'

const Product = (props) => {
    const {id, productName, price, productImage} = props.details;
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id];
    return (
        <div id={id} className='product'>
            <img src={productImage} alt='no-support'/>
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>{price}</p>
            </div>
            <button className='addToCart' onClick={()=>addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    )
}

export default Product