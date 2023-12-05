import React, { createContext } from 'react'
import { useState } from 'react';
import { Products } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=1; i<=Products.length; i++){
        cart[i] = 0;
    }

    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = Products.filter(product => product.id === Number(item));
                let price = itemInfo[0].price;
                price = price.slice(7,price.length-7);
                totalAmount += (cartItems[item]* Number(price)); 
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId]+1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev=>({...prev, [itemId]: prev[itemId]-1}))
    };
    
    const manuallyChange = (itemId,val) => {
        if(val>=0) {
            setCartItems(prev => ({...prev, [itemId]: (val-0)})) //value received from input would be in string so i minus 0 to convert it into a number
        }
        else{
            setCartItems(prev => ({...prev, [itemId]: (1-0)}))
        }
    };

    const contextValue = {cartItems, addToCart, removeFromCart, manuallyChange, getTotalAmount}
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
