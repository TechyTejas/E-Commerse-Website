 
import './App.css';
import Cart from './Components/CartCompo.js/Cart';
import Store from './Components/Store';
import Header from './Layouts/Header';
import React, {useState} from 'react';
import CartProvider from './Components/Store/CartProvider';

function App() {
  const[cartIsShown,setCartIsShown]=useState(false)

  const ShowCartHandler =()=>{
    setCartIsShown(true)
  }

  const HideCartHandler =()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
    {cartIsShown &&  <Cart onClose={HideCartHandler}/>}
    <Header onClick={ShowCartHandler}/>
    <Store/>
    </CartProvider>
  );
}

export default App;
