import React from 'react'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'

const Header = ({ cart, clearCart, removeFromCart, increaseQty, decreaseQty}) => {
  return (
    <>
      <Navbar 
        cart={cart} 
        clearCart={clearCart} 
        removeFromCart={removeFromCart}
        increaseQty={increaseQty} 
        decreaseQty={decreaseQty}
      />
      <Landing />
    </>
  );
};

export default Header;
