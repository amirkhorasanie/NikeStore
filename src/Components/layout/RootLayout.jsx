import React, { useState } from 'react'
import Header from '../common/Header'
import { Outlet, ScrollRestoration, useMatches } from 'react-router'
import Footer from '../common/Footer'

const RootLayout = () => {
  const [cart, setCart] = useState([]);
  
const addToCart = (product) => {
  setCart(prev => {
    const exists = prev.find(item => item.id === product.id);

    if (exists) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};

const increaseQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (id) => {
  setCart(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

  
  const clearCart = () => {
    setCart([])
  }
  
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const matches = useMatches();
  const hideFooter = matches.some(match => match.handle?.hideFooter);

  return (
    <section id='root'>
      <Header 
        cart={cart} 
        clearCart={clearCart} 
        removeFromCart={removeFromCart} 
        increaseQty={increaseQty} decreaseQty={decreaseQty}
      />
      <ScrollRestoration />

      <main>
        <Outlet context={{ cart, addToCart}} />
      </main>

      {!hideFooter && <Footer />}
    </section>
  );
};

export default RootLayout;
