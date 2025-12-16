import React from 'react'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'

const Header = ({ cart, favorite, removeFromFavorite, clearCart, removeFromCart, increaseQty, decreaseQty}) => {
  return (
    <>
      <Navbar 
        cart={cart} 
        favorite={favorite}
        clearCart={clearCart} 
        removeFromFavorite={removeFromFavorite}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty} 
        decreaseQty={decreaseQty}
      />
      <Landing />
    </>
  );
};

export default Header;
